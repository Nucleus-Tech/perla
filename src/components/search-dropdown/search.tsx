import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchTransaltion } from '../../views/dashboard/context/searchTransaltion';
import "./search.scss";
import pin from '../../assets/images/pin.svg';
import removeIcon from '../../assets/images/remove.svg';
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

    const handleDropdownClick = (event) => {
        const target = event.target;
        if (target.id !== 'removeInput') {
            setShowResults(!showResults);
        } 
    }

    const resetDropdown = () => {
        setInputValue('');
        setSelectedPlace(null);
        setShowResults(false);
    }

    return <div className="dropdown-wrapper-search" onClick={handleDropdownClick}>
        <div className="p-dropdown p-flex border-left">
           <input type="string" value={inputValue} placeholder={translate(SearchTransaltion.cityRegion)} onChange={e => search(e.target.value)}/>
           {selectedPlace ? <img id="removeInput" className="remove" onClick={resetDropdown} src={removeIcon} /> : ''}
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
            : <p className="message">{translate(SearchTransaltion.message)}</p>}
        </div>
        : ''}
    </div>
}

export default Search;