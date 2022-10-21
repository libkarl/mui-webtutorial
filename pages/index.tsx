import * as React from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import Link from "next/link";
import { GlobalStyle } from "../styles/globalStyle";

const MenuItem = styled(Link)`
  font-size: "3rem";
`;

const MenuContainer = styled.div`
  width: 100%;
  height: 10vw;
  margin: auto;
`;

const MenuPosition = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 4rem;
  padding: 1rem;
`;

export const Home: NextPage = () => {
  return (
    <MenuContainer>
      <GlobalStyle />
      <MenuPosition>
        <MenuItem href={"/"}>Home</MenuItem>
        <MenuItem href={"/"}>About</MenuItem>
        <MenuItem href={"/"}>Portfolio</MenuItem>
        <MenuItem href={"/"}>Contact</MenuItem>
      </MenuPosition>
    </MenuContainer>
  );
};

export default Home;
