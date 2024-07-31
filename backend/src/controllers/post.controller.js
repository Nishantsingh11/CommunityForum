import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import Post from "../models/post.model.js";

const createPost = asyncHandler(async (req, res) => {
  try {
    const { title, body, img } = req.body;
    const createdBy = req.user;
    if (!title || !body) {
      throw new ApiError(400, "Please fill all the fields");
    }
    const post = await Post.create({ title, body, img, createdBy });
    if (!post) {
      throw new ApiError(400, "Internal error");
    }
    res
      .status(201)
      .json(new ApiResponse(201, "Post created successfully", post));
  } catch (error) {
    throw new ApiError(400, error.message);
  }
});
const getPosts = asyncHandler(async (req, res) => {
  // first get the posts from the database
  // if the posts are not found then throw an error
  // if the posts are found then send the posts to the user
  try {
    const posts = await Post.find();
    if (posts.length === 0) {
      throw new ApiError(404, "No posts found");
    }
    res.status(200).json(new ApiResponse(200, "Posts found", posts));
  } catch (error) {
    throw new ApiError(400, error.message);
  }
});
const getPost = asyncHandler(async (req, res) => {
  // get the id of the post
  // fetch the post from the database using the id
  // if the post is not found then throw an error
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      throw new ApiError(404, "Post not found");
    }
    res.status(200).json(new ApiResponse(200, "Post found", post));
  } catch (error) {
    throw new ApiError(400, error.message);
  }
});
const getUserPosts = asyncHandler(async (req, res) => {
  // get the id of the user
  // fetch the posts based on the id
  // if the posts are not found then throw an error
  try {
    const posts = await Post.find({ createdBy: req.user });
    if (posts.length === 0) {
      throw new ApiError(404, "No posts found");
    }
    res.status(200).json(new ApiResponse(200, "Posts found", posts));
  } catch (error) {
    throw new ApiError(400, error.message);
  }
});

// upate the post
const updatePost = asyncHandler(async (req, res) => {
  // first get the post id
  // check wheather the user is valid for updating the post or not
  // get the updated data from the user
  // update the post with the new data
  // if the post is not updated then throw an error
  try {
    const { title, body, img } = req.body;
    const post = await Post.findById(req.params.id);
    if (!post) {
      throw new ApiError(404, "Post not found");
    }
    if (post.createdBy.toString() !== req.user._id.toString()) {
      throw new ApiError(403, "You are not authorized to update this post");
    }
    post.title = title;
    post.body = body;
    post.img = img;
    await post.save();
    res
      .status(200)
      .json(new ApiResponse(200, "Post updated successfully", post));
  } catch (error) {
    throw new ApiError(400, error.message);
  }
});
// delete the post from the database
const deletePost = asyncHandler(async (req, res) => {
  // get the post id
  // get the post from the database
  // check if the user is authorized to delete the post or not
  // if the user is not authorized then throw an error
  // if the user is authorized then delete the post
  // if the post is not deleted then throw an error
  try {
    const { id } = req.params;
    console.log(req.params);
    await Post.findByIdAndDelete(id);
    res.status(200).json(new ApiResponse(200, "Post deleted successfully"));
  } catch (error) {
    throw new ApiError(400, error.message);
  }
});
export { createPost, getPosts, getPost, getUserPosts, updatePost, deletePost };
