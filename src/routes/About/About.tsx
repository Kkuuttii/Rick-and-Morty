import './About.css';
import Button from '../../components/Button/Button';
import FactCard from '../../components/FactCard/FactCard';


function About() {
    // const text = "Rick and Morty has had a raft of celebrity guest stars doing voices on the show over the duration of its run to-date. Just a few notable names include Stephen Colbert, Dana Carvey, Claudia Black, Nathan Fillion, Susan Sarandon, Joel McHale, Rich Fulcher, Christian Slater and Danny Trejo.";
  return (
    <div className="about">
      <div className="head">

        <div className="head-text">
          <h1 className="about-title">Rick and Morty</h1>
            <p>
              Rick and Morty is an American animated science-fiction comedy
              franchise, owned by Warner Bros. Discovery, whose eponymous duo
              consists of Rick Sanchez and Morty Smith. Rick and Morty were created
              by cartoonist Justin Roiland for a 2006 parody film of Back to the
              Future for Channel 101, a short film festival co-founded by Dan
              Harmon. After six years, the sketch was developed into Rick and Morty,
              a half-hour prime time show that was a hit for Adult Swim, receiving
              universal acclaim across all seasons. The popularity of Rick and Morty
              has made it a billion-dollar merchandising and media franchise.
              Alongside the original television series, the characters of the show
              have been featured in a variety of media, including spin-offs, comic
              books, musical releases and video games.
            </p>
            <div className='about-button-wrapper'>
              <Button text='Read more' onClick={()=>console.log('установить якорь')}/>
            </div>
            

        </div>

        <div className="overlay"></div>
          
      </div>

       <div className="fun-facts">
        <h2>Fun facts</h2>
        <div className="fact-cards">
            <FactCard/>
            <FactCard/>
            <FactCard/>
        </div>
      </div>
      
{/*
      <div className="themes">
        <div className="themes-image">themes-image</div>
        <div className="themes-text">
          <h2> Themes </h2>
          <p>
            The formula of the series consists of juxtapositioning two
            conflicting scenarios: an extremely selfish, alcoholic grandfather
            dragging his grandson along for interdimensional adventures,
            intercut with domestic family drama, while addressing the
            insignificance of human existence as compared to the size of the
            universe, with no recognizable divine presence, as described by H.
            P. Lovecraft's philosophy of cosmicism.{" "}
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
            were trying to communicate the message that we need to focus on
            human relationships and not preoccupy our minds with unanswerable
            questions, in order to find a sense of purpose and live a better
            life.{" "}
          </p>
          <p>
            Occasionally, characters will acknowledge an episode's narrative or
            hint at the presence of a fourth wall, suggesting that they are
            aware of the fact that they are characters of a television series.
            Thereunder, Troy Patterson of The New Yorker notes that Rick and
            Morty "supplies an artful answer to the question of what follows
            postmodernism: a decadent regurgitation of all its tropes, all at
            once, leavened by some humanistic wistfulness." Sean Sebastian of
            Junkee says that the show can be both hilarious and deeply
            disturbing at the same time as it excels at the "intersection
            between big ideas, flippancy and wit."
          </p>
        </div>
      </div> */}

      {/* <div className="main-characters">
        <div>
          <h2>Main characters</h2>
        </div>
        <div className="main-characters-cards"> */}
          {/* !!!переделать чтобы сначала шел текст, а потом - картинка */}
          {/* может стоит переделать карточки с помощью span/article/определение */}
          {/* <FactCard/>
          <FactCard/>
          <FactCard/>
        </div>
      </div> */}

      {/* <div className="site-info">
        <div className="links">
          <div className="site-info-text">
            <h2>Thanks for the information provided:</h2>
            <ul>
              <li>
                <a href="https://www.thefactsite.com/rick-and-morty-facts/">
                  Facts About Rick And Morty
                </a>
              </li>
              <li>
                <a href="https://en.wikipedia.org/wiki/Rick_and_Morty_(franchise)">
                  About franchise Rick And Morty
                </a>
              </li>
              <li>
                <a href="https://rickandmortyapi.com/">
                  The Rick and Morty API
                </a>
              </li>
            </ul>
          </div>
          <div className="site-info-image">image</div>
        </div>
        <div className="footer">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.{" "}
        </div>
      </div> */}
    </div>
  );
}
export default About;