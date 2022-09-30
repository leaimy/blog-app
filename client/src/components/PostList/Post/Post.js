import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import moment from "moment";
import useStyles from "./styles";
import React from "react";
import { useDispatch } from "react-redux";
import { updatePost } from "../../../redux/actions";

function Post({ post }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleOnLikeBtn = React.useCallback(() => {
    dispatch(
      updatePost.updatePostRequest({ ...post, likeCount: post.likeCount + 1 })
    );
  }, [dispatch, post]);

  return (
    <Card>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        title={post.author}
        subheader={moment(post.updatedAt).format("HH:MM MMM DD, YYYY")}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardMedia
        image={post.attachment}
        title="Title"
        className={classes.media}
      />
      <CardContent>
        <Typography variant="h5" color="textPrimary">
          {post.title}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleOnLikeBtn}>
          {post.likeCount === 0 ? (
            <FavoriteBorderIcon />
          ) : (
            <FavoriteIcon color="secondary" />
          )}

          <Typography component="span" color="textSecondary">
            {"  "}
            {post.likeCount} likes
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;
