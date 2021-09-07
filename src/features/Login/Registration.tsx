import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Forms>
      <h3>Registration</h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios.post("http://localhost:3001/api/user/create", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
          }).then((r) => {
            console.log("List", r.data);
          });
        }}
      >
        <Lebel>
          First Name:
          <input
            className="input_forms"
            type="text"
            name="firstName"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstName}
          />
        </Lebel>
        <Lebel>
          Last Name:
          <input
            className="input_forms"
            type="text"
            name="lastName"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
          />
        </Lebel>
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
  margin: 10px 0;
  width: 100%;

  .input_forms {
    width: 100%;
    box-sizing: border-box;
  }
`;

export default Registration;
