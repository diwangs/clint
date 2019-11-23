import React, { Component } from 'react';
import Web3 from 'web3';

import axios from 'axios';

import Context from './Context';
import TrstToken from './contracts/TrstToken.json';
import Vault from './contracts/Vault.json';
import Staking from './contracts/Staking.json';

// This file simulates interaction with a server.
// The state retrieved from the server is stored in
// this component's state.
export default class Server extends Component {
  state = { context: { session: { email: 'Me', index: 0 } } }

  async componentDidMount() {
    const { context } = this.state;

    let account;

    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }

    // Load account
    if (window.web3) {
      const accounts = await window.web3.eth.getAccounts();
      // window.web3.eth.defaultAccount = accounts[0] is defaultAccount deprecated?
      // https://ethereum.stackexchange.com/questions/38365/web3-eth-defaultaccount-not-working
      account = accounts[0];
      this.setState({ account: accounts[0] })
    }

    // simulate intializing from server
    const votes = Array(10).fill().map(() => Array(10).fill(0));
    const services = [];
    const addresses = [
      '0xaCbe34092Fc4a3e422FD8417a9d90eb2321cec3D',
      '0xCdD763D73998f1C63E70d4054bBfABd97a9C3C74',
      '0x8789E41BDFA2386E2aab9613f50f07fc42D135c6',
      '0x8E03ED8a3A03561Cf3D7C295176d00A2F015930d',
      '0x056F199dDDc3e657A54FE34E227983A3c7901c58',
      '0xba9f30D625a39aeaC3ec048E65fcF03cEe094AEF',
      '0x8B6696B2e3b3307F7855B3ff39c0A2653eb98975',
      '0xa5237aD35f6bEBeA340433D6A86a4bbc753768fA',
      '0x6c99056cc59c5c17CA5C126Af8D54456E8544e0F',
      '0x6c99056cc59c5c17CA5C126Af8D54456E8544e0F',
    ];
    const now = (new Date()).toISOString();

    // Add Hafizh
    services.push({
      created: now,
      status: 'vote',
      id: addresses[0],
      index: 0,
      name: 'Hafizh Budiman',
      username: 'hafizh',
      loan: [
        {
          amount: 10000000,
          term: 60,
          status: 'In Approval',
        },
      ],
    });

    // Add Onel
    services.push({
      created: now,
      status: 'vote',
      id: addresses[1],
      index: 1,
      name: 'Cornelius Yan Mintareja',
      username: 'onel',
      loan: [
        {
          amount: 5000000,
          term: 30,
          status: 'In Approval',
        },
      ],
    });

    // Add Diwang
    services.push({
      created: now,
      status: 'ok',
      id: addresses[2],
      index: 2,
      name: 'Senapati S. Diwangkara',
      username: 'diwang',
      loan: [],
    });

    // Add gabu
    services.push({
      created: now,
      status: 'ok',
      id: addresses[3],
      index: 3,
      name: 'gabu wibu',
      username: 'gabu',
      loan: [],
    });

    // Add nina
    services.push({
      created: now,
      status: 'ok',
      id: addresses[4],
      index: 4,
      name: 'Nina Nursita',
      username: 'nina',
      loan: [],
    });

    // Add nina
    services.push({
      created: now,
      status: 'ok',
      id: addresses[4],
      index: 4,
      name: 'Christian Wibisono',
      username: 'christian',
      loan: [],
    });

    const nextContext = {
      ...context,
      services,
      addresses,
      votes,
      account,
      onLogin: this.onLogin,
      onLogout: this.onLogout,
      onRegister: this.onRegister,
      onVote: this.onVote,
      onCreate: this.onCreate,
      onUpdate: this.onUpdate,
      onDelete: this.onDelete,
      onSearch: this.onSearch,
      onFind: this.onFind,
      onUnload: this.onUnload,
    };

    this.setState({ context: nextContext, services, addresses, votes, account });

    await Promise.all([
      this.loadContract(TrstToken),
      this.loadContract(Vault),
      this.loadContract(Staking),
    ]);

    // this.state.TrstToken.methods.mint(addresses[1], 50000).send({from : addresses[0]});
    // this.state.TrstToken.methods.mint(addresses[2], 50000).send({from : addresses[0]});
  }

  async loadContract(contractDefinition) {
    const web3 = window.web3
    const networkId = await web3.eth.net.getId()
    const networkData = contractDefinition.networks[networkId]
    if (networkData) {
      const contractHandle = new web3.eth.Contract(contractDefinition.abi, networkData.address)
      var newState = {}
      newState[contractDefinition.contractName] = contractHandle
      this.setState(newState)
    } else {
      window.alert("loadContract: " + contractDefinition.contractName + ' contract not deployed to detected network.')
    }
  }

  onLogin = ({ email }) => {
    const { context, services } = this.state;

    let i;
    let index = 0;
    for (i = 0; i < services.length; i += 1) {
      if (services[i].username === email) {
        index = i;
      }
    }

    this.setState({
      context: {
        ...context,
        session: { email, index },
      },
    });
  }

  onLogout = () => {
    const { context } = this.state;
    this.setState({
      context: {
        ...context,
        session: undefined,
      },
    });
  }

  onRegister = ({
    newUsername,
    newName,
    newAddress,
    newBirthDate,
    newBirthPlace,
    newCity,
    newEmail,
    newGender,
    newHasDivorced,
    newHouseStatus,
    newIdCard,
    newIsSingle,
    newKecamatan,
    newKelurahan,
    newLastEducation,
    newMomMaidenName,
    newNpwp,
    newPhone,
    newZipCode,
  }) => {
    const { context, services, addresses } = this.state;

    const now = (new Date()).toISOString();
    const idx = services.length;
    const newId = 'service-' + idx;
    const newUser = {
      created: now,
      status: 'ok',
      id: newId,
      index: idx,
      name: newName,
      username: newUsername,
      address: addresses[idx],
      loan: [],
    };
    const temp = services;
    temp.push(newUser);

    this.setState({
      context: {
        ...context,
        services: temp,
      },
      services: temp,
    });

    const payLoad = {
      "key": String(newUsername),
      "name": String(newName),
      "gender": String(newGender),
      "birthDate": String(newBirthDate),
      "birthPlace": String(newBirthPlace),
      "idCard": String(newIdCard),
      "momMaidenName": String(newMomMaidenName),
      "hasDivorced": String(newHasDivorced),
      "isSingle": String(newIsSingle),
      "lastEducation": String(newLastEducation),
      "address": String(newAddress),
      "houseStatus": String(newHouseStatus),
      "kelurahan": String(newKelurahan),
      "kecamatan": String(newKecamatan),
      "city": String(newCity),
      "zipCode": String(newZipCode),
      "phone": String(newPhone),
      "email": String(newEmail),
      "npwp": String(newNpwp),
    };

    console.log(payLoad);

    axios.post('http://3.91.229.34:3000/user', payLoad)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  onVote = ({ voter, candidate, amount }) => {
    console.log(voter + ' ' + candidate);
    this.setStake(candidate, voter, amount*1000);
  }

  onCreate = ({ loanAmount, loanTerm }) => {
    console.log(loanAmount + ' ' + loanTerm);
    this.proposeLoan(loanAmount, loanTerm);
  }

  onSearch = (search) => {
    const { context, services } = this.state;
    const exp = new RegExp(search, 'i');
    const nextServices = services.filter(s => exp.test(s.name));
    this.setState({
      context: {
        ...context,
        services: nextServices,
      },
      services: nextServices,
    });
  }

  onFind = (id) => {
    const { context, services } = this.state;
    const service = services.find(s => s.id === id) || { name: 'not found' };
    this.setState({
      context: {
        ...context,
        service,
      },
    });
  }

  onUnload = () => {
    const { context } = this.state;
    this.setState({
      context: {
        ...context,
        service: undefined,
      },
    });
  }

  onUpdate = (id, service) => {
    const { context, services } = this.state;
    const now = (new Date()).toISOString();
    const nextService = { ...service, updated: now };
    const nextServices = services.map((s) => {
      if (s.id === id) {
        return nextService;
      }
      return s;
    });
    this.setState({
      context: {
        ...context,
        services: nextServices,
        service: nextService,
      },
    });
  }

  onDelete = (id) => {
    const { context, services } = this.state;
    const nextServices = services.filter(s => s.id !== id);
    this.setState({
      context: {
        ...context,
        services: nextServices,
      },
    });
  }

  // Wrapped contract functions
  // TrstToken
  async balance(address) {
    return await this.state.TrstToken.methods.balance(address).call();
  }

  async price() {
    return await this.state.TrstToken.methods.price().call();
  }

  async totalSupply() {
    return await this.state.TrstToken.methods.totalSupply().call();
  }

  async redeem(amount) {
    await this.state.TrstToken.methods.redeem(amount).send({from : this.state.account});
  }

  // Vault
  async loanStatus(address) {
    return await this.state.Vault.methods.loanStatus(address).call();
  }

  async proposeLoan(address) {
    return await this.state.Vault.methods.proposeLoan(address).call();
  }

  async term(address) {
    return await this.state.Vault.methods.term(address).call();
  }

  async lentTimestamp(address) {
    return await this.state.Vault.methods.lentTimestamp(address).call();
  }

  async interestRate() {
    const numerator = await this.state.Vault.methods.interestRateNum().call()
    const denominator = await this.state.Vault.methods.interestRateDenom().call()
    return numerator / denominator
  }

  async latenessMultiplier() {
    const numerator = await this.state.Vault.methods.latenessMultiplierNum().call()
    const denominator = await this.state.Vault.methods.interestRateDenom().call()
    return numerator / denominator
  }

  async proposeLoan(amount, term) {
    await this.state.Vault.methods.proposeLoan(amount, term).send({from : this.state.account});
  }

  async cancelProposal() {
    await this.state.Vault.methods.cancelProposal().send({from : this.state.account});
  }

  async returnLoan() {
    console.log("belom")
    // await this.state.Vault.methods.cancelProposal().send({from : this.state.account});
  }

  // Staking
  async stake(candidate, staker) {
    await this.state.Staking.methods.stake(candidate, staker).call()
  }

  async totalStake(candidate) {
    await this.state.Staking.methods.totalStake(candidate).call()
  }

  async setStake(candidate, voter, amount) {
    await this.state.Staking.methods.setStake(candidate, amount).send({from : voter})
  }

  async cancelStake(candidate) {
    await this.state.Staking.methods.cancelStake(candidate).send({from : this.state.account})
  }

  render() {
    const { context } = this.state;
    return (
      <Context.Provider value={context} {...this.props} />
    );
  }
}
