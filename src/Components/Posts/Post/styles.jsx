import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  media: {
    paddingTop: "56.25%",
    height: 0,
    backgroundBlendMode: "darken",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    position: "relative",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
      display: 'flex'
  },
  details: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '15px'
  },
  title: {
      padding: '0 16px'
  },
  cardActions: {
      padding: '0 16px 8px 16px',
      display: 'flex',
      justifyContent: 'space-between'
  }
}));
