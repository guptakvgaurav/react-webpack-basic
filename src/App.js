import React, {
  Component
} from 'react';

import {
  fetchUsers
} from './constants/async.actions';

import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    const users = this.props.list;
    return (
      <div>
        <h1>This is the Main App</h1>
        {
          this.props.loading ? 
            <li>loading users</li> : 
            users.length ? 
              users.map(user => <li key={user.id}>{user.name} - {user.email}</li>) :
              <li>No Users Found.</li>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => state.users;
const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers())
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;