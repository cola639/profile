// 判断当前url是否包含cn
import {paramToObj} from "./utils";

let isZh = false;
const {lang} = paramToObj();

if ((lang === "zh" || window.navigator.language === "zh-CN") && lang !== "en") {
  isZh = true;
}

// isEn是true 导入portfolio_EN
const language = isZh ? require("./portfolio_CN") : require("./portfolio_EN");
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
