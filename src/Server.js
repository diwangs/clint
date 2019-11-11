import React, { Component } from 'react';

import Context from './Context';

// This file simulates interaction with a server.
// The state retrieved from the server is stored in
// this component's state.
export default class Server extends Component {
  state = { context: { session: { email: 'Me', index: 0 } } }

  componentDidMount() {
    const { context } = this.state;
    // simulate intializing from server
    const services = [];
    const addresses = [
      '35506bd9a1f536553f7b71e57dff00ce0fa104f380897f4666c3ecb665909191',
      '40dbf1d659611ffb3588d5b2fdd98b465f3be8c3c8e05766046bb0284bb01fdd',
      'fe0a1016c29b590bb6984ccac01db6ad9918ae085025c29ce198a73465efa619',
      '7a2962fe049756e0dece49e0dfac91f316858be18fa1d57f510dec4251111fdf',
      '3ad4fdc80ea35ae865d3c09fbcf45510efaa6eb0e85e1b1d674f2c0c4882a80b',
      'c95ff01834f03655355f1a107e34e5a38ed5789b6149a24240a02256c112e93b',
      '4a8c5af80cbbe5a1acdb4e250b9d22c710522445b274c915dbb5966060f2d8d6',
      '33c3da09ab0e5930fd28bf51df8b9a20d436a189cdb71e745d30c3652a1b0a72',
      '20f33f809c8a56019e64e1d2743ac2cc914fea2aff50d74fd8c4a3c64288609f',
      '1717dfa9a5fe38fb24276960f2b910b6b3d7e9367b8e11b879aba34dd86eee1f',
    ];
    const now = (new Date()).toISOString();

    // Add Hafizh
    services.push({
      created: now,
      status: 'vote',
      id: 'service-0',
      name: 'Hafizh Budiman',
      username: 'hafizh',
      address: '35506bd9a1f536553f7b71e57dff00ce0fa104f380897f4666c3ecb665909191',
      loan: [
        {
          amount: 10,
          term: 60,
          status: 'In Approval',
        },
      ],
    });

    // Add Onel
    services.push({
      created: now,
      status: 'vote',
      id: 'service-1',
      name: 'Cornelius Yan Mintareja',
      username: 'onel',
      address: '40dbf1d659611ffb3588d5b2fdd98b465f3be8c3c8e05766046bb0284bb01fdd',
      loan: [
        {
          amount: 5,
          term: 30,
          status: 'In Approval',
        },
      ],
    });

    // Add Diwang
    services.push({
      created: now,
      status: 'ok',
      id: 'service-2',
      name: 'Senapati S. Diwangkara',
      username: 'diwang',
      address: 'fe0a1016c29b590bb6984ccac01db6ad9918ae085025c29ce198a73465efa619',
      loan: [],
    });

    const nextContext = {
      ...context,
      services,
      addresses,
      onLogin: this.onLogin,
      onLogout: this.onLogout,
      onRegister: this.onRegister,
      onCreate: this.onCreate,
      onUpdate: this.onUpdate,
      onDelete: this.onDelete,
      onSearch: this.onSearch,
      onFind: this.onFind,
      onUnload: this.onUnload,
    };

    this.setState({ context: nextContext, services, addresses });
  }

  onLogin = ({ email }) => {
    const { context, services } = this.state;

    let i;
    let index = 0;
    for (i = 0; i < services.length; i += 1) {
      if (services[i].username === email) {
        index = i;
      }
    }

    this.setState({
      context: {
        ...context,
        session: { email, index },
      },
    });
  }

  onLogout = () => {
    const { context } = this.state;
    this.setState({
      context: {
        ...context,
        session: undefined,
      },
    });
  }

  onRegister = ({ newUsername, newName }) => {
    const { context, services, addresses } = this.state;

    const now = (new Date()).toISOString();
    const idx = services.length;
    const newId = 'service-' + idx;
    const newUser = {
      created: now,
      status: 'ok',
      id: newId,
      name: newName,
      username: newUsername,
      address: addresses[idx],
      loan: [],
    };
    const temp = services;
    temp.push(newUser);
    
    this.setState({
      context: {
        ...context,
        services: temp,
      },
      services: temp,
    });
  }

  onCreate = ({ loanAmount, loanTerm }) => {
    const { context, services } = this.state;
    const newLoan = {
      amount: loanAmount,
      term: loanTerm,
      status: 'In Approval',
    };
    const temp = services;
    temp[context.session.index].loan = services[context.session.index].loan.concat(newLoan);
    temp[context.session.index].status = 'vote';
    this.setState({
      context: {
        ...context,
        services: temp,
      },
      services: temp,
    });
  }

  onSearch = (search) => {
    const { context, services } = this.state;
    const exp = new RegExp(search, 'i');
    const nextServices = services.filter(s => exp.test(s.name));
    this.setState({
      context: {
        ...context,
        services: nextServices,
      },
    });
  }

  onFind = (id) => {
    const { context, services } = this.state;
    const service = services.find(s => s.id === id) || { name: 'not found' };
    this.setState({
      context: {
        ...context,
        service,
      },
    });
  }

  onUnload = () => {
    const { context } = this.state;
    this.setState({
      context: {
        ...context,
        service: undefined,
      },
    });
  }

  onUpdate = (id, service) => {
    const { context, services } = this.state;
    const now = (new Date()).toISOString();
    const nextService = { ...service, updated: now };
    const nextServices = services.map((s) => {
      if (s.id === id) {
        return nextService;
      }
      return s;
    });
    this.setState({
      context: {
        ...context,
        services: nextServices,
        service: nextService,
      },
    });
  }

  onDelete = (id) => {
    const { context, services } = this.state;
    const nextServices = services.filter(s => s.id !== id);
    this.setState({
      context: {
        ...context,
        services: nextServices,
      },
    });
  }

  render() {
    const { context } = this.state;
    return (
      <Context.Provider value={context} {...this.props} />
    );
  }
}
