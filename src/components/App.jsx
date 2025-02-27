import { useState, useEffect } from 'react'

import './App.css'

import Container from './Container/Container'
import Description from './Description/Description'
import Options from './Options/Options'
import Feedback from './Feedback/Feedback'
import Notification from './Notification/Notification'

function App() {
  
  const [clicks, setClicks] = useState(() => {
    const feedbacks = window.localStorage.getItem("feedbacks");
    if (feedbacks !== null) {
      return JSON.parse(feedbacks);
    };

    return {
      good: 0,
      neutral: 0,
      bad: 0
    };
  });

  useEffect(() => {
    window.localStorage.setItem("feedbacks", JSON.stringify(clicks));
  }, [clicks]);


  const updateFeedback  = (click) => {
    setClicks(prevClicks => ({ ...prevClicks, [click]: prevClicks[click] + 1 }));
  };

  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0
    });
    }

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const PositiveFeedback = Math.round((clicks.good / totalFeedback) * 100);


  return (
    <Container>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
      
      {totalFeedback > 0 ? <Feedback count={clicks} totalFeedback={totalFeedback} PositiveFeedback={PositiveFeedback} /> : <Notification />}
    </Container>
  );
}

export default App
