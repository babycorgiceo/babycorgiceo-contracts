module.exports = async (hre) => {
  const accounts = await hre.getNamedAccounts();
  const deployer = accounts.admin;

  console.log((await hre.ethers.provider.getBalance(deployer)).toString());

  const {address: lib} = await hre.deployments.deploy("IterableMapping", {from: deployer, log: true,});

  const {address} = await hre.deployments.deploy("BabyCorgiCeo", {
    from: deployer,
    args: [
      // bsc
      "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
      "0x10ed43c718714eb63d5aa57b78b54704e256024e",
      "0xD434DD03852250B8020C9ab95F40754821614317",

      // // testnet
      // "0xae13d989dac2f0debff460ac112a837c89baa7cd",
      // "0xD99D1c33F9fC3444f8101754aBC46c52416550D1",
      // "0xD434DD03852250B8020C9ab95F40754821614317",
    ],
    log: true,
    libraries: {
      IterableMapping: lib
    }
  });
};

module.exports.tags = ['BabyCorgiCeo'];
