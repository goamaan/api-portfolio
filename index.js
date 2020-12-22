const express = require("express");
const hbs = require("express-handlebars");
const path = require("path");
const cors = require("cors");
const homeKeys = require("./data/home");
const aboutKeys = require("./data/about");
const projectKeys = require("./data/projects");
const notFoundKeys = require("./data/404");
const app = express();

app.engine("hbs", hbs({ extname: "hbs" }));
app.set("view engine", "hbs");
app.use(cors());
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "/public")));
app.use(headersMiddleware);
const headers = [
  { name: "GET: ", content: "" },
  { name: "Accept: ", content: "application/json" },
  {
    name: "Host: ",
    content: "",
  },
  {
    name: "User-agent: ",
    content: "",
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

function headersMiddleware(req, res, next) {
  const date = new Date();
  headers[0].content = `${req.url} HTTP v${req.httpVersion}`;
  headers[2].content = req.hostname;
  headers[3].content = req.headers["user-agent"];
  resheaders[0].name = `HTTP v${req.httpVersion}: `;
  resheaders[0].content = `${res.statusCode} ${
    statusToMessage[res.statusCode]
  }`;
  resheaders[1].content = "Tue, 22 Dec 2020 19:02:38 GMT";
  resheaders[4].content = date.toUTCString();
  next();
}

app.get("/", (req, res) => {
  res.render("code", {
    title: "/home",
    headers,
    status: `status-${res.statusCode}`,
    resheaders,
    data: homeKeys,
  });
});

app.get("/about", (req, res) => {
  res.render("code", {
    title: "/about",
    headers,
    status: `status-${res.statusCode}`,
    resheaders,
    data: aboutKeys,
  });
});

app.get("/projects", (req, res) => {
  res.render("code", {
    title: "/projects",
    headers,
    status: `status-${res.statusCode}`,
    resheaders,
    data: projectKeys,
  });
});

app.get("/home", (req, res) => {
  res.redirect("/");
});

app.use((req, res, next) => {
  resheaders[0].content = `404 ${statusToMessage[404]}`;
  res.status(404).render("code", {
    title: "/projects",
    headers,
    status: `status-${res.statusCode}`,
    resheaders,
    data: notFoundKeys,
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
