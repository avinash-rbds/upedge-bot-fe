import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import GrainIcon from "@material-ui/icons/Grain";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Person";
import BrokenImageIcon from "@material-ui/icons/BrokenImage";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#fff",
    paddingBottom: 0,
  },
  item: {
    cursor: "pointer",
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function DashboardMain() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          color="inherit"
          href="/dashboard"
          onClick={() => {
            history.push("/dashboard");
          }}
          className={classes.link}
        >
          <HomeIcon className={classes.icon} />
          Dashboard
        </Link>
        <Typography color="textPrimary" className={classes.link}>
          <GrainIcon className={classes.icon} />
          Users
        </Typography>
      </Breadcrumbs>

      <br />
      <UsersList />
    </>
  );
}

function UsersList() {
  const classes = useStyles();
  const data = [
    { username: "John", score: 100, id: 1 },
    { username: "David", score: 10, id: 2 },
    { username: "Koushik", score: 100, id: 3 },
    { username: "Avinash", score: 10, id: 4 },
  ];
  const history = useHistory();
  const { path } = useRouteMatch();

  return (
    <List className={classes.root}>
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          return (
            <>
              <Link
                href={`${path}/users/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <ListItem className={classes.item} key={index}>
                  <ListItemAvatar>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.username}
                    secondary={`Score: ${item.score}`}
                  />
                </ListItem>
                {index < data.length - 1 && <Divider />}
              </Link>
            </>
          );
        })}

      {data && data.length === 0 && (
        <>
          <ListItem className={classes.item}>
            <ListItemAvatar>
              <Avatar>
                <BrokenImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="No users found" />
          </ListItem>
        </>
      )}
    </List>
  );
}
