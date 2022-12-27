import './Pagination.css';
import Button from '../Button/Button';
import { useState } from 'react';

interface IPagination{
    pagesCount: number;
    onClick: (currentPage: number) => void;
    currentPage: number;
}
//ОСТАЛОСЬ СДЕЛАТЬ ТАК, ЧТОБЫ ВЫБРАННАЯ СТРАНИЦА МЕНЯЛА СВОЙ ЦВЕТ (КНОПКА)
function Pagination({pagesCount, onClick, currentPage}: IPagination) {
    let [selectedPage, setSelectedPage] = useState<number>();

    let isSmallestButtonVisible = currentPage < 4;
    let isMiddleButtonVisible = ((currentPage >= 4)&&(currentPage <= 40));
    let isLargestButtonVisible = currentPage > 40;

    let onClickHandler = (page: number) => {
        setSelectedPage(page);
        onClick(page);
    }

    return (
        <div className="pagination-wrapper">
            <ul className="pagination">
                <li>
                    {(currentPage > 1) &&  <Button text='<' onClick={() => onClickHandler(currentPage-1)} className='pagination-buttons'/>}
                </li>

                <li>
                    <Button text='1' onClick={() => onClickHandler(1)} className={`pagination-buttons ${(selectedPage === 1) ? "selected-button" : ""}`}/>
                </li>

                <li>
                    {(isMiddleButtonVisible || isLargestButtonVisible) && <span className = 'missing-values'>.</span>}
                </li>

                <li>
                    {isSmallestButtonVisible && <Button text={2} onClick={() => onClickHandler(2)} className={`pagination-buttons ${(selectedPage === 2) ? "selected-button" : ""}`}/>}

                    {isMiddleButtonVisible && <Button text={currentPage-1} onClick={() => onClickHandler(currentPage-1)} className='pagination-buttons'/>}

                    {isLargestButtonVisible && <Button text={39} onClick={() => onClickHandler(39)} className='pagination-buttons'/>}
                </li>

                <li>
                    {isSmallestButtonVisible && <Button text={3} onClick={() => onClickHandler(3)} className={`pagination-buttons ${(selectedPage === 3) ? "selected-button" : ""}`}/>}

                    {isMiddleButtonVisible && <Button text={currentPage} onClick={() => onClickHandler(currentPage)} className={`pagination-buttons ${(selectedPage === currentPage) ? "selected-button" : ""}`}/>}

                    {isLargestButtonVisible &&  <Button text={40} onClick={() => onClickHandler(40)} className='pagination-buttons'/>}
                </li>

                <li>

                {isSmallestButtonVisible && <Button text={4} onClick={() => onClickHandler(4)} className='pagination-buttons'/>}

                {isMiddleButtonVisible && <Button text={currentPage+1} onClick={() => onClickHandler(currentPage+1)} className='pagination-buttons'/>}

                {isLargestButtonVisible &&  <Button text={41} onClick={() => onClickHandler(41)} className={`pagination-buttons ${(selectedPage === 41) ? "selected-button" : ""}`}/>}
   
                </li>

                <li>
                    {(currentPage<40) && <span className = 'missing-values'>.</span>}
                </li>

                <li>
                    <Button text={pagesCount ?? '...'} onClick={() => onClickHandler(pagesCount)} className={`pagination-buttons ${(selectedPage === (pagesCount || '...')) ? "selected-button" : ""}`}/>
                </li>

                <li>
                    {(currentPage < pagesCount) && <Button text='>' onClick={() => onClickHandler(currentPage+1)} className='pagination-buttons'/>}
                </li>
            </ul>
        </div>

    )
}
export default Pagination;