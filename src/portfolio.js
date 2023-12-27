// 判断当前url是否包含cn
const isEn = window.location.href.includes("EN");
// isEn是true 导入portfolio_EN
const language = isEn ? require("./portfolio_EN") : require("./portfolio_CN");
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
