import React from 'react';
import AllCharacters from '../containers/characters/AllCharacters';

export default function App() {
  return (
  <>
    <h1>Hello World</h1>
    <AllCharacters page={1} />;
  </>
  );
}
