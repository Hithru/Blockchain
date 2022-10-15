// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./PriceConverter.sol";

error NotOwner();

contract FundMe{
    using PriceConverter for uint256;

    uint256 public constant MINIMUM_USD = 50 * 1e18;

    address[] public funders;
    mapping(address => uint256) public addressToAmountFunded;

    address public immutable owner;

    constructor(){
        owner = msg.sender;
    }

    function fund() public payable {
        
        require(msg.value.getConversionRate() >= MINIMUM_USD, "Didn't send enough"); // 1e18 = 1 * 10**18 wei == 1 ether
        funders.push(msg.sender);
        addressToAmountFunded[msg.sender] += msg.value;
    }


    function withdraw() public onlyOwner{


        for(uint256 funderIndex = 0; funderIndex < funders.length; funderIndex++){
            address funder = funders[funderIndex];
            addressToAmountFunded[funder] = 0;
        }
        //reset the array
        funders = new address[](0);
        //actually  withdraw the funds

        // transfer
        // payable(msg.sender).transfer(address(this).balance);
        // send
        // bool sendSuccess = payable(msg.sender).send(address(this).balance);
        // require(sendSuccess, "Send failed");
        // call
        (bool callSuccess, ) = payable(msg.sender).call{value: address(this).balance}("");
        require(callSuccess, "Call failed");


    }

    modifier onlyOwner {

        // require(msg.sender == owner, "Sender is not owner!");
        if (msg.sender != owner){revert NotOwner();}
        _;
    }

        /*
    Which function is called, fallback() or receive()?

           send Ether
               |
         msg.data is empty?
              / \
            yes  no
            /     \
receive() exists?  fallback()
         /   \
        yes   no
        /      \
    receive()   fallback()
    */

    // Function to receive Ether. msg.data must be empty
    receive() external payable {
        fund();
    }

    // Fallback function is called when msg.data is not empty
    fallback() external payable {
        fund();
    }

}