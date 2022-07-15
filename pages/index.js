import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'
import { useState } from "react"

function Home({ pokemons, ...props }) {
  const [ pokemonList, setPokemon ] = useState(pokemons);
  const [ filter, setFilter ] = useState('');
  return (
  <div>
    {/* <div id="search">
      <input key="searchBar" type="text" placeholder="Filter Pokemon by Name" value={filter} onChange={(e) => { setFilter(e.target.value) } } style={{ width: 340 + 'px'}}></input>
    </div> */}
    <div id="home">
      {pokemonList.filter(pokemon => pokemon.name.includes(filter) || filter === "").map((pokemon) => { return <Card key={pokemon.url} Title={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} Url={pokemon.url} Number={pokemon.url.slice(33, 38).replaceAll("/", "")}></Card>})}
    </div>
    <style jsx>{`
      #home {
        display: flex;
        justify-content: space-around;
        flex-flow: row wrap;
        margin-top: 2%;
      }
      #search{
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 3%;
        margin-top: 3%;
      }
    `}</style>
  </div>
  )
}

export async function getStaticProps (context) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
  const data = await res.json()
  if (!data) {
    return {
      notFound: true,
    }
  }

  if(data.results == undefined){
    return { 
      props: { pokemons : data }
    }
  }
  else{
    return {
      props: { pokemons : data.results }, // will be passed to the page component as props
    }
  }
}

export default Home;