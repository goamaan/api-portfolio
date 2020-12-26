const workKeys = [
  {
    key: "title",
    string: "About Me",
    isLink: false,
    isArray: false,
    isObject: false,
  },
  {
    key: "pages",
    string: ["/home", "/about", "/projects", "/contact"],
    isLink: true,
    isArray: true,
    isObject: false,
  },
  {
    key: "content",
    string: [
      "Pathvisor - Developer + Assistant Counsellor at a Student-led Counselling startup. I designed and deployed a Full stack Web App including an interactive dashboard, and handled payments using Razorpay. Built the Frontend with React, Bootstrap, Material-UI and Backend with Google Firebase, Node, and Express",
      "Research Assistant - Researching the effects of technology on dopamine rewards. Currently developing an LTI app for Canvas with Gamification features, using the Canvas-Instructure API and the MERN stack with NextJs",
    ],
    isLink: false,
    isArray: true,
    isObject: false,
  },
];

module.exports = workKeys;
