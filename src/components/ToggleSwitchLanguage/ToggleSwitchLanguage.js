import React from "react";
import emoji from "react-easy-emoji";
import {paramToObj} from "../../utils";
import "./ToggleSwitchLanguage.scss";

const ToggleSwitchLanguage = () => {
  const {lang} = paramToObj();
  const isZh = lang === "zh";

  const switchLanguage = () => {
    const currentUrl = window.location.origin;
    console.log("🚀 >> switchLanguage >> currentUrl:", currentUrl);

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
