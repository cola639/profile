import React, {useEffect} from "react";
import "./App.scss";
import Main from "./containers/Main";

const App = () => {
  useEffect(() => {
    const isCN = !window.location.href.includes("/EN");
    document.title = isCN ? "个人简介" : "Developer Portfolio";
    return () => {};
  }, []);

  return (
    <div>
      <Main />
    </div>
  );
};

export default App;
