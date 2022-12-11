import './Library.css';
import { useState, useEffect, useMemo } from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import {getEpisodeNumber} from '../../utils/Global'
import axios from 'axios';
// import Button from '../../components/Button/Button';

interface ICharacterInfo {
  "id": number,
  "name": string,
  "status": string,
  "species": string,
  "type": string,
  "gender": string,
  "origin": IOrigin,
  "location": ILocation,
  "image": string,
  "episode": string[],
  "url": string,
  "created": string,
}

interface IOrigin {
  "name": string,
  "url": string
}

interface ILocation extends IOrigin {

};

function Library() {
  // const [count, setCount] = useState(0);
  // let count2 = 0;

  const [characterInfo, setCharacterInfo] = useState<ICharacterInfo[]>([]);

  async function getCharacterInfo () {
      let response = await axios.get('https://rickandmortyapi.com/api/character');
      setCharacterInfo(response.data.results);
  }

  useEffect (()=> {
    getCharacterInfo();
  }, []);
 
  let characterCards = useMemo(()=>{
    return characterInfo.map((item: ICharacterInfo) => { 
      return (
        <CharacterCard img = {item.image} name = {item.name} status = {item.status} species = {item.species} location = {item.location.name} episode = {getEpisodeNumber(item.episode[0])} episodeLink = {item.episode[0]} key={item.id}/>
      )
    });
  }, [characterInfo])

    return (
        <div className="library">
      <div className="library-title">
        <h2 >Character library</h2>
      </div>

      <div>
        <div></div>
        <div></div>
      </div>

      <div className="character-cards">
        {characterCards}
      </div>

      
      {/* <Button text ={`${count}`} onClick={() => setCount((prev) => prev+1)}/>
      <Button text ={`${count2}`} onClick={() => count2+1}/> */}

      <div>1 2 3 4 ... 42</div>
    </div>
    )
}
export default Library;