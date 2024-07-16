import React, { useState } from 'react';

const ToggleCard = () => {
  const [visibleDiv, setVisibleDiv] = useState(null);

  const handleButtonClick = (divIndex) => {
    setVisibleDiv(divIndex);
  };

  return (
    <div style={styles.container}>
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} style={styles.divContainer}>
          <button onClick={() => handleButtonClick(index)} style={styles.button}>
            Show Text {index}
          </button>
          {visibleDiv === index && <div style={styles.textDiv}>This is the text for div {index}</div>}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  divContainer: {
    margin: '10px 0',
    textAlign: 'center',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  textDiv: {
    marginTop: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  }
};

export default ToggleCard;
