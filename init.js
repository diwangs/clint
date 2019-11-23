// replace this
const Web3 = require('web3')
const TrstToken = require('./src/contracts/TrstToken.json')
const tokenAddr = "0xC501960b8196244e563007760438Aa5e132A4e22"
const Vault = require('./src/contracts/Vault.json')
const vaultAddr = "0x0beeED54Db20E7bFECa81Be8b492c01802fE14E8"
const Staking = require('./src/contracts/Staking.json')
const stakingAddr = "0xc483b9Ae0326B0B472B14a15CB73db56CBfd510E"

async function main() {
    const web3 = new Web3("http://localhost:7545")
    const accounts = await web3.eth.getAccounts()
    const root = accounts[0]
    const tokenContract = new web3.eth.Contract(TrstToken.abi, tokenAddr)
    const vaultContract = new web3.eth.Contract(Vault.abi, vaultAddr)
    const stakingContract = new web3.eth.Contract(Staking.abi, stakingAddr)

    // send ether to token and vault contracts
    await web3.eth.sendTransaction({
        from: root,
        to: tokenAddr,
        value: web3.utils.toWei("30", "ether")
    })
    await web3.eth.sendTransaction({
        from: root,
        to: vaultAddr,
        value: web3.utils.toWei("30", "ether")
    })
    // Init trst token
    await tokenContract.methods.mint(root, "1900000").send({from: root})
    await tokenContract.methods.mint(accounts[1], "100000").send({from: root})
    await tokenContract.methods.mint(accounts[2], "100000").send({from: root})
    await tokenContract.methods.mint(accounts[3], "100000").send({from: root})
    await tokenContract.methods.mint(accounts[4], "100000").send({from: root})
    await tokenContract.methods.mint(accounts[5], "100000").send({from: root})
    await tokenContract.methods.mint(accounts[6], "100000").send({from: root})
    await tokenContract.methods.mint(accounts[7], "100000").send({from: root})
    await tokenContract.methods.mint(accounts[8], "100000").send({from: root})
    await tokenContract.methods.mint(accounts[9], "100000").send({from: root})

    await stakingContract.methods.setUpperThreshold("15000").send({from: root})
    await stakingContract.methods.setRewardRateDenom("10").send({from: root})
    await stakingContract.methods.setPunishmentRateDenom("10").send({from: root})
}

main()