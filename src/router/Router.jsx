import React from "react";
import { Route, Routes } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};
