import React from "react";
import emoji from "react-easy-emoji";

import "./ToggleSwitchLanguage.scss";

const ToggleSwitchLanguage = () => {
  // 判断当前url是否包含cn
  const isCN = window.location.href.includes("/cn");

  const switchLanguage = () => {
    console.log("work");
    const currentUrl = window.location.origin;
    console.log("🚀 >> switchLanguage >> currentUrl:", currentUrl);
    const path = "/#experience";
    if (isCN) {
      // Switch to English
      window.location.href = `${currentUrl}/en${path}`;
    } else {
      // Switch to Chinese
      window.location.href = `${currentUrl}/cn${path}`;
    }
  };

  return (
    <div
      className="wrap"
      onClick={switchLanguage}
      title={isCN ? "Swith to Engilish" : "切换成中文"}
    >
      <span className="emoji">{isCN ? emoji("🇨🇳") : emoji("🇺🇸")}</span>
    </div>
  );
};

export default ToggleSwitchLanguage;
