import React, { Component } from 'react';
import { Link } from 'react-router';

import { Menu } from './components';


class App extends Component {

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <div className="App-login">
            <Link to="/login">Login</Link>
          </div>
          <h2>Learning Record Store</h2>
          <Menu />
        </header>

        {this.props.children}

      </div>
    );
  }
}

export default App;
