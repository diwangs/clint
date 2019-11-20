import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Button, FormField, Heading, TextInput, Select, MaskedInput,
} from 'grommet';

import Context from '../Context';

const daysInMonth = month => new Date(2019, month, 0).getDate();

export default class Register extends Component {
  nameRef = React.createRef()

  static propTypes = {
    history: PropTypes.shape({}).isRequired,
  }

  state = {
    newUsername: '',
    newName: '',
    address: "",
    birthDate: "",
    birthPlace: "",
    city: "",
    email: "",
    gender: 'Pria',
    hasDivorced: "",
    houseStatus: "",
    idCard: "",
    isSingle: "",
    kecamatan: "",
    kelurahan: "",
    lastEducation: "High School",
    momMaidenName: "",
    npwp: "",
    phone: "",
    zipCode: "",
    error: {},
  }

  componentDidMount() {
    this.nameRef.current.focus();
  }

  render() {
    const { history } = this.props;
    const {
      newUsername,
      newName,
      address,
      birthDate,
      birthPlace,
      city,
      email,
      gender,
      hasDivorced,
      houseStatus,
      idCard,
      isSingle,
      kecamatan,
      kelurahan,
      lastEducation,
      momMaidenName,
      npwp,
      phone,
      zipCode,
      error,
    } = this.state;
    return (
      <Context.Consumer>
        {({ onRegister }) => (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (newUsername) {
                if (newName) {
                  onRegister({
                    newUsername,
                    newName,
                    address,
                    birthDate,
                    birthPlace,
                    city,
                    email,
                    gender,
                    hasDivorced,
                    houseStatus,
                    idCard,
                    isSingle,
                    kecamatan,
                    kelurahan,
                    lastEducation,
                    momMaidenName,
                    npwp,
                    phone,
                    zipCode,
                  });
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
              <FormField label="Email">
                <MaskedInput
                  mask={[
                    {
                      regexp: /^[\w\-_.]+$/,
                      placeholder: 'example',
                    },
                    { fixed: '@' },
                    {
                      regexp: /^[\w]+$/,
                      placeholder: 'clint',
                    },
                    { fixed: '.' },
                    {
                      regexp: /^[\w]+$/,
                      placeholder: 'com',
                    },
                  ]}
                  value={email}
                  onChange={event => this.setState({ email: event.target.value, error: {} })}
                />
              </FormField>
              <FormField label="Password">
                <TextInput
                  type="password"
                />
              </FormField>
              <FormField label="Full Name" error={error.name}>
                <TextInput
                  value={newName}
                  onChange={event => this.setState({ newName: event.target.value, error: {} })}
                />
              </FormField>
              <FormField label="Gender">
                <Select
                  options={['Pria', 'Wanita']}
                  value={gender}
                  onChange={({ option }) => this.setState({ gender: option, error: {} })}
                />
              </FormField>
              <FormField label="Last Education">
                <Select
                  options={['Middle School', 'High School', 'College']}
                  value={lastEducation}
                  onChange={({ option }) => this.setState({ lastEducation: option, error: {} })}
                />
              </FormField>
              <FormField label="Citizenship ID">
                <TextInput
                  value={idCard}
                  onChange={event => this.setState({ idCard: event.target.value, error: {} })}
                />
              </FormField>
              <FormField label="NPWP">
                <TextInput
                  value={npwp}
                  onChange={event => this.setState({ npwp: event.target.value, error: {} })}
                />
              </FormField>
              <FormField label="Address">
                <TextInput
                  value={address}
                  onChange={event => this.setState({ address: event.target.value, error: {} })}
                />
              </FormField>
              <FormField label="City">
                <TextInput
                  value={city}
                  onChange={event => this.setState({ city: event.target.value, error: {} })}
                />
              </FormField>
              <FormField label="District">
                <TextInput
                  value={kecamatan}
                  onChange={event => this.setState({ kecamatan: event.target.value, error: {} })}
                />
              </FormField>
              <FormField label="Sub-District">
                <TextInput
                  value={kelurahan}
                  onChange={event => this.setState({ kelurahan: event.target.value, error: {} })}
                />
              </FormField>
              <FormField label="Postal Code">
                <TextInput
                  value={zipCode}
                  onChange={event => this.setState({ zipCode: event.target.value, error: {} })}
                />
              </FormField>
              <FormField label="Birthplace">
                <TextInput
                  value={birthPlace}
                  onChange={event => this.setState({ birthPlace: event.target.value, error: {} })}
                />
              </FormField>
              <FormField label="Birthdate">
                <MaskedInput
                  mask={[
                    {
                      length: [1, 2],
                      options: Array.from({ length: 12 }, (v, k) => k + 1),
                      regexp: /^1[0,1-2]$|^0?[1-9]$|^0$/,
                      placeholder: "mm",
                    },
                    { fixed: "/" },
                    {
                      length: [1, 2],
                      options: Array.from(
                        {
                          length: daysInMonth(parseInt(birthDate.split("/")[0], 10))
                        },
                        (v, k) => k + 1
                      ),
                      regexp: /^[1-2][0-9]$|^3[0-1]$|^0?[1-9]$|^0$/,
                      placeholder: "dd",
                    },
                    { fixed: "/" },
                    {
                      length: 4,
                      options: Array.from({ length: 100 }, (v, k) => 2019 - k),
                      regexp: /^[1-2]$|^19$|^20$|^19[0-9]$|^20[0-9]$|^19[0-9][0-9]$|^20[0-9][0-9]$/,
                      placeholder: "yyyy",
                    },
                  ]}
                  value={birthDate}
                  onChange={event => this.setState({ birthDate: String(event.target.value), error: {} })}
                />
              </FormField>
              <FormField label="Handphone">
                <MaskedInput
                  mask={[
                    { fixed: "(" },
                    {
                      length: 2,
                      regexp: /^[0-9]{1,3}$/,
                      placeholder: "xxx",
                    },
                    { fixed: ")" },
                    { fixed: " " },
                    {
                      length: 3,
                      regexp: /^[0-9]{1,3}$/,
                      placeholder: "xxx",
                    },
                    { fixed: "-" },
                    {
                      length: 4,
                      regexp: /^[0-9]{1,4}$/,
                      placeholder: "xxxx",
                    },
                    { fixed: "-" },
                    {
                      length: 4,
                      regexp: /^[0-9]{1,4}$/,
                      placeholder: "xxxx",
                    },
                  ]}
                  value={phone}
                  onChange={event => this.setState({ phone: String(event.target.value), error: {} })}
                />
              </FormField>
              <FormField label="Marital Status">
                <Select
                  options={['Single', 'Married', 'Divorced']}
                  value={isSingle}
                  onChange={({ option }) => this.setState({ isSingle: option, hasDivorced: option, error: {} })}
                />
              </FormField>
              <FormField label="House Status">
                <TextInput
                  value={houseStatus}
                  onChange={event => this.setState({ houseStatus: event.target.value, error: {} })}
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
