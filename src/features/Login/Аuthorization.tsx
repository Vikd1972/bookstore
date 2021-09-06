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

function Аuthorization() {
  return (
    <Forms>
      <h3>Аuthorization</h3>

      <form className="fields">
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

export default Аuthorization;
