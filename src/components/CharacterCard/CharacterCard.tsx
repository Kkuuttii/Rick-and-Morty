import './CharacterCard.css';

interface ICharacterCard {
  img: string,
  name: string, 
  status: string, 
  species: string,
  location: string,
  episode: string,
  episodeLink: string,
}

function CharacterCard({img, name, status, species, location, episode, episodeLink}: ICharacterCard) {
    return (
        <article className="character-card">
        <div className="character-card-image-wrapper"> <img src={img} alt="character" className="character-card-image"/> </div>
  
        <div className="character-info">
          <div className="section">
            <h2 className="character-name">{name}</h2>
            <span>
              <span></span>
              {status} - {species}
            </span>
          </div>
  
          <div className="section">
            <span className="text-grey">Last known location:</span>
            {location}
          </div>
  
          <div className="section">
            <span className="text-grey">First seen in:</span>
            <a href={episodeLink}>{episode}</a>
          </div>
        </div>
      </article>
    )
}
export default CharacterCard;