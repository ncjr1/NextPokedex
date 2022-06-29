import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'

function Home({ pokemons }) {
  return (
  <>
    <div id="home">
      {pokemons.map((pokemon) => { return <Card Title={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} Url={pokemon.url} Number={pokemon.url.slice(33, 38).replaceAll("/", "")}></Card>})}
    </div>
    <style jsx>{`
      #home {
        display: flex;
        justify-content: space-around;
        flex-flow: row wrap;
        margin-top: 2%;
      }
    `}</style>
  </>
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