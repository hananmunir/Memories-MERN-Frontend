import { makeStyles } from "@mui/styles";
import { deepPurple } from "@mui/material/colors";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 0",
  },
  heading: {
    color: "rgba(0,183,255,1)",
    textDecoration: "none",
    marginLeft: "50px",
  },
  image: {
    marginLeft: "15px",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "300px",
  },
  username: {
    display: "flex",
    alignItems: "center",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "300px",
  },
  purple: {
      color: "#000"
      
  },
}));
