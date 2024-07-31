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

    const like = await Like.find({ 
      postid, 
      userid: req.user._id
    });
    console.log("like from db ", like);
    if (like?.length) {
      console.log("like", like);
      // remove the likeby and video from the like
      if (like.length) {
        await Like.deleteMany({ postid, userid: req.user._id });
        return res.status(200).json(new ApiResponse(200, {}, "Like removed successfully"));
      }
      // errror like.remove is not a function

      return res
        .status(200)
        .json(new ApiResponse(200, {}, "Like removed successfully"));
    }
    const newLike = new Like({
      postid,
      userid: req.user._id
    });
    console.log("new like",newLike);

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
    const like = await Like.findOne({ commentid, userid:req.user._id });
    if (like) {
      await like.deleteOne();
      return res.status(200).json(new ApiResponse(200,{}, "Like removed successfully"))
    }
    const newLike = new Like({
      commentid,
      userid:req.user._id
    });
    await newLike.save();
    res.status(201).json(new ApiResponse(201,newLike, "Like added successfully"))
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
       userid:req.user._id
       })
    if (likedPosts.length) {
      res.status(201).json(new ApiResponse(201,likedPosts, "Liked posts fetched successfully"))
    }else{

      res.status(200).json(new ApiResponse(200,{}, "No liked posts found"))
    }
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "Internal server error");
  }
});
export { handleLike, handleCommentLike, getLikedPosts };
