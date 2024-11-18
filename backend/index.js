const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;


app.use("/api", require("./src/api/routes"));

app.get("/", (req, res) => {
  res.send("This app is running");
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});

// db.sync().then((req) => {
//   app.listen(PORT, () => {
//     console.log(`server is running at ${PORT}`);
//   });
// });
