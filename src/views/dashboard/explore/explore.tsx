import React from 'react';
import Search from '../../../components/search-dropdown/search';

import './styles.scss';

const Explore = () => {
  return (
    <div className="p-flex p-flex-column">
      <div className="search-box p-flex p-justify-center p-items-center p-wrap">
        <Search />
      </div>
      <div className="destination-box p-flex p-justify-center">
        <h1>Destinations</h1>
      </div>
      <div className="footer">
      </div>
    </div>
  )
}

export default Explore;