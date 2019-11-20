import React, { Component } from 'react';
import Web3 from 'web3';
import {
  Box, Grid, Heading, InfiniteScroll, RoutedButton, Text, Image,
} from 'grommet';

import card from '../../public/img/card.png'

import Context from '../Context';
import TrstToken from '../contracts/TrstToken.json';

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
    this.setState({ balance });
  }

  async loadTokenContract() {
    // Load account
    const accounts = await window.web3.eth.getAccounts();
    // console.log(accounts)
    this.setState({ account: accounts[0] });

    // Load contract
    const networkId = await window.web3.eth.net.getId();
    const networkData = TrstToken.networks[networkId];
    if (networkData) {
      const tokenContract = new window.web3.eth.Contract(TrstToken.abi, networkData.address);
      // console.log(tokenContract)
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
      console.log("in Profile")
      console.log(window.web3)
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
            <Box direction="row" justify="between" align="center">
              <Heading size="small">
                Loan Applications
              </Heading>
              <RoutedButton label="Apply" path="/add" />
            </Box>
            <Box margin={{ vertical: 'medium', top: 'medium' }}>
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
                            value={'Rp ' + loan.amount/1000000 + ' million'}
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
