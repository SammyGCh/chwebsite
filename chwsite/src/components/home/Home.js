import React from 'react';
import "../../styles/home/Home.css";
import Introduction from './Introduction';
import TopPublicationsContainer from './TopPublicationsContainer';
import FeedbackSender from './FeedbackSender';

function Home() {
    return (
      <div className="home">
        <Introduction />
        <TopPublicationsContainer/>
        <FeedbackSender/>
      </div>
    );
}

export default Home
