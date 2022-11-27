import './FactCard.css';

function FactCard() {
    const text = 'Rick and Morty has had a raft of celebrity guest stars doing voices on the show over the duration of its run to-date. Just a few notable names include Stephen Colbert, Dana Carvey, Claudia Black, Nathan Fillion, Susan Sarandon, Joel McHale, Rich Fulcher, Christian Slater and Danny Trejo.';
    
    return (
      <div className="fact-card">

          <div className="randomImage"> 
            image 
          </div>

          <div>
              {" "}
              <p> {text} </p>{" "}
          </div>

      </div>
    )
}
export default FactCard;