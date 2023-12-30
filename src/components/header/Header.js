import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import ToggleSwitchLanguage from "../ToggleSwitchLanguage/ToggleSwitchLanguage";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  title
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">{title.skills}</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">{title.workExperiences}</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#projects">{title.openSource}</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">{title.achievements}</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#opensource">{title.blog}</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">{title.talk}</a>
            </li>
          )}
          <li>
            <a href="#contact">{title.contactMe}</a>
          </li>

          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitchLanguage />
            </a>
          </li>

          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
