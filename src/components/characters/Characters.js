import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import styles from './Characters.css';

function Characters({ characters }) {
  //eslint-desable-next-line
  const characterList = characters.map((character, i) => ( //eslint-disable-line react/prop-types

    <li key={i}>
      <Character character={character} />
    </li>
  ));

  return (
    <ul className={styles.Characters}>
      {characterList}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default Characters;
