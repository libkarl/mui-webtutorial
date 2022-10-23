import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Button from "@mui/material/Button";
import { Add, Settings } from "@mui/icons-material";
import { styled, Typography } from "@mui/material";
import { margin } from "@mui/system";

const Home: NextPage = () => {
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",

    margin: 5,
    "&:hover": { backgroundColor: "lightblue" },
    "&disabled": { backgroundColor: "green", color: "white" },
  });

  return (
    <>
      <style jsx global>{`
        * {
          font-family: "Roboto", sans-serif;
        }
      `}</style>
      <div>
        <Button variant="text">Text</Button>
        <Button startIcon={<Settings />} variant="contained" color="secondary">
          Settings
        </Button>
        <Button startIcon={<Add />} variant="contained" color="success">
          Add
        </Button>
        <Button variant="outlined" disabled>
          Outlined
        </Button>
        <Typography variant="h1" component="p">
          It uses h1 style but actualy it is p tag
        </Typography>
        <BlueButton variant="contained">Unique button</BlueButton>
      </div>
    </>
  );
};

export default Home;
