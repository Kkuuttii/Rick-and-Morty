import './Quiz.css';
// import mainImage from "../../images/mainImage.png"
// import Button from '../../components/Button/Button';
import QuestionBox from "../../components/QuestionBox/QuestionBox";
import CheckBox from "../../components/CheckBox/CheckBox";
import ScoreTable from "../../components/ScoreTable/ScoreTable";

function Quiz() {
    return (
        <div className="quiz">
            <div className="playing-field">
                <QuestionBox/> 
                <div className="check-box-wrapper">
                    <CheckBox/> 
                </div>
            </div>
             
            <ScoreTable/>
        </div>


    )
}
export default Quiz;