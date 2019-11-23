import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Heading, Button, Text, RangeInput, Layer,
} from 'grommet';
import { FormClose } from 'grommet-icons';
import Axios from 'axios';

import Context from '../Context';
import Loader from '../Loader';
import Vault from '../contracts/Vault.json';
import Staking from '../contracts/Staking.json';

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

Property.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

class Vote extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stake: 0,
      open: false,
    };
  }

  async componentDidMount() {
    await this.loadContract(Vault);
    await this.loadContract(Staking);
    await this.getLoanDetails();
    await this.getStakeStatus();
    await this.getData();
  }

  async getLoanDetails() {
    const loanStatus = await this.state.Vault.methods.loanStatus(this.props.id).call();
    if (loanStatus > 0) {
      const amount = await this.state.Vault.methods.proposedLoan(this.props.id).call();
      const term = await this.state.Vault.methods.term(this.props.id).call();
      this.setState({ loanStatus, amount, term });
    }
  }

  async getStakeStatus() {
    const stakeStatus = await this.state.Staking.methods.stake(this.props.id, this.props.account).call();
    this.setState({ stakeStatus });
  }

  async loadContract(contractDefinition) {
    const web3 = window.web3
    const networkId = await web3.eth.net.getId()
    const networkData = contractDefinition.networks[networkId]
    if (networkData) {
      const contractHandle = new web3.eth.Contract(contractDefinition.abi, networkData.address)
      var newState = {}
      newState[contractDefinition.contractName] = contractHandle
      this.setState(newState);
    } else {
      window.alert("loadContract: " + contractDefinition.contractName + ' contract not deployed to detected network.')
    }
  }

  async setStake(candidate, voter, amount) {
    console.log(this.props.id + ' ' + this.props.account);
    await this.state.Staking.methods.setStake(this.props.id, amount*1000).send({from: this.props.account});
    this.voteMessage();
  }

  async getData() {
    const user = await Axios.get('http://3.91.229.34:3000/user/' + this.props.id);
    const { name, gender, city, lastEducation } = user.data;
    this.setState({ name, gender, city, lastEducation });
  }

  voteMessage() {
    this.setState({ open: true, loanStatus: "0" });
  }

  render() {
    const { account, id } = this.props;
    const { open, stake, amount, term, stakeStatus, name, gender, city, lastEducation } = this.state;
    return (
      <Context.Consumer>
        {({ onVote, votes }) => (
            <Fragment>
              {open && (
                <Layer
                  position="bottom"
                  modal={false}
                  margin={{ vertical: "medium", horizontal: "small" }}
                  onEsc={(event) => {
                    event.preventDefault();
                    this.setState({ open: false });
                  }}
                  responsive={false}
                  plain
                >
                  <Box
                    align="center"
                    direction="row"
                    gap="small"
                    justify="between"
                    round="medium"
                    elevation="medium"
                    pad={{ vertical: "xsmall", horizontal: "small" }}
                    background="accent"
                  >
                    <Box align="center" direction="row" gap="xsmall">
                      <Text>You have successfully voted!</Text>
                    </Box>
                    <Button 
                      icon={<FormClose />} 
                      onClick={(event) => {
                        event.preventDefault();
                        this.setState({ open: false });
                      }}
                    />
                  </Box>
                </Layer>
              )}
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  this.setStake(id, account, stake);
                }}
              >
                <Box
                  margin="small"
                  pad="large"
                  round="medium"
                  gap="small"
                  background="brand"
                >
                  <Text size="xxlarge" alignSelf="center">
                    <strong>
                      {stakeStatus === '0' ? 'Vote' : 'Voted'}
                    </strong>
                  </Text>
                  {stakeStatus === '0' && (
                    <Fragment>
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
                        <Box direction="column">
                          <Text size="xxlarge">
                            <strong>
                              {amount/1000000 + "m "}
                            </strong>
                          </Text>
                          <Text size="small">
                            amount
                          </Text>
                        </Box>
                        <Box direction="column">
                          <Text size="xxlarge">
                            <strong>
                              {term + " days"}
                            </strong>
                          </Text>
                          <Text size="small">
                            term
                          </Text>
                        </Box>
                        <Box direction="column">
                          <Text size="xxlarge">
                            <strong>
                              10%
                            </strong>
                          </Text>
                          <Text size="small">
                            rate
                          </Text>
                        </Box>
                      </Box>
                      <br />
                      <RangeInput
                        min={-20}
                        max={20}
                        step={1}
                        value={stake}
                        onChange={event => this.setState({ stake: parseInt(event.target.value, 10) })}
                      />
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
                        <Box direction="column">
                          <Text size="xxlarge">
                            <strong>
                              {stake + ' Trust'}
                            </strong>
                          </Text>
                          <Text size="small">
                            stake
                          </Text>
                        </Box>
                        <Button
                          type="submit"
                          label="Vote"
                          primary
                          alignSelf="center"
                          color="accent"
                          margin={{ top: "medium" }}
                          onClick={() => {}}
                        />
                      </Box>
                    </Fragment>
                  )}
                </Box>
              </form>
              <Box
                direction="row"
                justify="between"
                align="center"
                gap="small"
                margin={{ top: 'large', bottom: 'large' }}
              >
                <Heading size="small" color="brand">
                  {name ? ('Details') : ('Fetching Details...')}
                </Heading>
              </Box>
              {name && (
                <Box
                  gap="large"
                  margin={{ bottom: 'large' }}
                >
                  <Property
                    name="Name"
                    value={name}
                  />
                  <Property
                    name="Reason"
                    value="Biaya Kuliah Anak 4 Semester"
                  />
                  <Property
                    name="Gender"
                    value={gender}
                  />
                  <Property
                    name="City"
                    value={city}
                  />
                  <Property
                    name="Monthly Income"
                    value="IDR 10 million"
                  />
                </Box>
              )}
          </Fragment>
        )}
      </Context.Consumer>
    );
  }
}

const Service = ({ match: { params: { id } } }) => (
  <Loader id={id}>
    {({ 
      service,
      session,
      onVote,
      votes,
      account,
    }) => (
      <Box>
        <Vote
          service={service}
          session={session}
          onVote={onVote}
          votes={votes}
          account={account}
          id={id}
        />
      </Box>
    )}
  </Loader>
);

Service.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Service;
