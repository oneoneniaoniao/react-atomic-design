import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/UserCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { Router } from "./router/Router";
import "./styles.css";
import { Top } from "./components/pages/Top";
import { Users } from "./components/pages/Users";
import { UserProvider } from "./provider/UserProvider";
import { RecoilRoot } from "recoil";

const App = () => (
  <>
  <RecoilRoot>
    <UserProvider>
      <Router />
    </UserProvider>
    </RecoilRoot>
  </>
);

export default App;
