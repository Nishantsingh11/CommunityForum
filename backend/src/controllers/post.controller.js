import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import Post from "../models/post.model.js";
import { User } from "../models/user.model.js";
import { uploadImage } from "../utils/cloudinairy.js";

const createPost = asyncHandler(async (req, res) => {
  try {
    const { title, body, tags } = req.body;
    console.log("body", req.body);
    console.log("files", req.files);
    const createdBy = req.user._id;
    // saprate the tag with the comma 
    const splittags = tags.split(",").map((tag) => tag.trim());
    const localImage = req.files?.img[0].path;
    console.log(localImage);
    const img = await uploadImage(localImage);
    console.log("cludnary url", img);
    if (!title || !body) {
      throw new ApiError(400, "Please fill all the fields");
    }
    const post = await Post.create({ title, body, img, createdBy, tags: splittags });
    console.log(post);

    if (!post) {
      throw new ApiError(400, "Internal error");
    }
    res
      .status(201)
      .json(new ApiResponse(201, "Post created successfully", post));
  } catch (error) {
    console.log(error);
    throw new ApiError(400, error.message);
  }
});
const getPosts = asyncHandler(async (req, res) => {
  // first get the posts from the database
  // if the posts are not found then throw an error
  // if the posts are found then send the posts to the user
  try {
    // get all the posts from the database
    // make the come first the latest post
    const posts = await Post.find().sort({ createdAt: -1 });
    if (posts.length === 0) {
      throw new ApiError(404, "No posts found");
    }
    // also send the user profile who created the post
    for (let i = 0; i < posts.length; i++) {
      const user = await User.findById(posts[i].createdBy).select(
        "-password -coverImage -email -createdAt -updatedAt -__v"
      );
      posts[i] = {
        post: posts[i],
        user
      };
    }

    res.status(200).json(new ApiResponse(200, posts, "Posts found"));
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
    const user = await User.findById(post.createdBy).select(
      "-password -coverImage -email -createdAt -updatedAt -__v"
    );
    const postData = {
      post,
      user
    };
    res.status(200).json(new ApiResponse(200, postData, "Post found"));
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
    res.status(200).json(new ApiResponse(200, posts, "Posts found"));
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
    const { title, body, tags, status } = req.body;
    console.log("req", req.body);
    console.log("tags", tags);
    console.log("status", status);



    const post = await Post.findById(req.params.id);
    if (!post) {
      throw new ApiError(404, "Post not found");
    }
    if (post.createdBy.toString() !== req.user._id.toString()) {
      throw new ApiError(403, "You are not authorized to update this post");
    }

    const splittags = tags.split(",").map((tag) => tag.trim());
    console.log("splittags", splittags);

    post.title = title;
    post.body = body;
    post.tags = splittags;
    post.status = status;
    await post.save();
    res
      .status(200)
      .json(new ApiResponse(200, "Post updated successfully", post));
  } catch (error) {
    console.log(error);

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

const SearchByTitle = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword;
  const posts = await Post.find({ title: { $regex: keyword, $options: "i" } });
  if (!posts) {
    res.status(400).json(new ApiResponse(400, {}, "No posts found"));
  }
  res.status(200).json(new ApiResponse(200, posts, "Posts found"));
});
// search the post by the tag
const SearchByTag = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword;


  const posts = await Post.find({ tags: { $regex: keyword, $options: "i" } });
  if (!posts) {
    return res.status(400).json(new ApiResponse(400, {}, "No posts found"));
  }
  return res.status(200).json(new ApiResponse(200, posts, "Posts found"));
})
const getPopularTags = asyncHandler(async (req, res) => {

  const popularTags = await Post.aggregate([
    { $unwind: "$tags" },  // Deconstructs the tags array field to output a document for each tag
    { $group: { _id: "$tags", count: { $sum: 1 } } },  // Groups by tag and counts occurrences
    { $sort: { count: -1 } },  // Sorts by count in descending order
    { $limit: 10 }  // Limits to top 10 most popular tags (optional)
  ]);
  if (!popularTags) {
    return res.status(400).json(new ApiResponse(400, {}, "No tags found"));
  }

  res.status(200).json(new ApiResponse(200, popularTags, "Popular tags found"));

});

export {
  createPost,
  getPosts,
  getPost,
  getUserPosts,
  updatePost,
  deletePost,
  SearchByTitle,
  SearchByTag,
  getPopularTags
};
