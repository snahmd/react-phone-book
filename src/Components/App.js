import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import Contacts from './Contacts';

class App extends Component {
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
    return(
      <div className="App">
        <Contacts contacts={this.props.contacts}/>
      </div>
    );
  }
}

export default App;
