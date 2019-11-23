import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'grommet';
import axios from 'axios';

import Context from './Context';

class Content extends Component {
  componentDidMount() {
    const {
      id, session, service, onVote, votes, account,
    } = this.props;
  }

  render() {
    const { children, service, onVote, votes, session, account } = this.props;
    if (!account) {
      return (
        <Text>
          Loading ...
        </Text>
      );
    }
    return children({ service, session, onVote, votes, account });
  }
}

Content.propTypes = {
  children: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  account: PropTypes.string.isRequired,
  service: PropTypes.shape({}),
};

Content.defaultProps = {
  service: undefined,
};

const Loader = ({ children, id }) => (
  <Context.Consumer>
    {({ service, session, onVote, votes, account }) => (
      <Content
        id={id}
        service={service}
        account={account}
        session={session}
        votes={votes}
        onVote={onVote}
      >
        {children}
      </Content>
    )}
  </Context.Consumer>
);

Loader.propTypes = {
  children: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Loader;
