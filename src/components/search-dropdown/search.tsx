import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchTransaltion } from '../../views/dashboard/context/searchTransaltion';
import "./search.scss";
import pin from '../../assets/images/pin.svg';
import arrow from '../../assets/images/arrow.svg';
import { SEARCH_DATA } from '../../shared/mocks/search.mock';

const Search = () => {
    
    const { t: translate } = useTranslation();
    const [searchResults, setSearchResults]: any = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [inputValue, setInputValue] = useState(''); 
    const [selectedPlace, setSelectedPlace] = useState<any>(null);

    const search = (text) => {
        setInputValue(text);
        setSelectedPlace(null);
        setTimeout(() => {
            setSearchResults(SEARCH_DATA);
            setShowResults(true)
        }, 500);
    }

    const viewDestinaion = (item) => {
        setSelectedPlace(item);
        setInputValue(item.city);
        setShowResults(false);
    }

    const handleDropdownClick = () => {
        setShowResults(!showResults);
    }

    return <div >
        <div className="dropdown p-flex">
           <input type="string" value={inputValue} placeholder={translate(SearchTransaltion.cityRegion)} onChange={e => search(e.target.value)}/>
           <img className="arrow" src={arrow} onClick={handleDropdownClick} />
        </div>
        {showResults ?
        <div className="results p-flex p-flex-column">
            {showResults}
            {searchResults.length > 0 ?
                <>
                    {searchResults.map((item) => (
                        <div key={item.id} className={`item p-flex p-items-center ${selectedPlace === item ? 'active' : ''}`} onClick={() => viewDestinaion(item)}>
                            <img className="pin" src={pin} />
                            <div className="p-flex p-flex-column">
                                <span className="city">{item.city}</span>
                                <span className="country">{item.country}</span>
                            </div>
                        </div>
                    ))}
                </> 
            : <p className="message">No results...</p>}
        </div>
        : ''}
    </div>
}

export default Search;