import React from "react";
import styled from "styled-components";

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

function Registration() {
  return (
    <Forms>
      <h3>Registration</h3>

      <form
        className="fields"
        method="post"
        action="http://localhost:3000/api/user/create"
        //encType="application/x-www-form-urlencoded"
      >
        <Lebel>
          First Name:
          <br />
          <input className="input_forms" type="text" name="firstName" />
        </Lebel>
        <br />
        <Lebel>
          Last Name:
          <br />
          <input className="input_forms" type="text" name="lastName" />
        </Lebel>
        <br />
        <Lebel>
          Email:
          <br />
          <input className="input_forms" type="email" name="email" />
        </Lebel>
        <br />
        <Lebel>
          Password:
          <br />
          <input className="input_forms" type="password" name="password" />
        </Lebel>
        <br />
        <br />
        <Lebel>
          <input className="input_forms" type="submit" value="Send" />
        </Lebel>
      </form>
    </Forms>
  );
}

export default Registration;
