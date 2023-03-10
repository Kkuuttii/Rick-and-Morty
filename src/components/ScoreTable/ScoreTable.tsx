import './ScoreTable.css';
import { useState, useEffect, useMemo} from 'react';
import {randomIntegerNumber} from '../../utils/Global';
import Button from '../Button/Button';
import mindCloud from "../../images/quizImages/mind-cloud.png";

import thoughtfulMorty from "../../images/quizImages/thoughtful-morty.png";
import happyMorty from "../../images/quizImages/happy-morty.png";
import angryMorty from "../../images/quizImages/angry-morty.png";

import thoughtfulRick from "../../images/quizImages/thoughtful-rick.png";
import happyRick from "../../images/quizImages/happy-rick.png";
import angryRick from "../../images/quizImages/angry-rick.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

interface IScoreTable{
    wins: number;
    losses: number;
    round: number;
}

interface ImortyEmotions{
    thoughtful: string,
    happy: string,
    angry: string,
}

interface IRickEmotions extends ImortyEmotions {
}

const arrowsRotate = <FontAwesomeIcon icon={faArrowsRotate} />
    
function ScoreTable({wins, losses, round}: IScoreTable) {
    const [isReactedCharacterChange, setIsReactedCharacterChange] = useState<boolean>(true);
    const [numberOfWins, setNumberOfWins] = useState<number>(3);
    const [numberOfLosses, setNumberOfLosses] = useState<number>(2);
    const [score, setScore] = useState<string>("equalScore");
    const [roundCount, setRoundCount] = useState<number>(1);

    useEffect (()=> {
        setNumberOfWins(wins);
        setNumberOfLosses(losses);
        setRoundCount(round);
      }, [wins, losses, round]);

    useEffect (()=> {
        if(numberOfWins===numberOfLosses){
            setScore("equalScore");
        } else if (numberOfWins>numberOfLosses){
            setScore("win");
        } else {
            setScore("loose");
        }
    }, [numberOfWins, numberOfLosses]);

    const comment: string = useMemo(()=>{
        const startCommentsGeneration = () => {
            const startComment1 = 'Are you sure you win?..';
            const startComment2 = 'This will be difficult...';
            const startComment3 = 'Lucky, lucky, lucky, lucky...';
            return [startComment1, startComment2, startComment3]
        }
        
        const winningCommentsGeneration = () => {
            const winningComment1 = 'You are close to winning!';
            const winningComment2 = 'Winning is in your pocket!';
            const winningComment3 = 'You will definitely win!';
            return [winningComment1, winningComment2, winningComment3];
        }

        const losingCommentsGeneration = () => {
            const losingComment1 = "You really didn't know that?";
            const losingComment2 = 'Even I know that!';
            const losingComment3 = 'Better luck next time...';
            return [losingComment1, losingComment2, losingComment3];
        }

        const startComments = startCommentsGeneration();
        const winningComments = winningCommentsGeneration() ;
        const losingComments = losingCommentsGeneration();
    
        let comment = '';
    
        if(numberOfWins === numberOfLosses) {
            comment =  startComments[randomIntegerNumber(0, startComments.length)];
        } else if (numberOfWins > numberOfLosses) {
            comment = winningComments[randomIntegerNumber(0, startComments.length)];
        } else {
            comment = losingComments[randomIntegerNumber(0, startComments.length)];
        }

        return comment;
    }, [numberOfWins, numberOfLosses, isReactedCharacterChange])

    const emotionsEmage: string = useMemo(()=>{
        if (isReactedCharacterChange===true) {
            if(score==="equalScore") {
                return thoughtfulMorty;
            } else if(score==="win") {
                return happyMorty;
            } else {
                return angryMorty;
            }
        } else {
            if(score==="equalScore") {
                return thoughtfulRick
            } else if(score==="win") {
                return happyRick
            } else {
                return angryRick
            }
        }
    }, [score, isReactedCharacterChange])

    return (
        <div className="score-table">
            <div className="round-counter">
                <h2 className="rick-and-morty-font"> {((roundCount<4) && roundCount) || 3}
                    round
                </h2>
                <h3 className="rick-and-morty-font">
                    rounds remaining: {((roundCount<4) && 4-roundCount)|| 0}
                </h3>
            </div>

            <div className="comment-block">
                <img src={mindCloud} alt="mind-cloud" className="mind-cloud"/>
                <div className="comment rick-and-morty-font">
                    {comment}
                </div>
            </div>
            
            <div className="emotions-blosk">
                <img src={emotionsEmage} alt="emotions-pic" className="emotion-pic"/>
                <Button text={arrowsRotate} onClick={()=>setIsReactedCharacterChange(prev => !prev)} className="change-character"/>
            </div>

            <div className="score rick-and-morty-font">
                <p>wins: {numberOfWins}</p>
                <p>losses: {numberOfLosses}</p>
            </div>
            
        </div>
    )
}
export default ScoreTable;