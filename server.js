import path from "node:path";
import express from "express";

const app = express();
const cwd = process.cwd();

app.get("*", (req, res) => {
  if (req.url.endsWith(".css")) res.sendFile(path.resolve(cwd, "./index.css"));
  else if (req.url.endsWith(".js"))
    res.sendFile(path.resolve(cwd, "./index.js"));
  else res.sendFile(path.resolve(cwd, "./index.html"));
});

app.listen(5000, () => {
  console.log("Go to localhost:5000");
});
