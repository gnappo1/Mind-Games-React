import Footer from '../components/Footer';
import Headers from '../components/Headers';
import React, {Component} from 'react'

class Layout extends Component {
  render() {
    return (
      <div>
        <Headers />
        <div id="content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
