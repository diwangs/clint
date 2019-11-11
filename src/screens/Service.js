import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Heading, Markdown, RoutedButton, Text, RangeInput,
} from 'grommet';
import { Location } from 'grommet-icons';

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

const Service = ({ match: { params: { id } } }) => (
  <Loader id={id}>
    {({ service }) => (
      <Box>
        {service.status === 'vote' && (
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
              value="IDR 250.000"
            />
            <Property
              name="Term"
              value="2 months"
            />
            <Property
              name="Rate"
              value="10%"
            />
            <Slider />
            <RoutedButton
              label="Vote"
              path={`/service/${id}`}
              alignSelf="center"
            />
          </Box>
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
