import path from "node:path";
import express from "express";

const app = express();
const cwd = process.cwd();

app.get("*", (req, res) => {
  if (req.url.endsWith(".css")) res.sendFile(path.resolve(cwd, "./index.css"));
  else if (req.url.endsWith(".js"))
    res.sendFile(path.resolve(cwd, "./index.js"));
  else if (req.url === "/templates/HomePage.html") {
    res.sendFile(path.resolve(cwd, "./templates/HomePage.html"));
  } else if (req.url === "/templates/AboutPage.html") {
    res.sendFile(path.resolve(cwd, "./templates/AboutPage.html"));
  } else if (req.url === "/templates/SettingPage.html") {
    res.sendFile(path.resolve(cwd, "./templates/SettingPage.html"));
  } else {
    res.sendFile(path.resolve(cwd, "./index.html"));
  }
});

app.listen(5000, () => {
  console.log("Go to localhost:5000");
});
