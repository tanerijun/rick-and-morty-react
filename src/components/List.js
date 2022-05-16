import { useState, useEffect } from 'react';
import Character from './Character';

function List() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch data
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch('https://rickandmortyapi.com/api/character');

        const { results } = await data.json();

        setCharacters(results);
        setLoading(false);
      } catch (error) {
        console.error('Error from useEffect in List.js');
      }
    }

    fetchData();
  }, [characters.length]);

  return (
    <div>
      <h2>Characters</h2>
      <div className="row">
        {loading ? (
          <div>Loading...</div>
        ) : (
          characters.map((character) => (
            <Character
              key={character.id}
              name={character.name}
              origin={character.origin}
              image={character.image}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default List;
