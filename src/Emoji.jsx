import React, { useState } from 'react';

function Emoji() {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy(!isHappy);
  };

  return (
    <div style={{ fontSize: '2rem', textAlign: 'center' }}>
      <span role="img" aria-label={isHappy ? "happy face" : "sad face"}>
        {isHappy ? '😊' : '😢'}
      </span>
      <br />
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
}

export default Emoji;
