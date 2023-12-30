/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

const title = {
  skills: "技能",
  workExperiences: "工作经历",
  openSource: "项目经验",
  achievements: "成就",
  blog: "开源项目",
  talk: "讲座",
  contactMe: "联系方式"
};

const others = {
  contactMe: "联系方式",
  seeMyResume: "查看BOSS简历",
  footer: emoji("👋 期待您的联系 ❤️")
};

// -------------------------------原来定义-------------------------------------------------------- \\
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
  username: "锡和",
  title: "Hi 大家好，我是锡和",
  subTitle: emoji(
    "一位充满热情的全栈软件开发者🚀，拥有使用JavaScript、Reactjs、Nodejs、Vuejs以及一些其他酷炫的库和框架构建网页和移动应用的经验。"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
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
  title: "技术栈",
  subTitle: "全栈爱好者 对新技术不断追求 并实践到新项目中",
  skills: [
    emoji("⚡ 为企业网页和移动应用开发高度交互式的前端/用户界面"),
    emoji("⚡ 在常规和单页应用（SPA）技术栈中开发渐进式网页应用（PWA）"),
    emoji("⚡ 集成第三方服务，如 Wechat SDK、Alibaba Oss、Map SDK。")
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
      skillName: "mysql",
      fontAwesomeClassname: "fas fa-database",
      color: "#F29111"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
      color: "#2496ED"
    }

    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  title: "教育经历",
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "广东金融学院",
      logo: require("./assets/images/schoolLogo.png"),
      subHeader: "计算机科学与技术-互联网信息与金融专业",
      duration: "2015/09 - 2019/06",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  title: "熟练度",
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "前端", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "后端",
      progressPercentage: "60%"
    },
    {
      Stack: "编码",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  title: "工作经历",
  experience: [
    {
      role: "软件工程师",
      company: "上海百事通信息技术股份有限公司",
      companylogo: require("./assets/images/bestone.jpg"),
      date: "2022/4 – 现在",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "前端开发工程师",
      company: "广州视通科技股份有限公司",
      companylogo: require("./assets/images/shitong.png"),
      date: "2020/6 – 2022/3",
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
  title: "大项目经验",
  subtitle: "下面是我参与或者主导过的大型项目",
  projects: [
    {
      image: require("./assets/images/12348.png"),
      projectName: "广东12348智慧大屏",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/lawyer.jpg"),
      projectName: "浙江法律援助系统",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/lawyer.jpg"),
      projectName: "广东法律援助系统",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      // ],
    },
    {
      image: require("./assets/images/guohai.png"),
      projectName: "国海证卷H5开户",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      // ],
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
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
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
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
  title: "开源项目",
  subtitle: "怀着对代码的热爱，我喜欢代码并开源一些工具性项目帮助其它开发者。",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.npmjs.com/package/xlsx-style-fixedver",
      title: "xlsx-style-fixedver NPM Package",
      description:
        "npm package xlsx-style-fixedver 修复xlsx-style存在bug 支持前端导出Excel 支持写入每行高度"
    },
    {
      url: "https://github.com/cola639/uniapp-miniprogram-qdpz",
      title: "uniapp 微信小程序组件模块",
      description:
        "基于前端铺子开源代码 实现部分更改 并修正不能正常运行的错误 支持海报生成 多个页面组件 照相机水印等功能。"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

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
  title: emoji("广播 🎙️"),
  subtitle: "这是段关于我自己的英语介绍 和对技术的话题",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("联系我 ☎️"),
  subtitle: "如果符合您的企业要求，欢迎电话和邮箱联系 ~ ",
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
  // -------- \\
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
