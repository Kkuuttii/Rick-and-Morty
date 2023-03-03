import './FactCard.css';

interface IFactCard {
  text: string;
  image: string;
  type?: string;
}

function FactCard({text, image, type = "normal"} :IFactCard) { 
  if (type === "revers") {
    return (
      <div className="fact-card">
        <div>
          <p>
            {text}
          </p>
        </div>

        <div className="randomImage revers-image"> 
          <img src={image} alt="factImage" />
        </div>
      </div>
    )
  } else  {
    return (
      <div className="fact-card">
  
        <div className="randomImage"> 
          <img src={image} alt="factImage" />
        </div>
  
        <div>
          <p>
            {text}
          </p>
        </div>
  
      </div>
    )
  } 

}
export default FactCard;