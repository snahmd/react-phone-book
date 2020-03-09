import React, { Component } from 'react';
import './List.css';

class List extends Component {
  state = {

  };

  render() {
    return (
      <div className={"listArea"}>
        <input name= {"filter"} id={"filter"} placeholder={"Filter by name or phone"}/>
        <ul className={"list"}>
          <li>
            <span className={"name"}>John Donne</span>
            <span className={"phone"}>111111111</span>
            <span className={"clearfix"}></span>
          </li>
          <li>
            <span className={"name"}>Goethe</span>
            <span className={"phone"}>222222222</span>
            <span className={"clearfix"}></span>
          </li>
          <li>
            <span className={"name"}>Kant</span>
            <span className={"phone"}>333333333</span>
            <span className={"clearfix"}></span>
          </li>
    
        </ul>
      </div>
    );
  }
}

export default List;