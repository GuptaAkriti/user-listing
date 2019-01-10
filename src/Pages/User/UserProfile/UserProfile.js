import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    const { fetchUser, user} = this.props;
    if(user){
      fetchUser(user);
    }
  }

  render() {
    const {data} = this.props;

    if(data) {
      return <div className="__user_profile">
         <div className="__left_content">
          <a href={data.avatar_url}>
          <img alt="" className="__avatar" src={data.avatar_url} height="230" width="230"  />
          </a>
          <div className="__vcard">
            <h1>{data.name}</h1>
            <span>{data.login}</span>
          </div>
          <div className="__profile">
            <a href={data.url}>Github</a>
            <span>{data.location}</span>
          </div>
         </div>
        <span>{data.repos_url}</span>
        </div>
    }
    return (
      <div>No Data Found</div>
    );
  }
}

UserProfile.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
  fetchUser: PropTypes.func.isRequired,
  user: PropTypes.string,
};

UserProfile.defaultProps = {
  user: ''
};
