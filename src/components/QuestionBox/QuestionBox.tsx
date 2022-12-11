import './QuestionBox.css';
import mainImage from "../../images/mainImage.png"

function QuestionBox() {
    const question1 = 'What is the name of the character seen in the image?';
    const question2 = 'What is the species of the character seen in the image?';
    const question3 = 'What gender of the character seen in the image?';

    const questions = [question1, question2,question3];

    return (
        <div>
            <div className='temprorary'>
                <img src={mainImage} alt="RickAndMorty" />
            </div>
            <div>
                <p>{question2}</p>
            </div>
        </div>
    )
}
export default QuestionBox;