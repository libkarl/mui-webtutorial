import * as React from "react";
import type { NextPage } from "next";
import Sidebar from "../components/Home/Sidebar";
import Feed from "../components/Home/Feed";
import Rightbar from "../components/Home/Rightbar";
import { Box, Container, Stack } from "@mui/system";
import Navbar from "../components/Home/Navbar";
import Add from "../components/Home/Add";

const Home: NextPage = () => {
  return (
    <>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </>
  );
};

export default Home;
