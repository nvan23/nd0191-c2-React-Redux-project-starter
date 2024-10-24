import React from 'react';
import { connect } from 'react-redux';

const Home = ({ user, logout }) => {
  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch({ type: 'LOGOUT' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
