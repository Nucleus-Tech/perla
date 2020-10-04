import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchTransaltion } from '../../views/dashboard/context/searchTransaltion';
import "./search.scss";
import pin from '../../assets/images/pin.svg';
import { SEARCH_DATA } from '../../shared/mocks/search.mock';

const Search = () => {
    
    const { t: translate } = useTranslation();
    const [searchResults, setSearchResults]: any = useState([]);

    const search = (text) => {
        setTimeout(() => {
            setSearchResults(SEARCH_DATA);
        }, 500);
    }

    const viewDestinaion = () => {
        // @TODO
    }

    return <div >
        <div className="dropdown">
           <input  placeholder={translate(SearchTransaltion.cityRegion)} onChange={e => search(e.target.value)}/>
        </div>
        {searchResults.length > 0 ?
        <div className="results p-flex p-flex-column">
            {searchResults.map((item) => (
                <div key={item.id} className="item p-flex p-items-center" onClick={viewDestinaion}>
                    <img className="pin" src={pin} />
                    <div className="p-flex p-flex-column">
                        <span className="city">{item.city}</span>
                        <span className="country">{item.country}</span>
                    </div>
                </div>
            ))}
        </div>
        : ''}
    </div>
}

export default Search;