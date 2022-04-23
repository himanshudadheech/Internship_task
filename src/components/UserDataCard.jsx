import React, { Component } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default class UserData extends Component {
  render() {
    let { id, F_Name, L_Name, User_Email, avatar } = this.props;
    return (
      <>
        <div className="container d-flex justify-content-center p-2">
          <Card sx={{ display: "flex" }}>
            <Box m={2} p={2} sx={{ display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                sx={{ flex: "1 0 auto" }}
                image={avatar}
                alt={F_Name}
              />
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="subtitle">
                  User Id: {id}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Name: {F_Name} {L_Name}
                </Typography>
                <Typography
                  component="div"
                  color="text.secondary"
                  variant="subtitle"
                >
                  Email: {User_Email}
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
          </Card>
        </div>
      </>
    );
  }
}
