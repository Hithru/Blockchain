// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8; 
// pragma solidity ^0.8.0;
// pragma solidity >=0.8.0 <0.9.0;

contract SimpleStorage{
    // boolean, uint, int, address, bytes
    // bool hasFavoriteNumber = true;
    uint256 public favoriteNumber;  // This gets initialized to zero!
    // string favoriteNumberInText = "FIVE";
    // int256 favoriteInt = -5;
    // address myAddress = 0xAa62006DcB8Ea5e90Ec241FA33768aa8c4887a34;
    // bytes32 favoriteByets = "cat";

    // People public person = People({favoriteNumber: 2, name: "Hithru"});
    // People public person2 = People({favoriteNumber: 5, name: "Naduli"});
    mapping(string => uint256) public nameToFavoriteNumber;

    struct People{
        uint256 favoriteNumber;
        string name;
    }

    People[] public people;

    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    function retrieve() public view returns(uint256){
        return favoriteNumber;
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(People(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}
