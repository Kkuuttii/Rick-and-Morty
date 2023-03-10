import './QuizResult.css';
import Button from '../Button/Button';
import loose from "../../images/quizImages/loose.gif";
import win from "../../images/quizImages/win.gif";

interface IQuizResult {
    result: boolean, 
    onClick: () => void;
}

function QuizResult({result, onClick}: IQuizResult) {

    return (
        <div>
            {result && <div className="quiz-result">
                <div className="quiz-result-title rick-and-morty-font">
                    YOU WIN!
                </div>
                <img src={win} alt="You win" className="quiz-result-image"/>
                <Button text='close' onClick={() => onClick()}/>
            </div>}

            {!result && <div className="quiz-result">
                <div className="quiz-result-title rick-and-morty-font"> 
                    YOU LOOSE!
                </div>
                <img src={loose} alt="You loose" className="quiz-result-image"/>
                <Button text='close' onClick={() => onClick()}/>
            </div>}
        </div>
    )
}
export default QuizResult;