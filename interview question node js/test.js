const express = require("express");
const app = express();
const route = express.Router();

app.listen(3000, (err) => {
  if (err) {
  } else {
  }
});

app.use(cookieParser);
app.use(route);

app.use((error, req, res, next) => {});

route.get("user/:id", (req, res, next) => {
  return res.send({ name: "amit", userId: 2 });
});

route.post("user", (req, res, next) => {});
