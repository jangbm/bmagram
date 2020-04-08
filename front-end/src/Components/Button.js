import React from "react";
import styled from "styled-components";

const Container = styled.button`
  width: 100%;
  border: 0;
  border-radius: ${(props) => props.theme.borderRadius};
  color: white;
  background-color: ${(props) => props.theme.blueColor};
  padding: 7px 0px;
  text-align: center;
  font-size: 14px;
`;

const Button = ({ text }) => <Container>{text}</Container>;

export default Button;
