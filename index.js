const express = require("express");
const hbs = require("express-handlebars");
const path = require("path");
const app = express();

app.engine("hbs", hbs({ extname: "hbs" }));
app.set("view engine", "hbs");

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "/public")));

const headers = [
  { name: "GET: ", content: "" },
  { name: "Accept: ", content: "application/json" },
  {
    name: "Host: ",
    content: "",
  },
  {
    name: "User-agent: ",
    content:
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
  },
];

const resheaders = [
  { name: "", content: "" },
  { name: "Last Modified: ", content: "" },
  { name: "Content-Length: ", content: "" },
  { name: "Content-Type: ", content: "application/json; charset=utf-8" },
  { name: "Date: ", content: "" },
];

const statusToMessage = {
  200: "OK",
  404: "Not Found",
};

app.get("/", (req, res) => {
  headers[0].content = `${req.url} HTTP v${req.httpVersion}`;
  headers[2].content = req.hostname;
  resheaders[0].name = `HTTP v${req.httpVersion}: ${res.statusCode} ${
    statusToMessage[res.statusCode]
  }`;
  console.log(req.headers["content-length"]);
  res.render("home", {
    title: "/home",
    name: "amaan",
    headers,
    status: `status-${res.statusCode}`,
    resheaders,
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
