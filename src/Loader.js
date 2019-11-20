import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'grommet';
import axios from 'axios';

import Context from './Context';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      id, service, onFind, onUnload, session, onVote, votes,
    } = this.props;
    if (!service || service.id !== id) {
      if (service) {
        onUnload();
      }
      onFind(id);
    }
  }

  async getData(key) {
    try {
      const { username } = key
      const response = await axios.get('http://3.91.229.34:3000/user/' + username);
      const { data } = response;
      this.setState({
        name: data.name,
        gender: data.gender,
        birthDate: data.birthDate,
        birthPlace: data.birthPlace,
        idCard: data.idCard,
        momMaidenName: data.momMaidenName,
        hasDivorced: data.hasDivorced,
        isSingle: data.isSingle,
        lastEducation: data.lastEducation,
        address: data.address,
        houseStatus: data.houseStatus,
        kelurahan: data.kelurahan,
        kecamatan: data.kecamatan,
        city: data.city,
        zipCode: data.zipCode,
        phone: data.phone,
        email: data.email,
        npwp: data.npwp,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { children, service, session, onVote, votes } = this.props;
    const {
      name,
      gender,
      birthDate,
      birthPlace,
      idCard,
      momMaidenName,
      hasDivorced,
      isSingle,
      lastEducation,
      address,
      houseStatus,
      kelurahan,
      kecamatan,
      city,
      zipCode,
      phone,
      email,
      npwp,
    } = this.state;
    if (!service) {
      return (
        <Text>
          Loading ...
        </Text>
      );
    }
    console.log("MEMEEEEKK " + service.username);

    this.getData(service);

    if (!name) {
      return (
        <Text>
          Loading ...
        </Text>
      );
    }
    return children({
      service,
      session,
      onVote,
      votes,
      name,
      gender,
      birthDate,
      birthPlace,
      idCard,
      momMaidenName,
      hasDivorced,
      isSingle,
      lastEducation,
      address,
      houseStatus,
      kelurahan,
      kecamatan,
      city,
      zipCode,
      phone,
      email,
      npwp,
    });
  }
}

Content.propTypes = {
  children: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  service: PropTypes.shape({}),
  onFind: PropTypes.func.isRequired,
  onUnload: PropTypes.func.isRequired,
};

Content.defaultProps = {
  service: undefined,
};

const Loader = ({ children, id }) => (
  <Context.Consumer>
    {({ service, onFind, onUnload, session, onVote, votes }) => (
      onFind && (
        <Content
          id={id}
          service={service}
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
