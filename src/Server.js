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
    // simulate intializing from server
    const votes = Array(10).fill().map(() => Array(10).fill(0));
    const services = [];
    const addresses = [
      '0xceBc86eC5c9ee28702a0518EAC98c7E4d2569648',
      '0x87139bb2e0da7e86E96a876C5A2fE1c8a31200d3',
      '0x3657df40b78259029365fb6224342324f249c1ad',
      '0x382f07957302852c298f125be10728b5c77929d1',
      '0x43e270ebcfcc67e142556b9173db8b98cbaf97b3',
      '0x7cfcb9a4d2f96835197a924a4294f0edbaf1465d',
      '0x0314e5db07fd9322523622426893899445784503',
      '0xde17b00ded5906e0ae9a4add5a11b868b0a1366e',
      '0xf0a5931fab0970654675b68068bbe56242aace37',
      '0x1d6d51cba34c7dcc36f48d946300bcdadfde8638',
    ];
    const now = (new Date()).toISOString();

    // Add Hafizh
    services.push({
      created: now,
      status: 'vote',
      id: 'service-0',
      index: 0,
      name: 'Hafizh Budiman',
      username: 'hafizh',
      address: '35506bd9a1f536553f7b71e57dff00ce0fa104f380897f4666c3ecb665909191',
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
      id: 'service-1',
      index: 1,
      name: 'Cornelius Yan Mintareja',
      username: 'onel',
      address: '53e9fb16787da45443420a8ce22c44f3e45c5efde8bc6f5e40d3b9bf23f7674a',
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
      id: 'service-2',
      index: 2,
      name: 'Senapati S. Diwangkara',
      username: 'diwang',
      address: 'fe0a1016c29b590bb6984ccac01db6ad9918ae085025c29ce198a73465efa619',
      loan: [],
    });

    const nextContext = {
      ...context,
      services,
      addresses,
      votes,
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

    this.setState({ context: nextContext, services, addresses, votes });

    await this.loadWeb3();
    await Promise.all([
      this.loadContract(TrstToken),
      this.loadContract(Vault),
      this.loadContract(Staking)
    ])
    console.log(await this.stakable())
  }

  // Connect with MetaMask
  async loadWeb3() {
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
      const accounts = await window.web3.eth.getAccounts()
      // window.web3.eth.defaultAccount = accounts[0] is defaultAccount deprecated?
      // https://ethereum.stackexchange.com/questions/38365/web3-eth-defaultaccount-not-working
      this.setState({ account: accounts[0] })
    }
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
      return contractHandle
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
    const { votes, context, addresses } = this.state;
    const temp = votes;
    temp[voter][candidate] = 1;
    this.castVote(candidate, amount, addresses);
    this.setState({
      context: {
        ...context,
        votes: temp,
      },
      votes: temp,
    });
  }

  onCreate = ({ loanAmount, loanTerm }) => {
    const { context, services } = this.state;
    const newLoan = {
      amount: loanAmount,
      term: loanTerm,
      status: 'In Approval',
    };
    const temp = services;
    temp[context.session.index].loan = services[context.session.index].loan.concat(newLoan);
    temp[context.session.index].status = 'vote';
    this.proposeLoan(loanAmount, loanTerm);
    this.setState({
      context: {
        ...context,
        services: temp,
      },
      services: temp,
    });
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

  async setStake(candidate, amount) {
    await this.state.Staking.methods.setStake(candidate, amount).send({from : this.state.account})
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
