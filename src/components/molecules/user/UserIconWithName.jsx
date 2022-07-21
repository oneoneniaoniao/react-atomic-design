import React, { memo, useContext } from "react";
import { useInRouterContext } from "react-router-dom";
import styled from "styled-components";
// import { UserContext } from "../../../provider/UserProvider";
import {useRecoilValue} from "recoil";
import {userState} from "../../../store/userState";

export const UserIconWithName = memo((props) => {
  const { image, name } = props;
  // const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SContainer>
      <img
        alt={name}
        height={160}
        width={160}
        style={{ objectFit: "cover" }}
        src={image}
      ></img>
      <p>{name}</p>
      {isAdmin && <button>edit</button>}
    </SContainer>
  );
})

const SContainer = styled.div`
  text-align: center;
  img {
    border-radius: 50%;
    margin-bottom: 10px;
  }
  p {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0 0 10px 0;
    color: #333;
  }
  button {
    border: none;
    text-decoration: underline;
    background: none;
    margin-bottom: 10px;
    color: #666;
    :hover {
      cursor: pointer;
      color: #333;
    }
  }
`;
