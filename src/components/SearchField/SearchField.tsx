import './SearchField.css';
import Button from '../Button/Button';

interface ISearchField {
    onHandleSearch: (name: string) => void;
}

function SearchField({onHandleSearch}: ISearchField) {
    return (
            <form className='search-field'>
                <select className='select-filter'>
                    <option>name</option>
                    <option>status</option>
                    <option>species</option>
                    <option>type</option>
                    <option>gender</option>
                </select>

                <input type="search" placeholder="Rick..." className='search-input'/>
                {/* onKeyPress={handleKeyPress}  */}
                <Button text='Search' onClick={()=>console.log('начался поиск')} className="search-button"/>
            </form>
       
    )
}
export default SearchField;