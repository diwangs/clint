import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Button, FormField, Heading, TextInput, RangeInput, Text,
} from 'grommet';

import Context from '../Context';

export default class Add extends Component {
  nameRef = React.createRef()

  static propTypes = {
    history: PropTypes.shape({}).isRequired,
  }

  state = { loanAmount: 0, loanTerm: 0 }

  componentDidMount() {
    this.nameRef.current.focus();
  }

  render() {
    const { history } = this.props;
    const { loanAmount, loanTerm } = this.state;
    return (
      <Context.Consumer>
        {({ onCreate }) => (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              onCreate({ loanAmount, loanTerm });
              history.replace('/');
            }}
          >
            <Box>
              <Heading>
                Loan Application
              </Heading>
              <FormField label="Purpose of Loan">
                <TextInput
                  ref={this.nameRef}
                />
              </FormField>
              <FormField label="Bank Account Number">
                <TextInput />
              </FormField>
              <FormField label="Amount">
                <Text alignSelf="end" size="large">{loanAmount + ' trst'}</Text>
                <RangeInput
                  min={0}
                  max={20}
                  step={1}
                  value={loanAmount}
                  onChange={event => this.setState({ loanAmount: parseInt(event.target.value, 10) })}
                />
              </FormField>
              <FormField label="Term">
                <Text alignSelf="end" size="large">{loanTerm + ' days'}</Text>
                <RangeInput
                  min={0}
                  max={1000}
                  step={1}
                  value={loanTerm}
                  onChange={event => this.setState({ loanTerm: parseInt(event.target.value, 10) })}
                />
              </FormField>
              <Box
                margin={{ vertical: 'large' }}
                direction="row-responsive"
                justify="between"
                align="center"
                gap="medium"
              >
                <Button
                  type="submit"
                  label="Apply"
                  primary
                  onClick={() => {}}
                />
                <Button
                  label="Cancel"
                  onClick={() => history.replace('/')}
                />
              </Box>
            </Box>
          </form>
        )}
      </Context.Consumer>
    );
  }
}
