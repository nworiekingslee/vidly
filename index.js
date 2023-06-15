const express = require("express");
const app = express();

const genres = [
  "horror",
  "thiller",
  "kids show",
  "documentary",
  "romantic",
  "comedy",
];

app.get("/api/genres", (req, res) => {
  res.send(genres);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
