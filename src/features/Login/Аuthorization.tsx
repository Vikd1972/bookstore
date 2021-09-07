import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export let userFirstName = "";
export let userLastName = "";
export let userEmail = "";

function Аuthorization() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Forms>
      <h3>Аuthorization</h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post("http://localhost:3001/api/user/login", {
              email: email,
              password: password,
            })
            .then((r) => {
              userFirstName = r.data.firstName;
              userLastName = r.data.lastName;
              userEmail = r.data.email;
                          console.log("List", r.data);
            });
        }}
      >
        <Lebel>
          Email:
          <input
            className="input_forms"
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </Lebel>
        <Lebel>
          Password:
          <input
            className="input_forms"
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </Lebel>

        <Lebel>
          <button className="input_forms" type="submit">
            Send
          </button>
        </Lebel>
      </form>
    </Forms>
  );
}

const Forms = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  .fields {
    width: 100%;
  }
`;

const Lebel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10 px 0;
  width: 100%;
  .input_forms {
    width: 100%;
    box-sizing: border-box;
  }
`;

export default Аuthorization;
