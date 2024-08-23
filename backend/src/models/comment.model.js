import { Schema, model } from "mongoose";
const commentSchema = new Schema(
  {
    body: {
      type: String,
      required: true
    },
    postid: {
      type: Schema.Types.ObjectId
    },

    userid: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    commentimg: {
      type: String
    }
  },
  { timestamps: true }
);
export const Comment = model("Comment", commentSchema);
