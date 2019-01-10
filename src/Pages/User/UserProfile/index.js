import { connect } from 'react-redux';
import UserProfile from './UserProfile';
import { fetchUser } from './action';

const mapStateToProps = ({ user }) => {
  const {profile} = user;
  console.log(profile)
  return profile;
};

const disaptchActions = {
  fetchUser,
};

export default connect(
  mapStateToProps,
  disaptchActions,
)(UserProfile);
