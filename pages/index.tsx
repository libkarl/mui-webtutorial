import * as React from "react";
import type { NextPage } from "next";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import { Box, Container, Stack } from "@mui/system";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <style jsx global>{`
        * {
          font-family: "Roboto", sans-serif;
        }
      `}</style>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </>
  );
};

export default Home;
