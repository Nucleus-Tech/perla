import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SearchTransaltion } from "../../views/dashboard/context/searchTransaltion";
import "./search.scss";
import pin from "../../assets/images/pin.svg";
import removeIcon from "../../assets/images/remove.svg";
import { searchDestinations } from "../../services/api/destination/destinationService";

const Search = ({ destination }) => {
  const { t: translate } = useTranslation();
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedPlace, setSelectedPlace] = useState<any>(null);

  const resultsRef = useRef(null);
  const resultItemRef = useRef(null);
  useOutsideResultClick(resultsRef);

  function useOutsideResultClick(ref) {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (event.target === resultItemRef.current) {
          setShowResults(!showResults);
        } else if (ref.current && !ref.current.contains(event.target)) {
          setShowResults(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, showResults]);
  }

  const search = async (text) => {
    setInputValue(text);
    const { data } = await searchDestinations(true, text);
    setSelectedPlace(null);
    setTimeout(() => {
      setSearchResults(data);
      setShowResults(true);
    }, 500);
  };

  const viewDestinaion = (item) => {
    setSelectedPlace(item);
    setInputValue(item.name);
    destination(item.name);
    setShowResults(false);
  };

  const resetDropdown = () => {
    setInputValue("");
    setSelectedPlace(null);
    setShowResults(false);
  };

  return (
    <div className="dropdown-wrapper-search">
      <div className="p-dropdown p-flex border-left">
        <input
          ref={resultItemRef}
          type="string"
          value={inputValue}
          placeholder={translate(SearchTransaltion.cityRegion)}
          onChange={(e) => search(e.target.value)}
        />
        {selectedPlace ? (
          <img
            id="removeInput"
            className="remove"
            onClick={resetDropdown}
            src={removeIcon}
          />
        ) : (
          ""
        )}
      </div>
      {showResults ? (
        <div ref={resultsRef} className="results p-flex p-flex-column">
          {showResults}
          {searchResults.length > 0 ? (
            <>
              {searchResults.map((item) => (
                <div
                  key={item.id}
                  className={`item p-flex p-items-center ${
                    selectedPlace === item ? "active" : ""
                  }`}
                  onClick={() => viewDestinaion(item)}
                >
                  <img className="pin" src={pin} />
                  <div className="p-flex p-flex-column">
                    <span className="city">{item.name}</span>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p className="message">{translate(SearchTransaltion.message)}</p>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
