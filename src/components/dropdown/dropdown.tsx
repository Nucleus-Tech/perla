import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import arrow from "../../assets/images/arrow.svg";
import removeIcon from "../../assets/images/remove.svg";
//import { SearchTransaltion } from '../../views/dashboard/context/searchTransaltion';
import { DropdownTranslation } from "../../views/dashboard/context/dropdownTranslations";
import "./dropdown.scss";

const Dropdown = ({ data, placeHolder, selected }) => {
  const dataSet = data;
  const placeholder = placeHolder;
  const [showResults, setShowResults] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [additionalPlaceHolder, setAdditionalPlaceHoler] = useState("");

  const { t: translate } = useTranslation();

  const resultsRef = useRef(null);
  const resultItemRef = useRef(null);
  const resultPlaceholderRef = useRef(null);
  const resultSelectedRef = useRef(null);
  const resultArrowRef = useRef(null);
  useOutsideResultClick(resultsRef);

  function useOutsideResultClick(ref) {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          event.target === resultItemRef.current ||
          event.target === resultPlaceholderRef.current ||
          event.target === resultSelectedRef.current ||
          event.target === resultArrowRef.current
        ) {
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

  const resetDropdown = () => {
    setInputValue("");
    setSelectedItem("");
    setAdditionalPlaceHoler("");
    setShowResults(false);
  };

  const itemClick = (item) => {
    setSelectedItem(item);
    setInputValue(item.value);
    selected(item.value);
    setAdditionalPlaceHoler(
      placeholder.charAt(0).toUpperCase() + placeholder.slice(1) + ": "
    );
    setShowResults(!showResults);
  };

  return (
    <div className="dropdown-wrapper">
      <div ref={resultItemRef} className="p-dropdown p-flex">
        {additionalPlaceHolder ? (
          <span ref={resultPlaceholderRef} className="placeholder">
            {additionalPlaceHolder}
          </span>
        ) : (
          ""
        )}
        <span ref={resultSelectedRef}>
          {selectedItem
            ? inputValue
            : translate(DropdownTranslation[placeholder])}{" "}
        </span>
        <span>
          {selectedItem ? (
            <img
              id="removeInput"
              className="remove"
              onClick={resetDropdown}
              src={removeIcon}
            />
          ) : (
            ""
          )}
          {!selectedItem ? (
            <img ref={resultArrowRef} className="arrow" src={arrow} />
          ) : (
            ""
          )}
        </span>
      </div>
      {showResults ? (
        <div ref={resultsRef} className="results p-flex p-flex-column">
          {showResults}
          {dataSet.length > 0 ? (
            <>
              {dataSet.map((item) => (
                <div
                  key={item.value}
                  className={`item p-flex p-items-center ${
                    selectedItem === item ? "active" : ""
                  }`}
                  onClick={() => itemClick(item)}
                >
                  {item.label}
                </div>
              ))}
            </>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dropdown;
