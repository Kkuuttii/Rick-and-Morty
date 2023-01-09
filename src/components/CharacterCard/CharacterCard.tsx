import './CharacterCard.css';
import Tooltip from '../Tooltip/Tooltip';

interface ICharacterCard {
  img: string,
  name: string, 
  status: string, 
  species: string,
  location: string,
  episode: string,
  episodeLink: string,
  onClick?: (episodeLink?: string) => void;
}


function CharacterCard({img, name, status, species, location, episode, episodeLink, onClick}: ICharacterCard) {

    return (
        <article className="character-card">
        <div className="character-card-image-wrapper"> <img src={img} alt="character" className="character-card-image"/> </div>
  
        <div className="character-info">
          <div className="section">

            <Tooltip content={name} className="name-tooltip" maxLength={23}>
              <h2 className="character-name">  
                {(name.length<=23)? name : name.slice(0, 20)+'...'} 
               </h2>
            </Tooltip>

            <span>
              <span></span>
              {status} - {species}
            </span>
          </div>

          <div className="section">
            <span className="text-grey">Last known location:</span>

              <Tooltip content={location} maxLength={29}>
                <span>
                  {(location.length<=29)? location : location.slice(0, 20)+'...'}
                </span>
              </Tooltip>
          </div>
  
          <div className="section">
            <span className="text-grey">First seen in:</span>
            <span onClick={()=>onClick?.(episodeLink)} className="cursor-pointer">{episode}</span>
          </div>
        </div>
      </article>
    )
}
export default CharacterCard;