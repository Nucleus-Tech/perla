import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import "./styles.scss";


const Search = () => {

  return <>
   
    <div className={'container'}>
       <InputText></InputText>
       <Calendar selectionMode="range" readOnlyInput/>
    </div>
  </>
}

export default Search;
