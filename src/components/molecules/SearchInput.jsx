import React, { memo } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import styled from "styled-components";

export const SearchInput =memo( () => {
  return (
    <SContainer>
      <Input placeholder="Search"/>
      <SButtonWrapper>
      <PrimaryButton>Search</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

const SContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`;

const SButtonWrapper = styled.div`
padding: 5px;`
