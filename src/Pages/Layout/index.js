import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import Routes from '../../routes';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { store } = this.props;
    return ( 
    <Provider store={store}>
      <Router basename='' >
        <Routes />
     </Router>
    </Provider>)
  }
}
Layout.propTypes = {
  store: PropTypes.instanceOf(Object).isRequired,
};

export default Layout;