import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VerseForm from './components/VerseForm.jsx';
import VerseText from './components/VerseText.jsx';
import './App.css';

export default function App() {
  const [verse, setVerse] = useState('');
  const [passage, setPassage] = useState('');
  const [showPassage, setShowPassage] = useState(false);
  console.log(`Verse: ${verse}`);

  useEffect(() => {
    console.log('verse changed');

    if (verse !== '') {
      setShowPassage(true);
      console.log('about to call fetchData');
      axios.get('/verse')
        .then((result) => {
          console.log('---------got result!!!');
          console.log(result.data);
          setPassage(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [verse]);

  return (
    <div className="App">
      <body className="App-header">
        {!showPassage && <VerseForm setVerse={setVerse} />}
        {showPassage && <VerseText passage={passage} />}
      </body>
    </div>
  );
}
