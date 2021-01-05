const contactKeys = [
  {
    key: "title",
    string: "Send me a message",
    isLink: false,
    isArray: false,
    isObject: false,
  },
  {
    key: "pages",
    string: ["/home", "/about", "/projects", "/work"],
    isLink: true,
    isArray: true,
    isObject: false,
  },
  {
    key: "content",
    string: ["Name", "Email", "Description"],
    isLink: false,
    isArray: true,
    isObject: false,
  },
];

module.exports = contactKeys;
