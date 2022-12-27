import './Library.css';
import { useState, useEffect, useMemo } from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import {getEpisodeNumber, displayedId} from '../../utils/Global'
import axios from 'axios';
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard"
// import Button from '../../components/Button/Button';
import Pagination from '../../components/Pagination/Pagination'

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
  const [showEpisodeCard, setShowEpisodeCard] = useState<boolean>(false);
  const [episodeInfo, setEpisodeInfo] = useState<string>("");
  const [pages, setPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);        

  const handlerClickCharacter = (episodeURL: any) => {
    setShowEpisodeCard(true);
    setEpisodeInfo(episodeURL);
  }

  const HandlerClickCurrentPage = (pageSelected: number) => {
    setCurrentPage(pageSelected)
  }

  async function getCharacterInfo () {
      let response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
      setCharacterInfo(response.data.results);
      setPages(response.data.info.pages)
  }

  useEffect (()=> {
    getCharacterInfo();
  }, [currentPage]);
 

  let characterCards = useMemo(()=>{
    return characterInfo.map((item: ICharacterInfo) => {
      return (
        <CharacterCard img = {item.image} name = {item.name} status = {item.status} species = {item.species} location = {item.location.name} episode = {getEpisodeNumber(item.episode[0])} episodeLink = {item.episode[0]} onClick = {(х) => handlerClickCharacter(х)} key={item.id}/>
      )
    });
  }, [characterInfo])


    return (
      <div className="library">
        {showEpisodeCard && <EpisodeCard link={episodeInfo} onClick={() => setShowEpisodeCard(false)}/>}

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

        
       
        <Pagination pagesCount={pages} onClick={(currentPage) => {
          HandlerClickCurrentPage(currentPage);
        }} currentPage={currentPage}/>

        
        <div>1 2 3 4 ... 42</div>
      </div>
    )
}
export default Library;