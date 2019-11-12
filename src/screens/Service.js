import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Heading, Markdown, RoutedButton, Button, Text, RangeInput,
} from 'grommet';
import { Location } from 'grommet-icons';

import Context from '../Context';
import Loader from '../Loader';

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

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stake: 0,
    };
  }

  render() {
    const vote = this.state;
    return (
      <Fragment>
        <Property
          name="Stake"
          value={vote.stake + ' Trust'}
        />
        <br />
        <RangeInput
          min={0}
          max={20}
          step={1}
          value={vote.stake}
          onChange={event => this.setState({ stake: parseInt(event.target.value, 10) })}
        />
      </Fragment>
    );
  }
}

class Vote extends Component {
  static propTypes = {
    history: PropTypes.shape({}).isRequired,
  }

  componentDidMount() {
    console.log(this.props.session.index);
    console.log(this.props.service.index);
  }

  render() {
    const { session, service, history } = this.props;
    const voter = session.index;
    const candidate = service.index;
    const { amount } = service.loan[0];
    return (
      <Context.Consumer>
        {({ onVote, votes }) => (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              onVote({ candidate, voter, amount });
            }}
          >
            <Box
              margin={{ top: 'medium' }}
              pad="large"
              round="medium"
              gap="small"
              border={{ size: 'small' }}
            >
              <Heading level="2" alignSelf="center">
                Vote
              </Heading>
              <Property
                name="Amount"
                value={amount + " trst"}
              />
              <Property
                name="Term"
                value={amount + " days"}
              />
              <Property
                name="Rate"
                value="10%"
              />
              <Slider />
              {votes[voter][candidate] === 0 && (
                <Button
                  type="submit"
                  label="Vote"
                  primary
                  alignSelf="center"
                  onClick={() => {}}
                />
              )}
            </Box>
          </form>
        )}
      </Context.Consumer>
    );
  }
}

const Service = ({ match: { params: { id } } }) => (
  <Loader id={id}>
    {({ service, session, onVote, votes }) => (
      <Box>
        {service.status === 'vote' && (
          <Vote
            service={service}
            session={session}
            onVote={onVote}
            votes={votes}
          />
        )}
        <Box
          direction="row"
          justify="between"
          align="center"
          gap="small"
        >
          <Heading>
            {service.name}
          </Heading>
          <RoutedButton
            label="Edit"
            path={`/service/edit/${id}`}
          />
        </Box>
        {service.notes && (
          <Box margin={{ bottom: 'large' }}>
            <Markdown>
              {service.notes}
            </Markdown>
          </Box>
        )}
        <Box
          gap="medium"
          margin={{ bottom: 'large' }}
        >
          <Property
            name="Status"
            value={service.status}
          />
          <Property
            name="Created"
            value={(new Date(service.created)).toLocaleDateString()}
          />
          {service.updated && (
            <Property
              name="Updated"
              value={(new Date(service.updated)).toLocaleDateString()}
            />
          )}
        </Box>
        <Box alignSelf="start">
          <RoutedButton
            icon={<Location />}
            path={`/service/location/${id}`}
            hoverIndicator
          />
        </Box>
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
