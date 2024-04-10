var express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(port, () => console.log(`server started on ${port}`));
