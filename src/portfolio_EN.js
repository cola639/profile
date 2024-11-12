/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

const title = {
  skills: "Skills",
  workExperiences: "Work Experiences",
  openSource: "Open Source Projects",
  achievements: "Achievements",
  blog: "Blog",
  talk: "Talks",
  contactMe: "Contact Me"
};

const others = {
  contactMe: "Contact Me",
  seeMyResume: "View my Github",
  footer: emoji("👋 Looking forward to hearing from you ❤️")
};

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Gavin",
  title: "Hi everyone, I'm Gavin",
  subTitle: emoji(
    "A passionate Full Stack Software Developer🚀 with experience in building web and mobile applications using JavaScript, Reactjs, Nodejs, Vuejs, and other cool libraries and frameworks."
  ),
  resumeLink: "https://github.com/cola639", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/cola639",
  qqmail: "337507950@qq.com",
  gmail: "xiheg1109@gmail.com",
  npm: "https://www.npmjs.com/~cola639",

  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  linkedin: "",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Tech Stack",
  subTitle: "Full Stack Enthusiast constantly seeking and implementing new technologies in projects",
  skills: [
    emoji("⚡ Developing highly interactive front-end / User Interfaces for web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA stacks"),
    emoji("⚡ Integration of third party services such as Wechat SDK, Alibaba Oss, Map SDK")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
      color: "#E44D26"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
      color: "#1572B6"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
      color: "#CC6699"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
      color: "#F7DF1E"
    },
    {
      skillName: "Vue",
      fontAwesomeClassname: "fab fa-vuejs",
      color: "#4FC08D"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
      color: "#61DAFB"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
      color: "#539E43"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java",
      color: "#F89820"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
      color: "#CB3837"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git",
      color: "#F05032"
    },
    {
      skillName: "mysql",
      fontAwesomeClassname: "fas fa-database",
      color: "#F29111"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
      color: "#2496ED"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  title: "Education",
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Guangdong University of Finance",
      logo: require("./assets/images/schoolLogo.png"),
      subHeader: "Computer Science and Technology - Internet Information and Finance",
      duration: "September 2015 - June 2019",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  title: "Proficiency",
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  title: "Work Experiences",
  experience: [
    {
      role: "Software Engineer",
      company: "Shanghai Bestone Information Technology Co., Ltd.",
      companylogo: require("./assets/images/bestone.jpg"),
      date: "April 2022 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      role: "Frontend Developer",
      company: "Guangzhou ShiTong Technology Co., Ltd.",
      companylogo: require("./assets/images/shitong.png"),
      date: "January 2020 – May 2022",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Major Projects",
  subtitle: "Below are some major projects I have worked on or led",
  projects: [
    {
      image: require("./assets/images/12348.png"),
      projectName: "Guangdong 12348 Smart Screen",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      image: require("./assets/images/lawyer.jpg"),
      projectName: "Zhejiang Legal Aid System",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      image: require("./assets/images/lawyer.jpg"),
      projectName: "Guangdong Legal Aid System",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      image: require("./assets/images/guohai.png"),
      projectName: "Guohai Securities H5 Account Opening",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Open Source Projects",
  subtitle: "With a passion for coding, I love to open source tools and projects to help other developers.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.npmjs.com/package/xlsx-style-fixedver",
      title: "xlsx-style-fixedver NPM Package",
      description: "npm package xlsx-style-fixedver fixes bugs in xlsx-style, supports front-end Excel export, and supports setting row heights."
    },
    {
      url: "https://github.com/cola639/uniapp-miniprogram-qdpz",
      title: "uniapp WeChat Mini Program Component Module",
      description:
        "Based on open-source code from Front End Shop, implemented modifications and fixed errors to ensure proper functionality. Supports poster generation, multiple page components, camera watermarking, and more."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "This is an introduction about myself in English and some tech topics",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Feel free to contact my phone or email.",
  number: "+86-18826078154",
  email_address: "337507950@qq.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  title,
  others,
  //---------\\
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
