
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import arrow from '../../assets/images/arrow.svg';
import removeIcon from '../../assets/images/remove.svg';
//import { SearchTransaltion } from '../../views/dashboard/context/searchTransaltion';
import { DropdownTranslation } from '../../views/dashboard/context/dropdownTranslations';
import './dropdown.scss';


const Dropdown = (props) => {

    const dataSet = props.data;
    const placeholder = props.placeholder;
    const [showResults, setShowResults] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [additionalPlaceHolder, setAdditionalPlaceHoler] = useState('');

    const { t: translate } = useTranslation();

    const handleDropdownClick = (event) => {
        const target = event.target;
        if (target.id !== 'removeInput') {
            setShowResults(!showResults);
        } 
    }

    const resetDropdown = () => {
        setInputValue('');
        setSelectedItem('');
        setAdditionalPlaceHoler('');
        setShowResults(false);
    }

    const itemClick = (item) => {
        setSelectedItem(item)
        setInputValue(item.value);
        setAdditionalPlaceHoler(placeholder.charAt(0).toUpperCase() + placeholder.slice(1) + ': ');
        setShowResults(!showResults);
    };

    return <div className="dropdown-wrapper">
        <div className="p-dropdown p-flex" onClick={handleDropdownClick}>
            {
                additionalPlaceHolder ?
                <span className="placeholder" >{additionalPlaceHolder}</span> : ''
            }
           <span>{selectedItem? inputValue: translate(DropdownTranslation[placeholder])} </span>
           <span>
                {selectedItem ? <img id="removeInput" className="remove" onClick={resetDropdown} src={removeIcon} /> : ''}
                {!selectedItem ? <img className="arrow" src={arrow} />: ''}
           </span>
        </div>
        {showResults ?
        <div className="results p-flex p-flex-column">
            {showResults}
            {dataSet.length > 0 ?
                <>
                    {dataSet.map((item) => (
                        <div key={item.value} className={`item p-flex p-items-center ${selectedItem === item ? 'active' : ''}`} onClick={() => itemClick(item)}>
                           {item.label}
                        </div>
                    ))}
                </> : 
                ''}
        </div>
        : ''}
    </div>
}

export default Dropdown;

