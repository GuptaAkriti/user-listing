import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';
import './style.css';

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    const { fetchUsers, listLimit } = this.props;
    fetchUsers(1, listLimit);
  }

  onSearch(searchString) {
    const { fetchUsers, listLimit } = this.props;
    this.setState({ searchString });
    fetchUsers(1, listLimit, searchString);
  }

  render() {
    const {data} = this.props;

    if(data) {
      return <ul className="__user_list">
        {data.map(item=>
          <User key={item.login} data={item}/>)}
        </ul>
    }
    return (
      <div>No Data Found</div>
    );
  }
}

UserList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
  fetchUsers: PropTypes.func.isRequired,
};

UserList.defaultProps = {
};
