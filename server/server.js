const express = require("express");
const cors = require("cors");
const Db = require("./config/db");
const userRouter = require("./routes/user");
const feedRouter = require("./routes/feed");
require("dotenv").config();
const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use("/auth", userRouter);
app.use("/feed", feedRouter);

Db(process.env.DB)
  .then(() =>
    app.listen(port, () =>
      console.log(`server is running at http://localhost:${port}`)
    )
  )
  .catch((err) => console.log(err));
