function Character(character) {
  return (
    <div className="col-4">
      <div className="card">
        <img
          src={character.image}
          alt={character.name}
          className="card-img-top"
        />
        <div className="card-body">
          <h3>{character.name}</h3>
          <p>{`Origin: ${character.origin && character.origin.name}`} </p>
        </div>
      </div>
    </div>
  );
}

export default Character;
