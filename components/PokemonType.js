import Image from './Image'
import Title from './Title'

export default function PokemonType({ type, children }) {
    const svgUrl = `/Icons/Types/${type}.svg`;
    const [ bgColor, textColor ] = getColorByType(type);
    const titleStyle = "font-size: 13px;" + textColor;
    return (
    <>
        <div id="type-card">
            <Image Url={svgUrl} style="width: 15%; height: 15%;"></Image>
            <Title as="p" style={titleStyle}>{children.charAt(0).toUpperCase() + children.slice(1)}</Title>
        </div>
        <style jsx>{`
            #type-card{
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                justify-content: space-around;
                border-radius: 7px;
                border: 1px solid;
                max-width:  45%;
                max-height: 50%;
                background-color : ${bgColor};
            }
        `}</style>
    </>
    );
}

function getColorByType(type){
    //If needed, the color of the text will change to maximize the contrast
    switch (type) {
        case 'flying':
            return [";background :linear-gradient(0deg, rgba(219,208,205,1) 0%, rgba(164,184,190,1) 45%, rgba(61,181,239,1) 100%);", "color: black"]
        
        case 'fire':
            return [";background: linear-gradient(0deg, rgba(224,42,10,1) 0%, rgba(253,125,36,1) 100%);", "color: white"]
        
        case 'grass':
            return [";background: linear-gradient(0deg, rgba(89,147,0,1) 0%, rgba(155,204,80,1) 100%);", "color: black"]
        
        case 'poison':
            return [";background: linear-gradient(0deg, rgba(118,6,149,1) 0%, rgba(185,127,201,1) 100%);", "color: white"]
        
        case 'water':
            return [";background: linear-gradient(0deg, rgba(40,96,133,1) 0%, rgba(69,146,196,1) 100%);", "color: white"]

        case 'bug':
            return [";background: linear-gradient(0deg, rgba(114,159,63,1) 0%, rgba(79,131,20,1) 100%);", "color: white"]

        case 'normal':
            return [";background: linear-gradient(0deg, rgba(77,77,77,1) 0%, rgba(164,172,175,1) 100%);", "color: black"]
        
        case 'electric':
            return [";background: linear-gradient(0deg, rgba(246,230,128,1) 0%, rgba(238,213,53,1) 100%);", "color: black"]
        
        case 'ground':
            return [";background: linear-gradient(0deg, rgba(171,152,66,1) 0%, rgba(173,155,55,1) 44%, rgba(247,222,63,1) 100%);", "color: black"]
        
        case 'fairy':
            return [";background: linear-gradient(0deg, rgba(228,195,219,1) 0%, rgba(253,185,233,1) 100%);", "color: black"]
        
        case 'fighting':
            return [";background: linear-gradient(0deg, rgba(140,70,26,1) 0%, rgba(213,103,35,1) 100%);", "color: white"]
        
        case 'psychic':
            return [";background: linear-gradient(0deg, rgba(142,19,91,1) 0%, rgba(243,102,185,1) 100%);", "color: white"]
        
        case 'rock':
            return [";background: linear-gradient(0deg, rgba(112,93,2,1) 0%, rgba(163,140,33,1) 100%);", "color: white"]
        
        case 'steel':
            return [";background: linear-gradient(0deg, rgba(82,98,98,1) 0%, rgba(158,183,184,1) 100%);", "color: black"]
        
        case 'ice':
            return [";background: linear-gradient(0deg, rgba(153,230,254,1) 0%, rgba(81,196,231,1) 100%);", "color: white"]

        case 'ghost':
            return [";background: linear-gradient(0deg, rgba(55,17,116,1) 0%, rgba(123,98,163,1) 100%);", "color: white"]
        
        case 'dragon':
            return [";background: linear-gradient(0deg, rgba(241,110,87,1) 0%, rgba(83,164,207,1) 100%);", "color: white"]
        
        case 'dark':
            return [";background: linear-gradient(0deg, rgba(15,15,15,1) 0%, rgba(112,112,112,1) 100%);", "color: white"]
        
        default:
            return ["", ""]
    }
}