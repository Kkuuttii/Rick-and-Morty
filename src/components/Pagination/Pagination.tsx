import './Pagination.css';
import Button from '../Button/Button';

interface IPagination{
    pagesCount: number;
    onClick: (currentPage: number) => void;
    currentPage: number;
}
//ОСТАЛОСЬ СДЕЛАТЬ ТАК, ЧТОБЫ ВЫБРАННАЯ СТРАНИЦА МЕНЯЛА СВОЙ ЦВЕТ (КНОПКА)
function Pagination({pagesCount, onClick, currentPage}: IPagination) {
    let smallestButtons = currentPage < 4;
    let middleButtons = ((currentPage >= 4)&&(currentPage <= 40));
    let largestButtons = currentPage > 40;

    return (
        <div className="pagination-wrapper">
            <ul className="pagination">
                <li>
                <i className="fa-solid fa-arrow-right"></i>
                    {(currentPage > 1) &&  <Button text='<' onClick={() => onClick(currentPage-1)} className='pagination-buttons'/>}
                </li>

                <li>
                    <Button text='1' onClick={() => onClick(1)} className='pagination-buttons'/>
                </li>

                <li>
                    {(middleButtons || largestButtons) && <span className = 'missing-values'>.</span>}
                </li>

                <li>
                    {smallestButtons && <Button text={2} onClick={() => onClick(2)} className='pagination-buttons'/>}

                    {middleButtons && <Button text={currentPage-1} onClick={() => onClick(currentPage-1)} className='pagination-buttons'/>}

                    {largestButtons && <Button text={39} onClick={() => onClick(39)} className='pagination-buttons'/>}
                </li>

                <li>
                    {smallestButtons && <Button text={3} onClick={() => onClick(3)} className='pagination-buttons'/>}

                    {middleButtons && <Button text={currentPage} onClick={() => onClick(currentPage)} className='pagination-buttons'/>}

                    {largestButtons &&  <Button text={40} onClick={() => onClick(40)} className='pagination-buttons'/>}
                </li>

                <li>

                {smallestButtons && <Button text={4} onClick={() => onClick(4)} className='pagination-buttons'/>}

                {middleButtons && <Button text={currentPage+1} onClick={() => onClick(currentPage+1)} className='pagination-buttons'/>}

                {largestButtons &&  <Button text={41} onClick={() => onClick(41)} className='pagination-buttons'/>}
   
                </li>

                <li>
                    {(currentPage<40) && <span className = 'missing-values'>.</span>}
                </li>

                <li>
                    <Button text={pagesCount ?? '...'} onClick={() => onClick(pagesCount)} className='pagination-buttons'/>
                </li>

                <li>
                    {(currentPage < pagesCount) && <Button text='>' onClick={() => onClick(currentPage+1)} className='pagination-buttons'/>}
                </li>
            </ul>
        </div>

    )
}
export default Pagination;