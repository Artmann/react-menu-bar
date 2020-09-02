import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './views/home';
import Profile from './views/profile';
import Transfers from './views/transfers';

const Container = styled.div`
  padding: 1rem;
`;

export default function App(): ReactElement {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/transfers">
            <Transfers />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
