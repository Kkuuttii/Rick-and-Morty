import './ScoreTable.css';
import {randomIntegerNumber} from '../../utils/Global';


function ScoreTable() {
    let numberOfWins = 0;
    let numberOfLosses = 0;

    const commentGeneration = (wins: number, losses: number) => {
        const startCommentsGeneration = () => {
            const startComment1 = 'Are you sure you win?';
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
            const losingComment1 = 'Looks like this is it...';
            const losingComment2 = 'You tried...';
            const losingComment3 = 'Better luck next time... Maybe...';
            return [losingComment1, losingComment2, losingComment3];
        }


        const startComments = startCommentsGeneration();
        const winningComments = winningCommentsGeneration() ;
        const losingComments = losingCommentsGeneration();
    
        let comment = '';
    
        if(wins === losses) {
            comment =  startComments[randomIntegerNumber(0, startComments.length)];
        } else if (wins > losses) {
            comment = winningComments[randomIntegerNumber(0, startComments.length)];
        } else {
            comment = losingComments[randomIntegerNumber(0, startComments.length)];
        }

        return comment;
    }

    return (
        <div>
            <div>
                <h2> 1st round</h2>
                <p>rounds remaining: 3</p>
            </div>
            <div>
                <p>wins: 2</p>
                <p>losses: 1</p>
            </div>
            <div>
                <p>{commentGeneration(numberOfWins, numberOfLosses)}</p>
            </div>
        </div>
    )
}
export default ScoreTable;