const mongo = require("mongoose");
const profileSchema = new mongo.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "advisor", "customer"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    hashedPassword: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: () => {
        if (this.role === "customer") {
          return false;
        }
        return true;
      },
    },
  },
  { timestamps: true }
);

const Profile = mongo.model("Profile", profileSchema);
module.exports = Profile;
