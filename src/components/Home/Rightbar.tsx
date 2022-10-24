import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      flex={2}
      width="500px"
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="sticky" top={80}>
        <Typography variant="h6" fontWeight={300} sx={{ marginBottom: "1rem" }}>
          Online friends
        </Typography>
        <AvatarGroup max={6} sx={{ marginRight: "2rem", height: "4.5rem" }}>
          <Avatar
            sx={{ width: { xs: 40, lg: 60 }, height: { xs: 40, lg: 60 } }}
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            sx={{ width: { xs: 40, lg: 60 }, height: { xs: 40, lg: 60 } }}
            alt="Travis Howard"
            src="https://images.pexels.com/photos/307847/pexels-photo-307847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            sx={{ width: { xs: 40, lg: 60 }, height: { xs: 40, lg: 60 } }}
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            sx={{ width: { xs: 40, lg: 60 }, height: { xs: 40, lg: 60 } }}
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            sx={{ width: { xs: 40, lg: 60 }, height: { xs: 40, lg: 60 } }}
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            sx={{ width: { xs: 40, lg: 60 }, height: { xs: 40, lg: 60 } }}
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            sx={{ width: { xs: 40, lg: 60 }, height: { xs: 40, lg: 60 } }}
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={300} sx={{ marginTop: "2rem" }}>
          Latest Photos
        </Typography>
        <ImageList
          cols={3}
          rowHeight={125}
          sx={{ marginRight: "2rem" }}
          gap={5}
        >
          <ImageListItem>
            <Image
              layout="fill"
              src="https://images.pexels.com/photos/301320/pexels-photo-301320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <Image
              layout="fill"
              src="https://images.pexels.com/photos/1065081/pexels-photo-1065081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <Image
              layout="fill"
              src="https://images.pexels.com/photos/2216350/pexels-photo-2216350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <Image
              layout="fill"
              src="https://images.pexels.com/photos/301320/pexels-photo-301320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <Image
              layout="fill"
              src="https://images.pexels.com/photos/1065081/pexels-photo-1065081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <Image
              layout="fill"
              src="https://images.pexels.com/photos/2216350/pexels-photo-2216350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={300} sx={{ marginTop: "2rem" }}>
          Latest Conversation
        </Typography>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            marginRight: "2rem",
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider
            variant="inset"
            component="li"
            sx={{ marginRight: "1rem" }}
          />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider
            variant="inset"
            component="li"
            sx={{ marginRight: "1rem" }}
          />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
