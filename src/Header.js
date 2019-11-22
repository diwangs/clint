import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, RoutedButton, Menu, Text, Image,
} from 'grommet';
import { Checkmark } from 'grommet-icons';

import Context from './Context';
import logo from '../public/img/logo.png';

const Header = ({ history }) => (
  <Context.Consumer>
    {({ session, onLogout }) => (
      <Box direction="row" justify="between" align="center">
        <RoutedButton path={session ? '/' : '/login'} hoverIndicator>
          <Box
            pad="small"
            direction="row"
            align="center"
            gap="small"
          >
            <Box height="xxsmall" width="xsmall">
              <Image
                src={logo}
                fit="contain"
              />
            </Box>
          </Box>
        </RoutedButton>
        {session && (
          <Menu
            label='Profile'
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
