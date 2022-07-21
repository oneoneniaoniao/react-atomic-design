import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserCard } from "../organisms/UserCard";
import { DefaultLayout } from "../templates/DefaultLayout";
import { userState } from "../../store/userState";


export const Top = () => {
  const navigate = useNavigate();
  // const {setUserInfo} = React.useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);
  return (
    <DefaultLayout>
      <SContainer>
        <h2>Top page</h2>
        <br />
        <SecondaryButton onClick={() => {
          setUserInfo({isAdmin: true});
          navigate("/users")}
        }>
          Administrator
        </SecondaryButton>
        <br />
        <br />
        <SecondaryButton onClick={() => {
          setUserInfo({isAdmin: false});
          navigate({pathname:"/users"})
        }
          }>
          normal User
        </SecondaryButton>
      </SContainer>
    </DefaultLayout>
  );
};

const SContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`;
