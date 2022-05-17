import { AppBar, Avatar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { LOGOUT } from "../../constants/actionTypes";
import memories from "../../Images/memories.png";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("memoriesProfile"))
  );

  const logout = () => {
    dispatch({ type: LOGOUT });
    setUser(null);
    navigate("/auth");
  };

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("memoriesProfile")));
  }, []);
  return (
    <AppBar
      style={{ flexDirection: "row" }}
      className={classes.appBar}
      position='static'
      color='inherit'
    >
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to='/'
          className={classes.heading}
          variant='h2'
          align='center'
        >
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt='memories'
          height='60'
          width={60}
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageURL}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography variant='h6' className={classes.username}>
              {user.result.name}
            </Typography>
            <Button variant='contained' onClick={logout} color='secondary'>
              LOGOUT
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to='/auth'
            variant='contained'
            color='primary'
          >
            SIGNIN
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
