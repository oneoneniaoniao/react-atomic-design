import React from "react";
import styled from "styled-components";

export const Input = ({placeholder=""}) => {
  return <SInput type="text" placeholder={placeholder}/>;
};
const SInput = styled.input`
  width: 200px;
  height: 25px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  &:focus {
    outline: none;
    border: 1px solid #ccc;
  }
`;
