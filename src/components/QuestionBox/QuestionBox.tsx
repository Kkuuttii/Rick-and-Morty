import './QuestionBox.css';
import mainImage from "../../images/mainImage.png"

function QuestionBox() {
    const question1 = 'What is the name of the character seen in the image?';
    const question2 = 'What is the species of the character seen in the image?';
    const question3 = 'What gender of the character seen in the image?';

    const questions = [question1, question2,question3];

    return (
        <div className="question-box">
            <div className='quiz-image-wrapper'>
                <img src={mainImage} alt="RickAndMorty" className='quiz-image'/>
            </div>
            <div className="question-wrapper"> 
                <p>{question2}</p>
            </div>
        </div>
    )
}
export default QuestionBox;