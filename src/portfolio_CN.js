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
  seeMyResume: "查看我的Github",
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
    "一位充满热情的全栈软件开发者🚀，具备使用 JavaScript、TypeScript、React、Vue、Node.js、Java、Spring Boot、MySQL、PostgreSQL、Docker、AWS 以及 CI/CD 工具构建 Web 与移动应用的经验。"
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
  title: "技术栈",
  subTitle: "全栈技术爱好者，持续探索新技术并将其落地到实际项目中",
  skills: [
    emoji("⚡ 为企业网页和移动应用开发高度交互式的前端/用户界面"),
    emoji("⚡ 在常规和单页应用（SPA）技术栈中开发渐进式网页应用（PWA）"),
    emoji("⚡ 集成第三方服务，如 Wechat SDK、Alibaba Oss、Map SDK。")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // Frontend
    {
      skillName: "Html5",
      fontAwesomeClassname: "fab fa-html5",
      color: "#E44D26"
    },
    {
      skillName: "Css3",
      fontAwesomeClassname: "fab fa-css3-alt",
      color: "#1572B6"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass",
      color: "#CC6699"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
      color: "#F7DF1E"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code",
      color: "#3178C6"
    },
    {
      skillName: "Vue",
      fontAwesomeClassname: "fab fa-vuejs",
      color: "#4FC08D"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react",
      color: "#61DAFB"
    },
    // Backend
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node",
      color: "#539E43"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java",
      color: "#F89820"
    },
    {
      skillName: "SpringBoot",
      fontAwesomeClassname: "fas fa-seedling",
      color: "#6DB33F"
    },
    // Data
    {
      skillName: "MySql",
      fontAwesomeClassname: "fas fa-database",
      color: "#F29111"
    },
    {
      skillName: "PgSql",
      fontAwesomeClassname: "fas fa-database",
      color: "#336791"
    },
    // DevOps & Tooling
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker",
      color: "#2496ED"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws",
      color: "#FF9900"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins",
      color: "#D24939"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git",
      color: "#F05032"
    },
    {
      skillName: "Npm",
      fontAwesomeClassname: "fab fa-npm",
      color: "#CB3837"
    }
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
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
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
      role: "全栈开发工程师",
      company: "汇丰科技中国（HSBC Technology China）",
      companylogo: require("./assets/images/hsbc.png"),
      date: "2025年4月 – 至今",
      desc: "负责企业级应用的全栈开发与交付，推进系统稳定性、可维护性与协作效率持续提升。",
      descBullets: ["搭建并优化团队开发与发布流程，提高交付质量", "参与核心业务模块设计与实现，保障功能可扩展与可追踪"]
    },
    {
      role: "全栈开发工程师",
      company: "上海贝斯通信息技术有限公司",
      companylogo: require("./assets/images/bestone.jpg"),
      date: "2022年4月 – 2024年12月",
      desc: "参与多行业业务系统建设，覆盖需求分析、前后端开发、测试联调与上线支持。",
      descBullets: ["主导核心功能模块开发并推进跨团队协作", "持续优化系统性能与用户体验，提升业务处理效率"]
    },
    {
      role: "前端开发工程师",
      company: "广州世通信息科技有限公司",
      companylogo: require("./assets/images/shitong.png"),
      date: "2020年1月 – 2022年3月",
      desc: "负责 Web 端前端架构与页面开发，推动界面交互优化并提升整体可用性。"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some major projects you have worked on

const bigProjects = {
  title: "精选项目",
  subtitle: "以下是我在金融科技、法律科技与企业内部平台领域交付的代表性项目。",
  projects: [
    {
      image: require("./assets/images/hsbc-project.png"),
      projectName: "汇丰团队 CI/CD 平台建设",
      projectDesc: "设计并落地团队级 CI/CD 平台，统一流水线规范、基于角色的访问控制（RBAC）与容器化部署流程，显著提升发布稳定性。"
    },
    {
      image: require("./assets/images/hsbc-project.png"),
      projectName: "汇丰配置业务管理工具",
      projectDesc: "开发面向全球业务团队的内部配置管理工具，支持受控变更、权限化操作与可审计的历史记录。"
    },
    {
      image: require("./assets/images/lawyer.jpg"),
      projectName: "广东法律援助平台",
      projectDesc: "建设法律援助平台，支持线上案件受理、律师分配与服务进度跟踪，提升公共法律服务可达性与办理效率。"
    },
    {
      image: require("./assets/images/guohai.png"),
      projectName: "国海证券数字化开户系统",
      projectDesc: "交付证券开户系统，构建标准化开户流程、数据校验与合规管控机制，提升开户效率与过程可控性。"
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
  title: "开源项目",
  subtitle: "怀着对代码的热爱，我喜欢代码并开源一些工具性项目帮助其它开发者。",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.npmjs.com/package/xlsx-style-fixedver",
      title: "xlsx-style-fixedver NPM Package",
      description: "npm package xlsx-style-fixedver 修复xlsx-style存在bug 支持前端导出Excel 支持写入每行高度"
    },
    {
      url: "https://github.com/cola639/uniapp-miniprogram-qdpz",
      title: "uniapp 微信小程序组件模块",
      description: "基于前端铺子开源代码 实现部分更改 并修正不能正常运行的错误 支持海报生成 多个页面组件 照相机水印等功能。"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
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
  title: emoji("广播 🎙️"),
  subtitle: "这是段关于我自己的英语介绍 和对技术的话题",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("联系我 ☎️"),
  subtitle: "如果符合您的企业要求，欢迎电话和邮箱联系 ~ ",
  number: "+86-18826078154 || +1-8722587974",
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
