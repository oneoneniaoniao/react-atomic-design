import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/UserCard";
import { HeaderOnly } from "../templates/HeaderOnly";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
// import { UserContext } from "../../provider/UserProvider";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map((i) => {
  return {
    id: i,
    name: `name${i}`,
    image: "https://source.unsplash.com/mJaD10XeD7w",
    email: `name${i}@gmail.com`,
    phone: `090-${i}${i}${i}${i}-${i}${i}${i}${i}`,
    address: `123 Main St, Anytown, CA 12${i}${i}${i}`,
    company: {
      name: `company${i}`,
    },
  };
});

export const Users = () => {
  const [userInfo, setUserInfo] = useRecoilState(userState);
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <HeaderOnly>
      <SContainer>
        <SearchInput />
        <SecondaryButton onClick={onClickSwitch}>switch</SecondaryButton>
        <SUserArea>
          {users.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })}
        </SUserArea>
      </SContainer>
    </HeaderOnly>
  );
};

const SContainer = styled.div`
  text-align: center;
  align-items: center;
  padding: 20px;
`;

const SUserArea = styled.div`
  padding: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
`;
