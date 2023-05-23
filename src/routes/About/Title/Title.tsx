import "./Title.css";

import { Link } from "react-scroll";

function Title() {
  return (
    <div className="title">
      <div className="head">
        <div className="head-text">
          <h1 className="about-title">Rick and Morty</h1>
          <p>
            Rick and Morty is an American animated science-fiction
            comedyfranchise, owned by Warner Bros. Discovery, whose eponymous
            duo consists of Rick Sanchez and Morty Smith. Rick and Morty were
            created by cartoonist Justin Roiland for a 2006 parody film of Back
            to the Future for Channel 101, a short film festival co-founded by
            Dan Harmon. After six years, the sketch was developed into Rick and
            Morty, a half-hour prime time show that was a hit for Adult Swim,
            receiving universal acclaim across all seasons. The popularity of
            Rick and Morty has made it a billion-dollar merchandising and media
            franchise. Alongside the original television series, the characters
            of the show have been featured in a variety of media, including
            spin-offs, comic books, musical releases and video games.
          </p>
          <div className="about-button-wrapper">
            <Link
              to="secondInsideContainer"
              spy={true}
              smooth={true}
              containerId="containerElement"
              className="standart-button read-more"
            >
              Read more
            </Link>
          </div>
        </div>

        <div className="overlay"></div>
      </div>
    </div>
  );
}
export default Title;
