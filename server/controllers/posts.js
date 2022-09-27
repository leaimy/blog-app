import { PostModel } from "../models/PostModel.js";

export const getPosts = async (req, res) => {
  try {
    // res.send("Xin chào");
    const post = new PostModel({
      title: "test",
      content: "test0",
    });
    // res.send(post);
    post.save();
    const posts = await PostModel.find();
    console.log("posts", posts);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createPost = (req, res) => {
  res.send("CREATE SUCCESS");
};
