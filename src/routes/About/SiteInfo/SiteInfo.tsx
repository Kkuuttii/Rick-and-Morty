import "./SiteInfo.css";
import aboutSite from "../../../images/aboutSite.png";

function SiteInfo() {
  return (
    <div className="site-info">
      <div className="site-info-text">
        <h2>Thanks for the information provided:</h2>
        <ul>
          <li>
            <a
              href="https://www.thefactsite.com/rick-and-morty-facts/"
              target="blank"
            >
              Facts About Rick And Morty
            </a>
          </li>

          <li>
            <a
              href="https://en.wikipedia.org/wiki/Rick_and_Morty_(franchise)"
              target="blank"
            >
              About franchise Rick And Morty
            </a>
          </li>

          <li>
            <a href="https://rickandmortyapi.com/" target="blank">
              The Rick and Morty API
            </a>
          </li>

          <li>
            <a
              href="https://www.pngegg.com/ru/search?q=%D0%A0%D0%B8%D0%BA+%D0%B8+%D0%9C%D0%BE%D1%80%D1%82%D0%B8"
              target="blank"
            >
              The Rick and Morty PNG images
            </a>
          </li>

          <li>
            <a
              href="https://www.freepnglogos.com/pics/rick-and-morty"
              target="blank"
            >
              The Rick and Morty PNG images too
            </a>
          </li>
        </ul>
      </div>

      <img src={aboutSite} alt="siteInfo" className="site-info-image" />
    </div>
  );
}
export default SiteInfo;
