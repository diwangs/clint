import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'grommet';
import axios from 'axios';

import Context from './Context';

class Content extends Component {
  componentDidMount() {
    const {
      id, session, service, onFind, onUnload, onVote, votes, account,
    } = this.props;
    if (!service || service.id !== id) {
      if (service) {
        onUnload();
      }
      onFind(id);
    }
  }

  render() {
    const { children, service, onVote, votes, session, account } = this.props;
    if (!service) {
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
  onFind: PropTypes.func.isRequired,
  onUnload: PropTypes.func.isRequired,
};

Content.defaultProps = {
  service: undefined,
};

const Loader = ({ children, id }) => (
  <Context.Consumer>
    {({ service, onFind, onUnload, session, onVote, votes, account }) => (
      onFind && (
        <Content
          id={id}
          service={service}
          account={account}
          session={session}
          votes={votes}
          onFind={onFind}
          onVote={onVote}
          onUnload={onUnload}
        >
          {children}
        </Content>
      )
    )}
  </Context.Consumer>
);

Loader.propTypes = {
  children: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Loader;
