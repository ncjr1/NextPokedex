import Title from "./Title"
import Image from "./Image"
import Type from "./PokemonType"
import { useState } from 'react'
import getPokemon from './API/usePokemon'

export default function Card({children, Url, Number, ...props}) {
    const CardStyle = "text-shadow: 2px 1px 2px black; color:white"
    const CardClassName = `card-${props.Number}`;
    const pokemonData  = getPokemon(`${Url}`);
    const [ pokemon , setPokemon ] = useState([{
        Name : props.Title,
        Url : Url,
        Image: pokemonData.Image,
        Types : pokemonData.Types
    }]);
    console.log(pokemon);
    return (
    <>
        <div className={CardClassName}>
            <div className="card-title">
                <Title as="p" style={CardStyle}>{pokemon[0].Name}</Title>
            </div>
            <div className="poke-top">
                <div className="poke-line"></div>
                <div className="poke-btn">
                    <div className="poke-btn-outer"></div>
                </div>
            </div>
            <div className="card-body">
                <Image Url={pokemon[0].Image} style="width: 75%; height: 75%;" alt={pokemon[0].Name}></Image>
                <div className="card-footer">
                    {pokemon[0].Types.map((Index) => { return <Type type={Index.type.name}>{Index.type.name}</Type> })}
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
