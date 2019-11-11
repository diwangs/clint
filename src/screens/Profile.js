import React, { Component } from 'react';
import Web3 from 'web3';
import {
  Box, Grid, Heading, InfiniteScroll, RoutedButton, Text,
} from 'grommet';

import Context from '../Context';
import TrstToken from '../TrstToken.json';

const Property = ({ name, value }) => (
  <Box direction="row-responsive" gap="small">
    <Box basis="1/3">
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
    await this.loadTokenContract();
    await this.getBalance();
  }

  async getBalance() {
    const { tokenContract, account } = this.state;
    const balance = await tokenContract.methods.balance(account).call();
    console.log(balance);
    this.setState({ balance });
  }

  async loadTokenContract() {
    const { web3 } = window.web3;

    // Load account
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    this.setState({ account: accounts[0] });

    // Load contract
    const networkId = await web3.eth.net.getId();
    const networkData = TrstToken.networks[networkId];
    if (networkData) {
      const tokenContract = new web3.eth.Contract(TrstToken.abi, networkData.address);
      this.setState({ tokenContract });
    } else {
      window.alert('TrstToken contract not deployed to detected network.');
    }
  }

  // Connect with MetaMask
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

  render() {
    const { balance } = this.state;
    console.log("abc");
    return (
      <Context.Consumer>
        {({ session, services }) => (
          <Box>
            <Box direction="row" justify="between" align="center">
              <Heading>
                Me
              </Heading>
              <Heading size="small">
                {balance ? balance + ' trst' : 'Retrieving...'}
              </Heading>
            </Box>
            <Box direction="row" justify="between" align="center">
              <Heading size="small">
                Loan Applications
              </Heading>
              <RoutedButton label="Apply" path="/add" />
            </Box>
            <Box margin={{ vertical: 'medium' }}>
              <Grid columns="small" gap="small">
                {(services[session.index].loan && services[session.index].loan.length > 0) && (
                  <InfiniteScroll items={services[session.index].loan}>
                    {loan => (
                      <Box
                        basis="small"
                        round="xsmall"
                        overflow="hidden"
                      >
                        <Box
                          justify="between"
                          align="left"
                          pad="medium"
                          background={{ color: 'light-4', opacity: true }}
                        >
                          <Property
                            name="Amount"
                            value={loan.amount + ' trst'}
                          />
                          <Property
                            name="Term"
                            value={loan.term + ' day'}
                          />
                          <Property
                            name="Status"
                            value={loan.status}
                          />
                        </Box>
                      </Box>
                    )}
                  </InfiniteScroll>
                )}
              </Grid>
            </Box>
          </Box>
        )}
      </Context.Consumer>
    );
  }
}
