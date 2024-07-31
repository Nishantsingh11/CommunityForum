import { Schema, model } from "mongoose";
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
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

export default model("Post", postSchema);
