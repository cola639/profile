import React, {useEffect} from "react";
import "./App.scss";
import Main from "./containers/Main";
import {paramToObj} from "./utils";

const App = () => {
  useEffect(() => {
    let isZh = false;
    const {lang} = paramToObj();

    if ((lang === "zh" || window.navigator.language === "zh-CN") && lang !== "en") {
      isZh = true;
    }
    document.title = isZh ? "个人简介" : "Developer Portfolio";
    return () => {};
  }, []);

  return (
    <div>
      <Main />
    </div>
  );
};

export default App;
