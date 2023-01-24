import React from 'react';

export default function VerseText({ passage }) {
  console.log('calling from within VerseText');
  console.log(passage);
  return (
    <p>{passage}</p>
  );
}
