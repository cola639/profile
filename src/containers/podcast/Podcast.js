import React, {useContext} from "react";
import "./Podcast.scss";
import {podcastSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Podcast() {
  const {isDark} = useContext(StyleContext);

  if (!podcastSection) console.error("podcastSection object for Podcast section is missing");

  if (!podcastSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="podcast-header">
          <h1 className="podcast-header-title">{podcastSection.title}</h1>
          <p className={isDark ? "dark-mode podcast-header-subtitle" : "subTitle podcast-header-subtitle"}>{podcastSection.subtitle}</p>
        </div>
        <div className="podcast-main-div">
          <AudioPlayer className="podcast" style={{backgroundColor: "#fff"}} src={require("../../assets/mp3/broadcast.m4a")} autoPlay></AudioPlayer>
        </div>
      </div>
    </Fade>
  );
}
