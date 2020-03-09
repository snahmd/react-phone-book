import React, { Component } from 'react';
import List from './List';
import Form from './Form';

class Contacts extends Component {
  state = {
    contacts: [{
      name : 'Mehmet',
      phone : '12332323415'
    },{
      name : 'Ahmed',
      phone : '93254516671'
    }]

  };

  render() {
    return (
      <div>
        <List contacts={this.state.contacts}/>
        <Form/>
      </div>
    );
  }
}

export default Contacts;