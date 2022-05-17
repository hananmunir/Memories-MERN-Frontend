import { useEffect, useState } from "react";
import { Container, Grid, Grow } from "@mui/material";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/Posts";
import Posts from '../Posts/posts';
import Form from '../Form/form';
function Home() {
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null);
    useEffect(() => {
      dispatch(getPosts());
    }, [dispatch, currentId]);
  return (
    <Grow in>
      <Container>
        <Grid
          container
          justifyContent='space-between'
          alignItems='stretch'
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

export default Home;
