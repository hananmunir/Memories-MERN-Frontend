import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  paper: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  avatar: {
      margin : '10px',
      backgroundColor : '#f1f1f1'
  },
  form: {
      width: "100%",
      marginTop: '20px'
  },
  submit: {
      margin: '20px 0 '
  }
}));
