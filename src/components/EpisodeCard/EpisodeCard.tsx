import './EpisodeCard.css';
import Button from '../Button/Button';
import loading from "../../images/loading.gif";
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

interface IEpisodeCard {
    onClick?: () => void,
    link: string,
}

interface IEpisode {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: string[],
    url: string,
    created: string
}

function EpisodeCard({onClick, link}: IEpisodeCard) {

    const [episode, setEpisode] = useState<IEpisode>();
    const [isLoading, setIsLoading] = useState<Boolean>(true);

    const getEpisode = useCallback(async ()=>{
            let response = await axios.get(link);
            setEpisode(response.data);
            setIsLoading(false);
    }, [link])

    useEffect (()=> {
        getEpisode();
    }, [getEpisode]);

    return (
        <div>
            {isLoading && <div className="episode-info">
                    <img src={loading} alt="Идет загрузка" className="loading-image"/>
                </div>}

            {(!isLoading) && <div className="episode-info">
                <div className="episode-info-title">Episode info</div>
                <div>Name: {episode?.name}</div>
                <div>Season: {episode?.episode}</div>
                <div>Episode: {episode?.episode}</div>
                <div>Air date: {episode?.air_date}</div>
                <Button text='Close' onClick={onClick}/>
            </div>}

            <div className="overlay">

            </div>

        </div>
    )
}
export default EpisodeCard;