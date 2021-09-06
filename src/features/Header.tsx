import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import UserProfile from "./UserProfile";
import Books from "./Books";
import Favourites from "./Favourites";
import Login from "./Login/Login";

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 800px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  min-height: 30px;
  background-color: #cccccc;
  line-height: 27px;
`;

const Main = styled.div`
  display: block;
`;

function Header() {
  return (
    <Router>
      <Heading>
        <Links>
          <div>
            <Link to="/user">User Profile</Link>
          </div>
          <div>
            <Link to="/books">Books</Link>
          </div>
          <div>
            <Link to="/favourites">Favourites</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </Links>

        <Main>
          <Switch>
            <Route path="/user">
              <UserProfile />
            </Route>
            <Route path="/books">
              <Books />
            </Route>
            <Route path="/favourites">
              <Favourites />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Main>
      </Heading>
    </Router>
  );
}

export default Header;
