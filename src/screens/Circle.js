import React, { Component, Fragment } from 'react';
import {
  Box, Grid, Heading, InfiniteScroll, RoutedButton, Text, TextInput,
} from 'grommet';
import Axios from 'axios';

import Context from '../Context';
import TrstToken from '../contracts/TrstToken.json';
import Vault from '../contracts/Vault.json';

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

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  async componentDidMount() {
    await this.loadWeb3();
    await this.loadContract(TrstToken);
    await this.loadContract(Vault);
    await this.loadCircle();
  }

  async loadCircle() {
    let circle = [];
    for (let i = 1; i < addresses.length; i += 1) {
      if (addresses[i] !== this.state.account) {
        let status;
        const loanStatus = await this.state.Vault.methods.loanStatus(addresses[i]).call();
        if (loanStatus === '1') {
          const res = await Axios.get('http://3.91.229.34:3000/user/' + addresses[i]);
          status = 1;
          circle.push({
            id: addresses[i],
            name: res.data.name,
            status: status,
          });
        }
      }
    }
    console.log(circle);
    this.setState({ circle });
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
    // Load account
    if (window.web3) {
      const accounts = await window.web3.eth.getAccounts();
      // window.web3.eth.defaultAccount = accounts[0] is defaultAccount deprecated?
      // https://ethereum.stackexchange.com/questions/38365/web3-eth-defaultaccount-not-working
      this.setState({ account: accounts[0] });
    }
  }

  render() {
    const { search, circle } = this.state;
    return (
      <Context.Consumer>
        {({ session, services }) => (
          <Box>
            <Box direction="row" justify="between" align="center">
              <Heading size="small" color="brand">
                Your Circle
              </Heading>
            </Box>
            <TextInput
              placeholder="search"
              value={search}
              onChange={event => this.setState({ search: event.target.value })}
            />
            <Box margin={{ vertical: 'medium' }}>
              <Grid columns="medium" gap="small">
                {circle ? (
                  <InfiniteScroll items={circle}>
                    {circle => (
                      <Fragment>
                        {circle && (
                          <Box
                            key={circle.name}
                            basis="small"
                            round="xsmall"
                            overflow="hidden"
                          >
                            <RoutedButton
                              path={`/service/${circle.id}`}
                              fill
                              hoverIndicator
                            >
                              <Box
                                direction="row"
                                justify="between"
                                align="center"
                                pad="small"
                                background={{ color: 'light-4', opacity: true }}
                              >
                                <Text>
                                  {circle.name}
                                </Text>
                                {circle.status !== 'ok' && (
                                  <Box pad="xsmall" round="xsmall" background="brand" />
                                )}
                              </Box>
                            </RoutedButton>
                          </Box>
                        )}
                      </Fragment>
                    )}
                  </InfiniteScroll>
                ) : (
                  <Box margin="medium" pad="large" background="light-1" />
                )}
              </Grid>
            </Box>
          </Box>
        )}
      </Context.Consumer>
    );
  }
}
