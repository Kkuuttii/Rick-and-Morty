import "./Themes.css";
import theme from "../../../images/theme.png";

function Themes() {
  return (
    <div className="themes">
      <img src={theme} alt="factImage" className="themes-image" />

      <div className="themes-text">
        <h2> Themes </h2>
        <p>
          The formula of the series consists of juxtapositioning two conflicting
          scenarios: an extremely selfish, alcoholic grandfather dragging his
          grandson along for interdimensional adventures, intercut with domestic
          family drama, while addressing the insignificance of human existence
          as compared to the size of the universe, with no recognizable divine
          presence, as described by H. P. Lovecraft's philosophy of cosmicism.
        </p>
        <p>
          The characters of the series deal with existential dread and cosmic
          horror, either by asserting the utility of science over magic or by
          choosing a life in ignorant bliss. However none of the characters
          appear able to handle the absurd and chaotic nature of the universe,
          as Jerry gets by through denial while Rick is a "depressed,
          substance-addicted, suicidal mess".
        </p>
        <p>
          Matthew Bulger of The Humanist noted that the creators of the series
          were trying to communicate the message that we need to focus on human
          relationships and not preoccupy our minds with unanswerable questions,
          in order to find a sense of purpose and live a better life.
        </p>
        <p>
          Occasionally, characters will acknowledge an episode's narrative or
          hint at the presence of a fourth wall, suggesting that they are aware
          of the fact that they are characters of a television series.
          Thereunder, Troy Patterson of The New Yorker notes that Rick and Morty
          "supplies an artful answer to the question of what follows
          postmodernism: a decadent regurgitation of all its tropes, all at
          once, leavened by some humanistic wistfulness." Sean Sebastian of
          Junkee says that the show can be both hilarious and deeply disturbing
          at the same time as it excels at the "intersection between big ideas,
          flippancy and wit."
        </p>
      </div>
    </div>
  );
}
export default Themes;
