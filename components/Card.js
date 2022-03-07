import Title from "./Title"
import useSWR from "swr"
import Image from "./Image"
import Type from "./PokemonType"
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Card({children, Url, Number, ...props}) {
    const CardStyle = "text-shadow: 2px 1px 2px black; color:white"
    const { data, error } = useSWR(`${Url}`, fetcher)
    const CardClassName = `card-${props.Number}`; 
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return (
    <>
        <div className={CardClassName}>
            <div className="card-title">
                <Title as="p" style={CardStyle}>{props.Title}</Title>
            </div>
            <div className="poke-top">
                <div className="poke-line"></div>
                <div className="poke-btn">
                    <div className="poke-btn-outer"></div>
                </div>
            </div>
            <div className="card-body">
                <Image Url={data.sprites.front_default} style="width: 75%; height: 75%;" alt={props.Title}></Image>
                <div className="card-footer">
                    {data.types.map((Index) => { return <Type type={Index.type.name}>{Index.type.name}</Type> })}
                </div>
            </div>
        </div>
        <style jsx>{`
            .${CardClassName} {
                display: flex;
                flex-direction: column;
                justify-content: center;
                border: 1px solid;
                width: 325px;
                margin-bottom: 1%;
                border-radius: 7px;
            }
            .card-title{
                display: flex;
                align-items: center;
                border-bottom: 1px solid;
                justify-content: center;
                background-color: #F2010B;
                border-radius: 7px 7px 0 0;
            }
            .card-body{
                display: flex;
                flex-flow: column nowrap;
                align-items: center;
                text-align: center;
                height: 250px;
                justify-content: center;
            }
            .card-footer{
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                justify-content: space-around;
            }
            .poke-line{
                height: 20%;
                width: 100%;
                background-color: #080000;
            }
            .poke-btn{
                width: 30px;
                height: 30px;
                background-color: black;
                transform: translate(143px, -13px);
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .poke-btn-outer{
                width: 22px;
                height: 22px;
                background-color: #EAEAEA;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `}</style>
    </>
    );
}

export async function getStaticProps (context) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { pokemons : data.results }, // will be passed to the page component as props
    }
}
