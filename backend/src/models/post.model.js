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
    tags:[{
      type: String,
      trim: true
    }],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    status: {
      type: String,
      enum: ["answered", "unanswered"],
      default: "unanswered"
    }
  },
  { timestamps: true }
);

export default model("Post", postSchema);
