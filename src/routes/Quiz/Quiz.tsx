import './Quiz.css';
import QuestionBox from "../../components/QuestionBox/QuestionBox";
import ScoreTable from "../../components/ScoreTable/ScoreTable";
import QuizResult from '../../components/QuizResult/QuizResult';
import { useEffect, useState } from 'react';

function Quiz() {
    const [round, setRound] = useState<number>(1);
    const [numberOfWins, setNumberOfWins] = useState<number>(0);
    const [numberOfLosses, setNumberOfLosses] = useState<number>(0);

    const [showResult, setShowResult] = useState<boolean>(false);

    const getScore = (wins: number, losses: number) => {
        setNumberOfWins(prev=>prev+wins);
        setNumberOfLosses(prev=>prev+losses);
        setRound(prev =>prev+1);   
    }

    useEffect(()=> {
        if (round > 3){
            setTimeout(()=>setShowResult(true), 1000);
        }
    }, [round])

    const onReset = () => {
        setRound(1);
        setNumberOfWins (0);
        setNumberOfLosses (0);
        setShowResult (false);
    }

    return (
        <div className="quiz">
            {showResult && <QuizResult result={(numberOfWins>numberOfLosses)?true:false} onClick={()=>onReset()}/>}
            
            <div className="playing-field">
                <QuestionBox onClick = {(wins, losses) => getScore(wins, losses)} /> 
            </div>
             
            <ScoreTable wins={numberOfWins} losses={numberOfLosses} round={round}/>
        </div>


    )
}
export default Quiz;