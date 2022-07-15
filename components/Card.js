import Title from "./Title"
import Image from "./Image"
import Type from "./PokemonType"
import CardBody  from "./CardBody"
import { useState } from 'react'

export default function Card({children, Url, Number, ...props}) {
    const CardStyle = "text-shadow: 2px 1px 2px black; color:white";
    const [ pokemon , setPokemon ] = useState({
        Name: props.Title, 
        Url: Url,
        isClicked: 0
    });
    return (
    <>
        <div className="card">
            <div className="card-title">
                <Title key={pokemon.Name} as="p" style={CardStyle}>{pokemon.Name}</Title>
            </div>
            <div className="poke-top">
                <div className="poke-line"></div>
                <div className="poke-btn">
                    <div className="poke-btn-outer"></div>
                </div>
            </div>
            { pokemon.isClicked == 0 ? <CardBody key={pokemon.Url} Url={pokemon.Url} Name={pokemon.Name}></CardBody> : <></> }
        </div>
        <style jsx>{`
            .card {
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