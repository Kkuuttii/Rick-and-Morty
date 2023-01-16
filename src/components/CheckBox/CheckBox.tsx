// import mainImage from "../../images/mainImage.png"
import Button from '../../components/Button/Button';
import './CheckBox.css';

function CheckBox() {
    return (
        <div>
            <Button text='answer 1' onClick={()=>console.log('answer1')} className="checkbox-button"/>
            <Button text='answer 2' onClick={()=>console.log('answer2')} className="checkbox-button"/>
            <Button text='answer 3' onClick={()=>console.log('answer3')} className="checkbox-button"/>
        </div>
    )
}
export default CheckBox;