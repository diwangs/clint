import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Button, FormField, Heading, TextInput, 
} from 'grommet';

import Context from '../Context';

export default class Register extends Component {
  nameRef = React.createRef()

  static propTypes = {
    history: PropTypes.shape({}).isRequired,
  }

  state = { newUsername: '', newName: '', error: {} }

  componentDidMount() {
    this.nameRef.current.focus();
  }

  render() {
    const { history } = this.props;
    const { newUsername, newName, error } = this.state;
    return (
      <Context.Consumer>
        {({ onRegister }) => (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (newUsername) {
                if (newName) {
                  onRegister({ newUsername, newName });
                  history.replace('/login');
                } else {
                  this.setState({ error: { name: 'required' } });
                }
              } else {
                this.setState({ error: { username: 'required' } });
              }
            }}
          >
            <Box>
              <Heading>
                Registration
              </Heading>
              <FormField label="Username" error={error.username}>
                <TextInput
                  ref={this.nameRef}
                  value={newUsername}
                  onChange={event => this.setState({ newUsername: event.target.value, error: {} })}
                />
              </FormField>
              <FormField label="Password">
                <TextInput
                  type="password"
                />
              </FormField>
              <FormField label="Nama Lengkap" error={error.name}>
                <TextInput
                  value={newName}
                  onChange={event => this.setState({ newName: event.target.value, error: {} })}
                />
              </FormField>
              <FormField label="Jenis Kelamin">
                <TextInput />
              </FormField>
              <FormField label="No KTP">
                <TextInput />
              </FormField>
              <FormField label="No NPWP">
                <TextInput />
              </FormField>
              <FormField label="Alamat">
                <TextInput />
              </FormField>
              <FormField label="Kota">
                <TextInput />
              </FormField>
              <FormField label="Kode Pos">
                <TextInput />
              </FormField>
              <FormField label="Tempat Lahir">
                <TextInput />
              </FormField>
              <FormField label="Tanggal Lahir">
                <TextInput />
              </FormField>
              <FormField label="Handphone">
                <TextInput />
              </FormField>
              <FormField label="Pekerjaan">
                <TextInput />
              </FormField>
              <FormField label="Penghasilan per bulan">
                <TextInput />
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
                  label="Register"
                  primary
                  onClick={() => {}}
                />
                <Button
                  label="Cancel"
                  onClick={() => history.replace('/login')}
                />
              </Box>
            </Box>
          </form>
        )}
      </Context.Consumer>
    );
  }
}
