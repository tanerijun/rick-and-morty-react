import { useState, useEffect } from 'react';
import Character from './Character';

function List() {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch data
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );

        const { results } = await data.json();

        setCharacters([...characters, ...results]);
        setLoading(false);
      } catch (error) {
        console.error('Error from useEffect in List.js');
      }
    }

    fetchData();
  }, [page]);

  const handleClick = () => {
    setPage(page + 1);
  };

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
        <button onClick={handleClick}>Load more...</button>
      </div>
    </div>
  );
}

export default List;
