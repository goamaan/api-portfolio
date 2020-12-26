const notFoundKeys = [
  {
    key: "title",
    string: "Not found",
    isLink: false,
    isArray: false,
    isObject: false,
  },
  {
    key: "pages",
    string: ["/home", "/about", "/projects", "/work", "/contact"],
    isLink: true,
    isArray: true,
    isObject: false,
  },
  {
    key: "content",
    string: "Use the pages above to navigate :D",
    isLink: false,
    isArray: false,
    isObject: false,
  },
];

module.exports = notFoundKeys;
