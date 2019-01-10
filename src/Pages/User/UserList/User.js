import React from 'react';
import PropTypes from 'prop-types';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { data } = this.props;
    return ( 
        <li className="__user">
            <span className="__left_content">
            <a href={data.html_url}>
                <img alt="" src={data.avatar_url} className="__avatar" height="48" width="48" />
            </a>
            </span>
            <div className="__right_content">
                <a href={`/${data.login}`}>{data.login}</a>
                <span>test</span>
            </div>
        </li>
    )
  }
}
User.propTypes = {
    data: PropTypes.instanceOf(Object).isRequired,
};

export default User;