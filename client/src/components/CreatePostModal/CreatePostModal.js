import { Button, Modal, TextareaAutosize, TextField } from "@material-ui/core";
import React from "react";
import FileBase64 from "react-file-base64";
import { useSelector, useDispatch } from "react-redux";
import { hideModal } from "../../redux/actions";
import { modalState$ } from "../../redux/selectors";
import useStyles from "./styles";

function CreatePostModal() {
  const [data, setData] = React.useState({
    title: "",
    content: "",
    attachment: "",
  });

  const classes = useStyles();
  const { isShow } = useSelector(modalState$);
  const dispatch = useDispatch();

  const handleOnClose = React.useCallback(() => {
    dispatch(hideModal());
  }, [dispatch]);

  const handleOnSubmit = React.useCallback(() => {
    console.log({ data });

    // async function createPost() {
    //   fetch(apiUrl, {
    //     method: 'POST',
    //     data: JSON.stringify(data)
    //   })
    //   .then(res => res.json())
    //   .then(result => {
    //     dispatch({
    //       type: 'CREATE_POST',
    //       payload: result
    //     })
    //   })
    // }

    // createPost()

    dispatch(createPost.createPostRequest(data));
  }, [data, dispatch]);

  const body = (
    <div className={classes.paper} id="simple-modal-title">
      <h2>Create New Post</h2>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          className={classes.title}
          required
          label="Title"
          value={data.title}
          onChange={(e) => {
            setData({ ...data, title: e.target.value });
          }}
        />
        <TextareaAutosize
          className={classes.textarea}
          minRows={10}
          maxRows={15}
          placeholder="Content..."
          value={data.content}
          onChange={(e) => {
            setData({ ...data, content: e.target.value });
          }}
        />
        <FileBase64
          accept="image/*"
          multiple={false}
          type="file"
          value={data.attachment}
          onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
        />
        <div className={classes.footer}>
          <Button
            variant="contained"
            color="secondary"
            component="span"
            fullWidth
            onClick={handleOnSubmit}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <Modal open={isShow} onClose={handleOnClose}>
        {body}
      </Modal>
    </div>
  );
}

export default CreatePostModal;
