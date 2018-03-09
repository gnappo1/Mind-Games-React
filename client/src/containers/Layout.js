import Footer from '../components/Footer';
import React, {Component} from 'react'

class Layout extends Component {
  render() {
    return (
      <div>
        <div id="content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
