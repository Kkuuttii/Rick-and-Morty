import "./About.css";
import Title from "./Title/Title";
import Facts from "./Facts/Facts";
import Themes from "./Themes/Themes";
import MainCharacters from "./MainCharacters/MainCharacters";
import SiteInfo from "./SiteInfo/SiteInfo";
import Footer from "./Footer/Footer";
import { Element } from "react-scroll";

function About() {
  return (
    <div className="about">
      <Element name="about" className="element" id="containerElement">
        <Element name="firstInsideContainer" className="title">
          <Title />
        </Element>

        <Element name="secondInsideContainer">
          <Facts />
        </Element>

        <Themes />
        <MainCharacters />
        <SiteInfo />
        <Footer />
      </Element>
    </div>
  );
}
export default About;
