const projectKeys = [
  {
    key: "title",
    string: "Personal Projects",
    isLink: false,
    isArray: false,
    isObject: false,
  },
  {
    key: "pages",
    string: ["/home", "/about", "/work", "/contact"],
    isLink: true,
    isArray: true,
    isObject: false,
  },
  {
    key: "content",
    string: "Some of my favorite personal projects. More on my Github!",
    isLink: false,
    isArray: false,
    isObject: false,
  },
  {
    key: "projects",
    string: [
      {
        name: "Github-Battle",
        description:
          "Web App that displays the most popular Repositories on Github and allows the users to 'Battle' github profiles",
        technology: "React, Redux, and the Github API",
        live: "https://react-git-battle.netlify.app",
        github: "https://github.com/Amaan18/github-battle",
      },
      {
        name: "Search Algorithm Visualizer",
        description:
          "A visualizer for the A* Search Algorithm implemented using a Binary Heap to optimize access times",
        technology: "Javascript (p5.js for visualization)",
        live: "https://astar-visualization.netlify.app",
        github: "https://github.com/Amaan18/A-star-pathfinding",
      },
      {
        name: "Campground Reviews",
        description:
          "Full stack Web App for community based Campground Reviews. CRUD functionality with User Authentication, and use of the Google Maps API",
        technology: "NodeJs, ExpressJs, MongoDB, EJS templating",
        live: "https://whoevenlikescamping.herokuapp.com",
        github: "https://github.com/Amaan18/YelpCamp",
      },
    ],
    isLink: true,
    isArray: true,
    isObject: true,
    isProject: true,
  },
];

module.exports = projectKeys;
