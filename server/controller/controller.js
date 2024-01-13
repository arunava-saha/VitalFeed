const Feed = require("../model/FeedSchema");
const Profile = require("../model/profileSchema");

exports.create = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Profile.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        Error: "User Not Found",
      });
    }
    if (user.role === "customer") {
      return res.status(404).json({
        success: false,
        Error: "User is Not a Admin or Advisor",
      });
    }
    const feed = new Feed({ ...req.body, advisor: user });
    const saveFeed = await feed.save();
    return res
      .status(201)
      .json({ saveFeed, message: "New Feed created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      Error: "Error in Creating the feed",
      error,
    });
  }
};
exports.getAllFeedsUserSpefic = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Profile.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        Error: "User Not Found",
      });
    }
    if (user.role === "customer") {
      return res.status(404).json({
        success: false,
        Error: "User is Not a Admin or Advisor",
      });
    }
    const feed = await Feed.find({ advisor: user }).sort({ createAt: -1 });
    return res.status(200).json({ feed });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      Error: "Error in getting the User specific feeds",
      error,
    });
  }
};
exports.getAllFeeds = async (req, res) => {
  try {
    const feed = await Feed.find({});
    for (let i = 0; i < feed.length; i++) {
      const user = await Profile.findById(feed[i].advisor);
      feed[i].aName = user.name;
    }
    console.log(feed[1].aName);
    return res.status(200).json({ feed });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      Error: "Error in getting the Feeds",
      error,
    });
  }
};
exports.updateAnItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Feed.findByIdAndUpdate({ id });
    return res.status(200).json({ item, message: "Item updated successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      Error: "Error in Registering the profile",
      error,
    });
  }
};
exports.deleteAnItem = async (req, res) => {
  try {
    const { id } = req.params;
    await Feed.findByIdAndDelete({ id });
    return res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      Error: "Error in Registering the profile",
      error,
    });
  }
};
