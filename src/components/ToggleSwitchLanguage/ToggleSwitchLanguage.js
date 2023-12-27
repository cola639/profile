import React from "react";
import emoji from "react-easy-emoji";

import "./ToggleSwitchLanguage.scss";

const ToggleSwitchLanguage = () => {
  // 判断当前url是否包含cn
  const isCN = !window.location.href.includes("/EN");

  const switchLanguage = () => {
    console.log("work");
    const currentUrl = window.location.origin;
    console.log("🚀 >> switchLanguage >> currentUrl:", currentUrl);

    if (isCN) {
      // Switch to English
      window.location.href = `${currentUrl}/EN/`;
    } else {
      // Switch to Chinese
      window.location.href = `${currentUrl}/CN/`;
    }
  };

  return (
    <div className="wrap" onClick={switchLanguage} title="中文/English">
      <span className="emoji">{isCN ? emoji("🇨🇳") : emoji("🇺🇸")}</span>
    </div>
  );
};

export default ToggleSwitchLanguage;
