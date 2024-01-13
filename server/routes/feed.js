const express = require("express");
const {
  create,
  getAllFeedsUserSpefic,
  getAllFeeds,
} = require("../controller/controller");
const { verification } = require("../middlewares/verify");
const router = express.Router();

router.post("/create-feed", verification, create);
router.get("/get-feeds", verification, getAllFeedsUserSpefic);
router.get("/getAll", getAllFeeds);

module.exports = router;
