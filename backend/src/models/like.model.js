import { Schema, model } from "mongoose";
const likeSchema = new Schema(
  {
    postid: {
      type: Schema.ObjectId,
      ref: "Post"
    },
    commentid: {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    },
    userid: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
      }
    ]
  },
  { timestamps: true }
);
export const Like = model("Like", likeSchema);
