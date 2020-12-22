const homeKeys = [
  {
    key: "title",
    string: "Me",
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
    string:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium qui fugit consequuntur, suscipit fuga explicabo dolor iusto nam iste deserunt cupiditate quod",
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
