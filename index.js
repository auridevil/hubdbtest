const Hubdb = require("hubdb");

var db = Hubdb({
  token: "--",
  username: "auridevil",
  repo: "hubdbtest",
  branch: "db"
});

db.add({ grass: "green" }, (err, res) => {
  console.log("err", err);
  console.log("res", res);
  db.list(function(err, res) {
    console.log("err", err);
    console.log("res", res);
  });
});
