import './SearchField.css';

interface ISearchField {
    onSearch: (name: string) => void;
    onCheckingFilter: (name: string) => void;
}

function SearchField({onSearch, onCheckingFilter}: ISearchField) {

    return (
            <form className='search-field'>
                <select className='select-filter' onChange={(event)=> onCheckingFilter(event.target.value)}>
                    <option>name</option>
                    <option>status</option>
                    <option>species</option>
                    <option>gender</option>
                </select>

                <input type="search" placeholder="Rick..." className='search-input' onChange={(event)=> onSearch(event.target.value)} />

            </form>
       
    )
}
export default SearchField;