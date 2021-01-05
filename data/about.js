const aboutKeys = [
  {
    key: "title",
    string: "About Me",
    isLink: false,
    isArray: false,
    isObject: false,
  },
  {
    key: "pages",
    string: ["/home", "/projects", "/work"],
    isLink: true,
    isArray: true,
    isObject: false,
  },
  {
    key: "content",
    string: [
      "Hi, My name is Amaan. I'm a CS Major @ UBC. My interests (right now) lean towards Software Engineering and Full-stack development but I'm still exploring!",
      "I've done frontend and backend development over the last 2 years, primarily using Javascript/TS (NodeJs) with REST (some GraphQL) and ReactJs, and I love learning new technologies",
      "I'm currently trying to learn more about server-side development with GraphQL",
      "Check my projects/work to see what I'm up to!",
    ],
    isLink: false,
    isArray: true,
    isObject: false,
  },
];

module.exports = aboutKeys;
