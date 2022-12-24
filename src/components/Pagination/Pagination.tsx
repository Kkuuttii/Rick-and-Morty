import './Pagination.css';
import Button from '../Button/Button';

interface IPagination{
    pagesCount: number;
    onClick: 
}


function Pagination({pagesCount}: IPagination) {

    return (
        <div className="pagination-wrapper">
            <ul className="pagination">
                <li>
                <i className="fa-solid fa-arrow-right"></i>
                    <Button text='<' className='pagination-buttons'/>
                </li>

                <li>
                    <Button text='1' className='pagination-buttons'/>
                </li>

                <li>
                    <span className = 'missing-values'>.</span>
                </li>

                <li>
                    <Button text='8' className='pagination-buttons'/>
                </li>

                <li>
                    <Button text='9' className='pagination-buttons'/>
                </li>

                <li>
                    <Button text='10' className='pagination-buttons'/>
                </li>

                <li>
                    <span className = 'missing-values'>.</span>
                </li>

                <li>
                    <Button text={pagesCount ?? '...'} className='pagination-buttons'/>
                </li>

                <li>
                    <Button text='>' className='pagination-buttons'/>
                </li>
            </ul>
        </div>

    )
}
export default Pagination;