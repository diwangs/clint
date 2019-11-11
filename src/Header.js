import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, RoutedButton, Menu, Text,
} from 'grommet';
import { Checkmark } from 'grommet-icons';

import Context from './Context';

const Header = ({ history }) => (
  <Context.Consumer>
    {({ session, onLogout }) => (
      <Box direction="row" justify="center" align="center">
        <RoutedButton path={session ? '/' : '/login'} hoverIndicator>
          <Box
            pad="small"
            direction="row"
            align="center"
            gap="small"
          >
            <Text size="large">
              Clint
            </Text>
            <Checkmark />
          </Box>
        </RoutedButton>
        {session && (
          <Menu
            label={session.email}
            items={[
              {
                label: 'Circle',
                onClick: () => {
                  history.replace('/circle');
                },
              },
              {
                label: 'Logout',
                onClick: () => {
                  onLogout();
                  history.replace('/login');
                },
              },
            ]}
          />
        )}
      </Box>
    )}
  </Context.Consumer>
);

Header.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default Header;
