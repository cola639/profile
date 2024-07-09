import React, {useEffect} from "react";
import "./App.scss";
import Main from "./containers/Main";
import {paramToObj} from "./utils";

const App = () => {
  useEffect(() => {
    const {lang} = paramToObj();
    const isZh = lang === "zh";
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
