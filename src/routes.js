import React from 'react';
import { Route, Switch } from 'react-router';
import UserList from './Pages/User/UserList';
import UserProfile from './Pages/User/UserProfile';
import NotFound from './Pages/NotFound';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={UserList} />
    <Route
        path={`/:user`}
        exact
        render={({match}) => <UserProfile user={match.params.user} />}
      />
    <Route path="/notFound" component={NotFound} />
  </Switch>
);
export default Routes;