import React, { Component } from 'react';
import Web3 from 'web3';
import {
  Box, Grid, Heading, Chart, RoutedButton, Text, Image,
} from 'grommet';

import card from '../../public/img/card.png';

import Context from '../Context';
import TrstToken from '../contracts/TrstToken.json';
import Vault from '../contracts/Vault.json';
import chart from '../../public/img/chart.png';

const Property = ({ name, value }) => (
  <Box direction="row-responsive" gap="small">
    <Box basis="1/4">
      <Text>
        {name}
      </Text>
    </Box>
    <Text>
      <strong>
        {value}
      </strong>
    </Text>
  </Box>
);

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    await this.loadWeb3();
    await this.loadContract(TrstToken);
    await this.loadContract(Vault);
    await this.getBalance();
    await this.getLoanDetails();
  }

  async getBalance() {
    const balance = await this.state.TrstToken.methods.balance(this.state.account).call();
    this.setState({ balance });
  }

  async getLoanDetails() {
    const loanStatus = await this.state.Vault.methods.loanStatus(this.state.account).call();
    if (loanStatus !== 0) {
      const amount = await this.state.Vault.methods.proposedLoan(this.state.account).call();
      const term = await this.state.Vault.methods.term(this.state.account).call();
      this.setState({ loanStatus, amount, term });
    } else {
      this.setState({ loanStatus, amount: 0, term: 0 });
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
    } else {
      window.alert("loadContract: " + contractDefinition.contractName + ' contract not deployed to detected network.')
    }
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
      const accounts = await window.web3.eth.getAccounts();
      // window.web3.eth.defaultAccount = accounts[0] is defaultAccount deprecated?
      // https://ethereum.stackexchange.com/questions/38365/web3-eth-defaultaccount-not-working
      let account = accounts[0];
      this.setState({ account: accounts[0] })
    }
  }

  render() {
    const { balance, loanStatus, amount, term } = this.state;
    return (
      <Context.Consumer>
        {({ session, services }) => (
          <Box>
            <Box
              direction="row"
              justify="between"
              align="center"
              background="brand"
              height="xsmall"
              pad="large"
              round="medium"
              margin={{ top: "medium" }}
            >
              <Box height="xsmall" width="xxsmall">
                <Image
                  src={card}
                  fit="contain"
                />
              </Box>
              <Box direction="column">
                <Text size="xxlarge">
                  <strong>
                    {balance ? (balance/1000) + ' trst' : 'Retrieving...'}
                  </strong>
                </Text>
                <Text size="small">
                  current balance
                </Text>
              </Box>
              <Box direction="column">
                <Text size="xxlarge">
                  <strong>
                    13/11
                  </strong>
                </Text>
                <Text size="small">
                  last voted
                </Text>
              </Box>
            </Box>
            <Box style={{width:'100%', height:'40%'}} margin={{ top: 'medium' }}>
              <Image
                src={chart}
                fit="contain"
              />
            </Box>
            <Box direction="row" justify="between" align="center" margin={{ top: 'medium' }}>
              <Heading size="small">
                Loan Applications
              </Heading>
              {(loanStatus === "0") && (
                <RoutedButton label="Apply" path="/add" />
              )}
            </Box>
            <Box margin={{ vertical: 'medium', top: 'medium' }}>
              {(loanStatus > 0) ? (
                <Box
                  basis="small"
                  round="xsmall"
                  overflow="hidden"
                >
                  <Box
                    justify="between"
                    pad="medium"
                    background={{ color: 'light-4', opacity: true }}
                  >
                    <Property
                      name="Amount"
                      value={'Rp ' + amount/1000000 + ' million'}
                    />
                    <Property
                      name="Term"
                      value={term + ' day'}
                    />
                    <Property
                      name="Status"
                      value={loanStatus}
                    />
                  </Box>
                </Box>
              ) : (
                <Text>
                  {"You haven't applied for a loan yet."}
                </Text>
              )}
            </Box>
          </Box>
        )}
      </Context.Consumer>
    );
  }
}
