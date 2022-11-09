import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Grid,
  Modal,
  Paper,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  ImageAspectRatio,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import { Box, Stack } from "@mui/system";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: "1rem",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Add = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="New Article"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={750} height={500} bgcolor="white" p={4} borderRadius={2}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              sx={{ width: 45, height: 45 }}
            />
            <Typography fontWeight={500} variant="subtitle1">
              JohnDoe
            </Typography>
          </UserBox>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs>
              <Item>xs</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>xs=6</Item>
            </Grid>
            <Grid item xs>
              <Item>xs</Item>
            </Grid>
          </Grid>
          <TextField
            sx={{ width: "100%", marginTop: "1rem" }}
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <ImageAspectRatio color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
