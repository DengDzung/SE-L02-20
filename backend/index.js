const express = require("express");
const path = require('path')
const app = express();
const PORT = process.env.PORT || 5050;
const db = require('./src/config/database')


app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, '/src/api/uploads')));
app.use(express.urlencoded({ extended: true }));
app.use("/api", require("./src/api/routes"));
app.get("*", (req, res) => {
  res.send("This app is running");
});

// app.listen(PORT, () => {
//   console.log(`server is running at ${PORT}`);
// });

db.sync({ alter:true }).then((req) => {
  app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
  });
});
