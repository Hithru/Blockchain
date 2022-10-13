const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
  //http://127.0.0.1:7545
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:7545"
  );
  const wallet = new ethers.Wallet(
    "a2714f6142dbb0e5d859453e7500c70a03d762e8fdb588599a2633e68bf26707",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf-8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf-8"
  );

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait....");
  const contract = await contractFactory.deploy();
  const transactionReceipt = await contract.deployTransaction.wait(1);
  // console.log("Here is the deployment transaction (transaction response): ");
  // console.log(contract.deployTransaction);
  // console.log("Here is the transaction receipt: ");
  // console.log(transactionReceipt);
  // // console.log(contract);

  // console.log("Let's deploy with only transaction data!");
  // const nonce = await wallet.getTransactionCount();
  // const tx = {
  //   nonce: nonce,
  //   gasPrice: 20000000000,
  //   gasLimit: 1000000,
  //   to: null,
  //   value: null,
  //   data: "608060405234801561001057600080fd5b5061096a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80632e64cec114610067578063471f7cdf146100855780636057361d146100a35780636f760f41146100bf5780638bab8dd5146100db5780639e7a13ad1461010b575b600080fd5b61006f61013c565b60405161007c91906102e1565b60405180910390f35b61008d610145565b60405161009a91906102e1565b60405180910390f35b6100bd60048036038101906100b8919061033c565b61014b565b005b6100d960048036038101906100d491906104af565b610155565b005b6100f560048036038101906100f0919061050b565b6101de565b60405161010291906102e1565b60405180910390f35b6101256004803603810190610120919061033c565b61020c565b6040516101339291906105d3565b60405180910390f35b60008054905090565b60005481565b8060008190555050565b600260405180604001604052808381526020018481525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010190816101b4919061080f565b505050806001836040516101c8919061091d565b9081526020016040518091039020819055505050565b6001818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b6002818154811061021c57600080fd5b906000526020600020906002020160009150905080600001549080600101805461024590610632565b80601f016020809104026020016040519081016040528092919081815260200182805461027190610632565b80156102be5780601f10610293576101008083540402835291602001916102be565b820191906000526020600020905b8154815290600101906020018083116102a157829003601f168201915b5050505050905082565b6000819050919050565b6102db816102c8565b82525050565b60006020820190506102f660008301846102d2565b92915050565b6000604051905090565b600080fd5b600080fd5b610319816102c8565b811461032457600080fd5b50565b60008135905061033681610310565b92915050565b60006020828403121561035257610351610306565b5b600061036084828501610327565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6103bc82610373565b810181811067ffffffffffffffff821117156103db576103da610384565b5b80604052505050565b60006103ee6102fc565b90506103fa82826103b3565b919050565b600067ffffffffffffffff82111561041a57610419610384565b5b61042382610373565b9050602081019050919050565b82818337600083830152505050565b600061045261044d846103ff565b6103e4565b90508281526020810184848401111561046e5761046d61036e565b5b610479848285610430565b509392505050565b600082601f83011261049657610495610369565b5b81356104a684826020860161043f565b91505092915050565b600080604083850312156104c6576104c5610306565b5b600083013567ffffffffffffffff8111156104e4576104e361030b565b5b6104f085828601610481565b925050602061050185828601610327565b9150509250929050565b60006020828403121561052157610520610306565b5b600082013567ffffffffffffffff81111561053f5761053e61030b565b5b61054b84828501610481565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561058e578082015181840152602081019050610573565b60008484015250505050565b60006105a582610554565b6105af818561055f565b93506105bf818560208601610570565b6105c881610373565b840191505092915050565b60006040820190506105e860008301856102d2565b81810360208301526105fa818461059a565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061064a57607f821691505b60208210810361065d5761065c610603565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026106c57fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610688565b6106cf8683610688565b95508019841693508086168417925050509392505050565b6000819050919050565b600061070c610707610702846102c8565b6106e7565b6102c8565b9050919050565b6000819050919050565b610726836106f1565b61073a61073282610713565b848454610695565b825550505050565b600090565b61074f610742565b61075a81848461071d565b505050565b5b8181101561077e57610773600082610747565b600181019050610760565b5050565b601f8211156107c35761079481610663565b61079d84610678565b810160208510156107ac578190505b6107c06107b885610678565b83018261075f565b50505b505050565b600082821c905092915050565b60006107e6600019846008026107c8565b1980831691505092915050565b60006107ff83836107d5565b9150826002028217905092915050565b61081882610554565b67ffffffffffffffff81111561083157610830610384565b5b61083b8254610632565b610846828285610782565b600060209050601f8311600181146108795760008415610867578287015190505b61087185826107f3565b8655506108d9565b601f19841661088786610663565b60005b828110156108af5784890151825560018201915060208501945060208101905061088a565b868310156108cc57848901516108c8601f8916826107d5565b8355505b6001600288020188555050505b505050505050565b600081905092915050565b60006108f782610554565b61090181856108e1565b9350610911818560208601610570565b80840191505092915050565b600061092982846108ec565b91508190509291505056fea264697066735822122089342b21cb25fb3e63feab8b761a82446a46032cfc8b2b595cc4a9eab0ec8f4f64736f6c63430008110033",
  //   chainId: 1337,
  // };

  // const sendTxResponse = await wallet.sendTransaction(tx);
  // await sendTxResponse.wait(1);
  // console.log(sendTxResponse);

  const currentFavoriteNumber = await contract.retrieve();
  console.log(currentFavoriteNumber);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
