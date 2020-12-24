const homeKeys = [
  {
    key: "title",
    string: "amaan18.github.io",
    isLink: false,
    isArray: false,
    isObject: false,
  },
  {
    key: "pages",
    string: ["/about", "/projects", "/interests", "/work", "/contact"],
    isLink: true,
    isArray: true,
    isObject: false,
  },
  {
    key: "content",
    string: "Portfolio API - Use the pages above to navigate!",
    isLink: false,
    isArray: false,
    isObject: false,
  },
  {
    key: "links",
    string: [
      {
        network: "Github",
        link: "https://github.com/amaan18",
      },
      {
        network: "LinkedIn",
        link: "https://linkedin.com/in/amaangokak18",
      },
      {
        network: "Email",
        link: "mailto:amaangokak18@gmail.com",
      },
    ],
    isLink: true,
    isArray: true,
    isObject: true,
  },
];

module.exports = homeKeys;
