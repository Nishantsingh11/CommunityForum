import { Comment } from "../models/comment.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { uploadImage } from "../utils/cloudinairy.js"
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

    const commentImgLocalPath = req.files.commentimg[0].path
    const commentimg = await uploadImage(commentImgLocalPath);


    const { postid } = req.params;

    const newComment = new Comment({
      body,
      postid,
      userid: req.user._id,
      commentimg
    });
    await newComment.save();
    return res.send(
      new ApiResponse(200, newComment, "Comment added successfully")
    );
  } catch (error) {
    throw new ApiError(500, "Internal server error");
  }
});
const getComments = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await Comment.find({ postid: id });

    if (!comments.length) {
      return res.send(new ApiResponse(200, [], "No comments found"));
    }

    // Fetch user data for each comment and attach it to the comment object
    const commentsWithUserData = await Promise.all(
      comments.map(async comment => {
        const user = await User.findById(comment.userid).select(
          "-coverImage -createdAt -email -password -updatedAt"
        );
        return {
          ...comment._doc, // Spread the comment data (using _doc to get the raw data)
          user: user || {} // Attach the user data, or an empty object if user not found
        };
      })
    );

    return res.send(
      new ApiResponse(200, commentsWithUserData, "Comments found")
    );
  } catch (error) {
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
    const comment = await Comment.findById(commentid);
    if (!comment) {
      throw new ApiError(404, "Comment not found");
    }
    if (comment.userid.toString() !== req.user._id.toString()) {
      throw new ApiError(403, "You are not authorized to delete this comment");
    }
    await Comment.findByIdAndDelete(commentid);
    return res.send(
      new ApiResponse(200, comment, "Comment deleted successfully")
    );
  } catch (error) {
    throw new ApiError(500, "Internal server error");
  }
});
export { addComment, getComments, deleteComment };
