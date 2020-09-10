import React from 'react';
import "../../styles/home/Home.css";
import Introduction from './Introduction';
import TopPublicationsContainer from './TopPublicationsContainer';

function Home() {
    return (
      <div className="home">
        <Introduction />
        <TopPublicationsContainer/>
      </div>
    );
}

export default Home
