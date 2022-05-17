import React from "react";
import Post from "./Post/post";
import { Grid, CircularProgress } from "@mui/material";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
function Posts({ setCurrentId }) {
  const posts = useSelector((state) => {
    return state.Posts;
  });
  const classes = useStyles();

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post.id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
