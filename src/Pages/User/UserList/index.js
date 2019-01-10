import { connect } from 'react-redux';
import UserList from './UserList';
import { fetchUsers } from './action';

const mapStateToProps = ({ user }) => {
  const {list} = user;
  return {
    ...list
  };
};

const disaptchActions = {
  fetchUsers,
};

export default connect(
  mapStateToProps,
  disaptchActions,
)(UserList);
