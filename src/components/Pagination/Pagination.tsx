import './Pagination.css';
import Button from '../Button/Button';
import { useState, useMemo, useCallback } from 'react';

interface IPagination{
    pagesCount: number;
    onClick: (currentPage: number) => void;
    currentPage: number;
}

function Pagination({pagesCount, onClick, currentPage}: IPagination) {
    let [selectedPage, setSelectedPage] = useState<number>(1);

    const onClickHandler = useCallback(
        (page: number) => {
            setSelectedPage(page);
            onClick(page);
        },
        [onClick],
      );

    let allMiddlePagination = useMemo(()=>{
        let middlepaginations = []
        for(let i=2; i<pagesCount; i++) {
            middlepaginations.push(
            <li>
                <Button text={i} onClick={() => onClickHandler(i)} className={`pagination-buttons ${(selectedPage === i) ? "selected-button" : ""}`}/>
            </li>)
        }
        return middlepaginations
        }, [onClickHandler, pagesCount, selectedPage]);

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
                    {(currentPage>3) && <span className='missing-values'>.</span>}
                </li>

                <li>{allMiddlePagination[currentPage-3]}</li>
                <li>{allMiddlePagination[currentPage-2]}</li>
                <li>{allMiddlePagination[currentPage-1]}</li>
                <li>{(selectedPage === 1) && allMiddlePagination[currentPage]}</li>

                <li>
                    {(currentPage + 1 < pagesCount - 1) && <span className='missing-values'>.</span>}
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