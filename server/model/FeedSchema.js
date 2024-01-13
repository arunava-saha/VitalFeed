const mongo = require("mongoose");
const feedSchema = new mongo.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["yoga", "medical", "exercise", "other"],
    },
    advisor: {
      type: mongo.Schema.Types.ObjectId,
      ref: "Profile",
      required: true,
    },
  },
  { timestamps: true }
);

const Feed = mongo.model("Feed", feedSchema);
module.exports = Feed;
