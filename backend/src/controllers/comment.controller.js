import { Comment } from "../models/comment.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const addComment = asyncHandler(async (req, res) => {
  // get the body of commnet
  // get the post id
  // get the user
  // create a new comment
  // save the comment
  // send the response
  try {
    const { body } = req.body;
    if (!body) {
      throw new ApiError(400, "Comment body is required");
    }
    const { postid } = req.params;
    const { userid } = req.user;
    const newComment = new Comment({
      body,
      postid,
      userid
    });
    await newComment.save();
    return res.send(
      new ApiResponse(200, newComment, "Comment added successfully")
    );
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "Internal server error");
  }
});
// get comments by post id
const getComments = asyncHandler(async (req, res) => {
  // get the post id
  // get the comments by post id
  // send the response
  // if no comments found then send the response with empty array
  // if comments found then send the response with comments
  // if error then send the response with error
  try {
    const { id } = req.params;
    const comments = await Comment.find({ postid: id });
    if (!comments.length) {
      return res.send(new ApiResponse(200, [], "No comments found"));
    }
    return res.send(new ApiResponse(200, comments, "Comments found"));
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "Internal server error");
  }
});
// delete comment by comment id
const deleteComment = asyncHandler(async (req, res) => {
  // get the comment id
  // find the comment by comment id in db
  // if comment not found then send response with error
  // if comment found then check if the user is the owner of the comment
  // if yes then delete the comment
  // if no then send response with error
  // if error then send response with error
  try {
    const { commentid } = req.params;
    const { userid } = req.user;
    await Comment.findByIdAndDelete(commentid);
    res.send(new ApiResponse(200, "commnet deleted successfully"));
  } catch (error) {
    throw new ApiError(500, "Internal server error");
  }
});
export { addComment, getComments, deleteComment };
