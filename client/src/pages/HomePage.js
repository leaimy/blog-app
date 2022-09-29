import React from "react";
import { Container, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";

import Header from "../components/Header";
import PostList from "../components/PostList";
import useStyles from "./styles";
import { showModal } from "../redux/actions";
import CreatePostModal from "../components/CreatePostModal";

function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleOpenCreatePostModal = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Header />
      <PostList />
      <CreatePostModal />
      <Fab
        color="secondary"
        className={classes.fab}
        onClick={handleOpenCreatePostModal}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}

export default HomePage;
