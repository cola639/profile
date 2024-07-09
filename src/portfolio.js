// 判断当前url是否包含cn
import {paramToObj} from "./utils";
const {lang} = paramToObj();
const isEn = lang === "en";
// isEn是true 导入portfolio_EN
const language = isEn ? require("./portfolio_EN") : require("./portfolio_CN");
// 读取里面导出的变量
const {
  title,
  others,
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
  others,
  /** ------------------------------------------------- */
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
