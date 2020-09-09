import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './views/home';
import Profile from './views/profile';
import Transfers from './views/transfers';
import Navigation from './components/navigation';

const Container = styled.div`
  padding: 1rem 1rem 0rem 1rem;
  position: relative;
  margin: 0 auto;
  height: 100vh;
  max-height: 48rem;
  max-width: 26rem;
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
        <Navigation />
      </Container>
    </Router>
  );
}
