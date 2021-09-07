import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Registration from "./Registration";
import Аuthorization from "./Аuthorization";



function Login() {
  return (
    <Router>
      <Heading>
        <Links>
          <div>
            <Link to="/authorization">Аuthorization</Link>
          </div>
          <div>
            <Link to="/registration">Registration</Link>
          </div>
        </Links>

        <Main>
          <Switch>
            <Route path="/authorization">
              <Аuthorization />
            </Route>
            <Route path="/registration">
              <Registration />
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
  margin: 15px auto 0;
  width: 300px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 30px;
`;

const Main = styled.div`
  display: block;
`;

export default Login;
