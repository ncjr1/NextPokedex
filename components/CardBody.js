import Image from "./Image";
import usePokemon from "./API/usePokemon";
import Loading from "./Loading";
import  Type from "./PokemonType";
function CardBody({ Url, Name, ...props}) {
    const { data, isLoading, isError } = usePokemon(`${Url}`);
    if(isLoading) return <Loading></Loading>
    return (
        <div className="card-body">
            <Image Url={data.Image} style="width: 75%; height: 75%;" alt={Name}></Image>
            <div className="card-footer">
                {data.Types.map((Index) => { return <Type key={Index.Type.name} type={Index.type.name}>{Index.type.name}</Type> })}
            </div>
            <style jsx>{`
                .card-footer{
                    display: flex;
                    flex-flow: row nowrap;
                    align-items: center;
                    justify-content: space-around;
                }
                .card-body{
                    display: flex;
                    flex-flow: column nowrap;
                    align-items: center;
                    text-align: center;
                    height: 250px;
                    justify-content: center;
                }
            `}</style>
        </div>
    );
}

export default CardBody;