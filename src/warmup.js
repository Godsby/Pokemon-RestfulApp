// WARM UP! Render a component that has a button that toggles between ‘show all pokemon’ and ‘hide all pokemon’. You should use the pokemon api. This should be done with React.



import React from 'react'

const Pokemon = (props) => {
  const pokemons = props.pokemon.map(pokemon => <li>{pokemon.name}</li>)
  return (
    <>
      {pokemons}
    </>
  )
}

export default Pokemon;