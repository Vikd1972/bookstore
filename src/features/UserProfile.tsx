import React from "react";
import styled from "styled-components";
import { userFirstName, userLastName, userEmail } from "./Login/Аuthorization";

function UserProfile() {
  return (
    <Field>
      <h3>User Profile</h3>
      <Form>
        <Signature>First Name:</Signature>
        <Value>{userFirstName} </Value>
        <Signature>Last Name:</Signature>
        <Value> {userLastName} </Value>
        <Signature>Email:</Signature>
        <Value> {userEmail} </Value>
      </Form>
    </Field>
  );
}

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 200px;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Signature = styled.div`
  font-size: 14px;
`;
const Value = styled.div`
  font-size: 16px;
  font-weight: 700;
  height: 16px;
  margin-bottom: 15px;
`;

export default UserProfile;
