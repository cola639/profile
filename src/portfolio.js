// 判断当前url是否包含cn
const isCN = window.location.href.includes("cn");
// isCN是true 导入portfolio_CN
const language = isCN ? require("./portfolio_CN") : require("./portfolio_EN");
// 读取里面导出的变量
const {
  title,
  //--------\\
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
} = language;

export {
  title,
  //--------\\
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
