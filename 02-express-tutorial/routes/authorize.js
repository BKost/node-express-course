function authorize(req, res, next) {
  // const { user } = req.query;
  // if (user === "john") {
  //   req.user = { name: "john", id: 3 };
  //   next();
  // } else {
  //   res.status(404).send("No user found");
  // }
  // console.log("authorize");
  req.modified = false;
  console.log(req.modified);
  next();
}

function modify(req, res, next) {
  req.modified = true;
  console.log(req.modified);
  next();
}

module.exports = { authorize, modify };
