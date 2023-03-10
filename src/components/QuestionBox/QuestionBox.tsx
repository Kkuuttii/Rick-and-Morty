import './QuestionBox.css';
import mainImage from "../../images/mainImage.png";
import CheckBox from "../../components/CheckBox/CheckBox";
import { useEffect, useState } from 'react';
import axios from 'axios';
import {randomIntegerNumber, shuffleArray, randomCharactersId} from "../../utils/Global";
import { IResponse } from "../../types/global"
import { questions } from '../../utils/Constants';

interface IQuestionBox {
    onClick: (wins: number, losses: number) => void;
}

interface IQuestion {
    id?: number,
    question?: string
}

interface IRandomCharactersId {
    questionCharacterId: number,
    fakeCharacter1Id: number,
    fakeCharacter2Id: number
}

interface IAnswersData {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: IOrigin,
    location: ILocation,
    image: string,
    episode: string[],
    url: string,
    created: string,
}

interface IOrigin {
    name: string,
    url: string
}
  
  interface ILocation extends IOrigin {
  };

function QuestionBox({onClick}: IQuestionBox) {
    const [charactersCount, setCharactersCount] = useState<number>(0);
    const [image, setImage] = useState<string>(mainImage);
    const [rightAnswer, setRightAnswer] = useState<string>("wait");
    const [wrongAnswer1, setWrongAnswer1] = useState<string>("wait");
    const [wrongAnswer2, setWrongAnswer2] = useState<string>("wait");
    const [question, setQuestion] = useState<any> (); 

    async function getCharacterNumber () {
        let response = await axios.get(`https://rickandmortyapi.com/api/character`);
        setCharactersCount(response.data.info.count);
    }

    async function getQuestionAndAnswerInfo() {
        let response: IResponse<IAnswersData> = await axios.get(`https://rickandmortyapi.com/api/character/${randomCharactersId(charactersCount)}`);
        setImage(response.data[0]?.image);

        if(question?.id === 0) {
            setRightAnswer(response.data[0]?.name);
            setWrongAnswer1(response.data[1]?.name);
            setWrongAnswer2(response.data[2]?.name);
        } else if (question?.id === 1) {
            let answers = ["Human", "Animal", "Alien", "Humanoid", "unknown","Poopybutthole", "Mythological Creature", "Robot", "Cronenberg", "Disease" ,"Other"];
            shuffleArray (answers);
            setRightAnswer(response.data[0]?.species);
            for (let i = 0; i <= answers.length-1; i++) {
                if (rightAnswer !== answers[i]) {
                    setWrongAnswer1(answers[i]);
                    if(rightAnswer !== answers[i+1]) {
                        setWrongAnswer2(answers[i+1]);
                        break;
                    }
                }
            }

        } else if (question?.id === 2) {
            setRightAnswer(response.data[0]?.gender);
            if(response.data[0]?.gender === "Female") {
                setWrongAnswer1("Male");
                setWrongAnswer2("Other");
            } else if (response.data[0]?.gender === "Male") {
                setWrongAnswer1("Female");
                setWrongAnswer2("Other");
            } else {
                setWrongAnswer1("Female");
                setWrongAnswer2("Male");
            }
        } else if (question?.id === 3){
            let rightAnswer = response.data[0]?.episode[0].split("/");
            let wrongAnswer1 = response.data[1]?.episode[0].split("/");
            let wrongAnswer2 = response.data[2]?.episode[0].split("/");
            setRightAnswer(rightAnswer[rightAnswer.length-1]);
            setWrongAnswer1(wrongAnswer1[wrongAnswer1.length-1]);
            setWrongAnswer2(wrongAnswer2[wrongAnswer2.length-1]);
        } else {
            setRightAnswer(response.data[0]?.location?.name);
            setWrongAnswer1(response.data[1]?.location?.name);
            setWrongAnswer2(response.data[2]?.location?.name);
        }
    }

    const randomQuestion = () => {    
        const id = randomIntegerNumber(0, questions.length);
        return {
            id,
            question: questions[id],
        }
    }

    const getNewQuestion = (wins: number, losses: number) => {
        onClick(wins, losses);
        getCharacterNumber();
        setQuestion(randomQuestion());
        getQuestionAndAnswerInfo();
    };

    useEffect(()=> {
        getNewQuestion(0,0)
    }, [])

    return (
        <div className="question-box">
            <div className='quiz-image-wrapper'>
                <img src={image} alt="questionPicture" className='quiz-image'/>
            </div>
            
            <div className="question-and-answers-wrapper"> 
                <div className="question-wrapper">
                    {question?.question}
                </div>
                
                <div className="answers-wrapper">
                    <CheckBox 
                        rightAnswer={rightAnswer} 
                        wrongAnswer1={wrongAnswer1} 
                        wrongAnswer2={wrongAnswer2} 
                        onClick={(wins, losses)=>getNewQuestion(wins, losses)}
                    /> 
                </div>
            </div>
        </div>
    )
}
export default QuestionBox;