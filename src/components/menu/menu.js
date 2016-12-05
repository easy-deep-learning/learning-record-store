import React, { Component } from 'react';

import { Link } from 'react-router';

export class Menu extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Main</Link></li>
          <li><Link to="/statements">Statements</Link></li>
        </ul>
      </nav>
    );
  }
}
