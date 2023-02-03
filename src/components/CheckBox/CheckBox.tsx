import Button from '../../components/Button/Button';
import './CheckBox.css';
import {shuffleArray} from "../../utils/Global"
import { useState } from 'react';

interface ICheckBox {
    rightAnswer: string;
    wrongAnswer1: string; 
    wrongAnswer2: string;
    onClick: (wins: number, losses: number) => void;
}


function CheckBox({rightAnswer, wrongAnswer1, wrongAnswer2, onClick}: ICheckBox) {
    const [isRightAnswer, setIsRightAnswer] = useState<boolean>();

    const answers = [rightAnswer, wrongAnswer1, wrongAnswer2];

    const onClickHandler = (index: number) => {
        if (rightAnswer === answers[index]) {
            setIsRightAnswer(true);
            onClick(1,0);
        } else {
            setIsRightAnswer(false);
            onClick(0,1);
        }
    }

    shuffleArray(answers);
    return (
        <div className='check-box'>
            <Button text={answers[0]} onClick={()=>onClickHandler(0)} className="checkbox-button"/>
            <Button text={answers[1]} onClick={()=>onClickHandler(1)} className="checkbox-button"/>
            <Button text={answers[2]} onClick={()=>onClickHandler(2)} className="checkbox-button"/>
        </div>
    )
}
export default CheckBox;