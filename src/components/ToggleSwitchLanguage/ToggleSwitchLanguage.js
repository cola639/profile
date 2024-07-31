import React from "react";
import emoji from "react-easy-emoji";
import {paramToObj} from "../../utils";
import "./ToggleSwitchLanguage.scss";

const ToggleSwitchLanguage = () => {
  let isZh = false;
  const {lang} = paramToObj();

  if ((lang === "zh" || window.navigator.language === "zh-CN") && lang !== "en") {
    isZh = true;
  }

  const switchLanguage = () => {
    const currentUrl = window.location.origin;

    if (isZh) {
      // Switch to English
      window.location.href = `${currentUrl}?lang=en`;
    } else {
      // Switch to Chinese
      window.location.href = `${currentUrl}?lang=zh`;
    }
  };

  return (
    <div className="wrap" onClick={switchLanguage} title="中文/English">
      <span className="emoji">{isZh ? emoji("🇨🇳") : emoji("🇺🇸")}</span>
    </div>
  );
};

export default ToggleSwitchLanguage;
