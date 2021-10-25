const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

const postsRoute = require("./routes/posts");

// routes
app.use("/api/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("Hello from critique");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
