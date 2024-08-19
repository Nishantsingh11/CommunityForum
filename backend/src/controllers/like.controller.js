import { Like } from "../models/like.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const handleLike = asyncHandler(async (req, res) => {
  // first check if the user has already liked the post
  // if yes, then unlike the post
  // if no, then like the post
  try {
    const { postid } = req.params;

    const existingLike = await Like.find({
      postid,
      userid: req.user._id
    });
    // console.log("like from db ", existingLike);
    if (existingLike.length) {
      await Like.updateOne({ postid }, { $pull: { userid: req.user._id } });
      // remove the likeby and video from the like
      return res
        .status(200)
        .json(new ApiResponse(200, {}, "Like removed successfully"));
    }
    const IsPost = await Like.findOne({ postid });
    if (IsPost) {
      // add the user to the like
      // push the new user in the like
      // save the like
      const newLike = await Like.findOneAndUpdate(
        { postid },
        { $push: { userid: req.user._id } },
        { new: true }
      );
      return res.send(new ApiResponse(200, newLike, "Post liked"));
    }
    const newLike = new Like({
      postid,
      userid: req.user
    });
    // console.log("new like", newLike);

    await newLike.save();
    return res.send(new ApiResponse(200, {}, "Post liked"));
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "Internal server error");
  }
});
const handleCommentLike = asyncHandler(async (req, res) => {
  // first let the comment id
  // get the user id
  // check if the user has already liked the comment
  // if yes then remove the like from the comment
  // if no, then add new like to comment
  try {
    const { commentid } = req.params;
    const { userid } = req.user;
    const like = await Like.findOne({ commentid, userid: req.user._id });
    if (like) {
      await like.deleteOne();
      return res
        .status(200)
        .json(new ApiResponse(200, {}, "Like removed successfully"));
    }
    const newLike = new Like({
      commentid,
      userid: req.user._id
    });
    await newLike.save();
    res
      .status(201)
      .json(new ApiResponse(201, newLike, "Like added successfully"));
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "Internal server error");
  }
});

// get the commnetLike using the comment id
const getCommentLike = asyncHandler(async (req, res) => {
  try {
    const { commentid } = req.params;
    console.log("commedId", commentid);
    const comment = await Like.find({ commentid: commentid });
    if (!comment) {
      return res
        .status(200)
        .json(new ApiResponse(200, {}, "No liked comments found"));
    }
    res
      .status(201)
      .json(
        new ApiResponse(201, comment, "Liked comments fetched successfully")
      );
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "Internal server error");
  }
});

// get all liked post
const getLikedPosts = asyncHandler(async (req, res) => {
  // get the user id
  // find all the post liked by the userid
  // return the post liked by the user
  try {
    const likedPosts = await Like.find({
      userid: req.user._id
    });
    if (likedPosts.length) {
      res
        .status(201)
        .json(
          new ApiResponse(201, likedPosts, "Liked posts fetched successfully")
        );
    } else {
      res.status(200).json(new ApiResponse(200, {}, "No liked posts found"));
    }
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "Internal server error");
  }
});
// get most liked posts 

const getLikeOnPost = asyncHandler(async (req, res) => {
  // first find posts where the post id provided id
  // we have to use aggregate to get the count of likes on the post and to get the user who liked the post
  const { postid } = req.params;
  const likes = await Like.find({ postid: postid });
  // console.log("likes", likes);

  if (likes.length) {
    const IsLikedUser = likes[0].userid.some(id => {
      return id.equals(req.user._id);
    });

    const UserLen = likes[0].userid.length;
    const resp = {
      likes,
      UserLen,
      IsLikedUser
    };

    return res
      .status(200)
      .json(new ApiResponse(200, resp, "Likes on post fetched successfully"));
  }
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "No likes found on post"));
});
export {
  handleLike,
  handleCommentLike,
  getLikedPosts,
  getLikeOnPost,
  getCommentLike
};
