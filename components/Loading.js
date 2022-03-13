function Loading() {
    const randInt = Math.floor(Math.random() * 4);
    const Image = GetImage(randInt);
    return (<>
        <img src={Image}></img>
        <style jsx>{`
            img{
                animation-name: roll;
                animation: 5s linear infinite;
                width: 8%;
                height: 10%;
            }
            @keyframes roll {
                0% { transform: rotate(0deg)}
                25% { transform: rotate(90deg)}
                50% { transform: rotate(180deg)}
                75% { transform: rotate(270deg)}
                100% { transform: rotate(360deg)}
            }
        `}</style>
    </>
    );
}

export default Loading;

function GetImage(Num){
    switch (Num) {
        case 0:
            return "/Icons/Png/Greatball.png";
        case 1:
            return "/Icons/Png/Masterball.png"
        case 2:
            return "/Icons/Png/Pokeball.png"
        case 3:
            return "/Icons/Png/Ultraball.png"
    }
}