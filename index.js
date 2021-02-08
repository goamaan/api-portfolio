const express = require("express");
const hbs = require("express-handlebars");
const path = require("path");
const homeKeys = require("./data/home");
const aboutKeys = require("./data/about");
const projectKeys = require("./data/projects");
const notFoundKeys = require("./data/404");
const workKeys = require("./data/work");
const contactKeys = require("./data/contact");
const app = express();

app.engine("hbs", hbs({ extname: "hbs" }));
app.set("view engine", "hbs");

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
  { name: "Last Modified: ", content: "" },
  { name: "Content-Length: ", content: "" },
  { name: "Content-Type: ", content: "application/json; charset=utf-8" },
  { name: "Date: ", content: "" },
];

const statusToMessage = {
  200: "OK",
  404: "Not Found",
};

const httpRes = {
  name: "",
  content: "",
  status: true,
};

function headersMiddleware(req, res, next) {
  const date = new Date();
  headers[0].content = `${req.url} HTTP v${req.httpVersion}`;
  headers[2].content = req.hostname;
  headers[3].content = req.headers["user-agent"];
  httpRes.name = `HTTP v${req.httpVersion}: `;
  httpRes.content = `${res.statusCode} ${statusToMessage[res.statusCode]}`;
  httpRes.status = true;
  resheaders[0].content = "Tue, 22 Dec 2020 19:02:38 GMT";
  resheaders[3].content = date.toUTCString();
  next();
}

app.get("/", (req, res) => {
  resheaders[1].content = 3823;
  res.render("code", {
    title: "/home",
    headers,
    status: `status-${res.statusCode}`,
    resheaders,
    data: homeKeys,
    httpRes,
  });
});

app.get("/about", (req, res) => {
  resheaders[1].content = 4523;
  res.render("code", {
    title: "/about",
    headers,
    status: `status-${res.statusCode}`,
    resheaders,
    data: aboutKeys,
    httpRes,
  });
});

app.get("/projects", (req, res) => {
  resheaders[1].content = 5398;
  res.render("code", {
    title: "/projects",
    headers,
    status: `status-${res.statusCode}`,
    resheaders,
    data: projectKeys,
    httpRes,
  });
});

app.get("/work", (req, res) => {
  resheaders[1].content = 4689;
  res.render("code", {
    title: "/work",
    headers,
    status: `status-${res.statusCode}`,
    resheaders,
    data: workKeys,
    httpRes,
  });
});

app.get("/home", (req, res) => {
  res.redirect("/");
});

app.use((req, res, next) => {
  httpRes.content = `404 ${statusToMessage[404]}`;
  httpRes.status = false;
  res.status(404).render("code", {
    title: "/contact",
    headers,
    status: `status-${res.statusCode}`,
    resheaders,
    data: notFoundKeys,
    httpRes,
  });
});

app.get(
  "/.well-known/acme-challenge/qYVZezJUSpMAKA7LncD7puQ7h6-Ow2EP3B9fA_cNaWI",
  () => {
    res.send(
      "qYVZezJUSpMAKA7LncD7puQ7h6-Ow2EP3B9fA_cNaWI.rXNkoEBldKPv9n8SXF_4r8hfXHbwb7pio8qk_F9yGDQ"
    );
  }
);

app.listen(port, () => console.log(`listening on port ${port}`));
