import React, { useState } from 'react';

export default function DogsForm({ dogs, setDogs }) {
  const [url, setUrl] = useState('');

  // whatever you type in
  function handleUrl(e) {
    setUrl(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (dogs.includes(url)) {
      alert('Dog picture is already uploaded');
    } else {
      const temp = [...dogs, url];
      localStorage.setItem('dogs', JSON.stringify(temp));
      setDogs(temp);
    }
    setUrl('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='url'
        type='url'
        placeholder='Add a 🐶link'
        value={url}
        onChange={handleUrl}
        required
      />
      <button type='submit'>Submit Url</button>
    </form>
  );
}
