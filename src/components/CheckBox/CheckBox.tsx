// import mainImage from "../../images/mainImage.png"
import Button from '../../components/Button/Button';

function CheckBox() {
    return (
        <div>
            <Button text='answer 1' onClick={()=>console.log('answer1')}/>
            <Button text='answer 2' onClick={()=>console.log('answer2')}/>
            <Button text='answer 3' onClick={()=>console.log('answer3')}/>
        </div>
    )
}
export default CheckBox;