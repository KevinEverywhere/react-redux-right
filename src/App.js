import React, { Component } from 'react';
import Layout from './components/Layout'
import Gallery from './containers/Gallery';
// import Builder from './containers/Builder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Gallery />
        </Layout>
      </div>
    );
  }
}

export default App;
