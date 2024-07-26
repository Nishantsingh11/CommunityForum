import { Schema, model } from "mongoose";
// comment schema
const commentSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
      trim: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);
export const Comment = model("Comment", commentSchema);
// post schema 
const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100
    },
    body: {
      type: String,
      required: true,
      trim: true
    },
    img: {
      type: String
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment"
      }
    ]
  },
  { timestamps: true }
);

export default model("Post", postSchema);
