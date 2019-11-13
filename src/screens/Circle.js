import React, { Component, Fragment } from 'react';
import {
  Box, Grid, Heading, InfiniteScroll, RoutedButton, Text, TextInput,
} from 'grommet';

import Context from '../Context';

export default class Services extends Component {
  state = { search: '' }

  render() {
    const { search } = this.state;
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
                {services ? (
                  <InfiniteScroll items={services}>
                    {service => (
                      <Fragment>
                        {service.id !== services[session.index].id && (
                          <Box
                            key={service.name}
                            basis="small"
                            round="xsmall"
                            overflow="hidden"
                          >
                            <RoutedButton
                              path={`/service/${service.id}`}
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
                                  {service.name}
                                </Text>
                                {service.status !== 'ok' && (
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
