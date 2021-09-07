import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import UserProfile from "./UserProfile";
import Books from "./Books";
import Favourites from "./Favourites";
import Login from "./Login/Login";
import { userEmail } from "./Login/Аuthorization";

function Header() {
  let IdCircle;

  if (userEmail === "") {
    IdCircle = <IdCircleFalse></IdCircleFalse>;
  } else {
    IdCircle = <IdCircleTrue></IdCircleTrue>;
  }

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
          <Item>
            <Link to="/login">Login</Link>
            {IdCircle}
          </Item>
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

const Item = styled.div`
  display: flex;
`;

const IdCircleFalse = styled.div`
  display: block;
  width: 10px;
  height: 10px;
  background-color: #ff0000;
  border-radius: 50%;
  margin: 10px 0 0 10px;
`;

const IdCircleTrue = styled(IdCircleFalse)`
  background-color: #00ff00;
`;

export default Header;
