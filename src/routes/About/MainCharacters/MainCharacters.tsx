import "./MainCharacters.css";
import FactCard from "../../../components/FactCard/FactCard";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import MortimerSmith from "../../../images/MortimerSmith.png";
import RickSanchez from "../../../images/RickSanchez.png";
import SummerSmith from "../../../images/SummerSmith.png";
import BethSmith from "../../../images/BethSmith.png";
import JerrySmith from "../../../images/JerrySmith.png";

function MainCharacters() {
  const navigate = useNavigate();
  const mainCharactersNames = [
    "Mortimer Smith",
    "Rick Sanchez",
    "Summer Smith",
    "Beth Smith",
    "Jerry Smith",
  ];
  const mainCharactersImages = [
    MortimerSmith,
    RickSanchez,
    SummerSmith,
    BethSmith,
    JerrySmith,
  ];

  let mainCharactersCards = mainCharactersNames.map((item, index) => {
    return (
      <FactCard text={item} image={mainCharactersImages[index]} type="revers" />
    );
  });

  return (
    <div className="main-characters">
      <h2>Main characters</h2>

      <div className="main-characters-cards">{mainCharactersCards}</div>

      <Button
        text="other characters"
        onClick={() => navigate("/library")}
        className="other-characters-button"
      />
    </div>
  );
}
export default MainCharacters;
