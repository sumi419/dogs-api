import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DogsForm from './DogsForm';

import css from './dogs.module.css';

export default function Dogs() {
  const [dogs, setDogs] = useState(JSON.parse(localStorage.getItem('dogs')) || []);

  // use as componentDidMount
  useEffect(() => {
    fetchDogs();
  }, []);

  const fetchDogs = async () => {
    if (dogs.length === 0) {
      try {
        const res = await axios.get('https://dog.ceo/api/breed/mix/images');
        localStorage.setItem('dogs', JSON.stringify(res.data.message));
        setDogs(res.data.message);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <h1 className={css.title}>Doggys</h1>
      <DogsForm dogs={dogs} setDogs={setDogs} />
      <div className={css.dogsContainer}>
        {dogs.map(dog => (
          // have to add key to the most parent one inside map
          <div className={css.container} key={dog}>
            <img className={css.dog} src={dog} alt='dog' />
          </div>
        ))}
      </div>
    </>
  );
}
