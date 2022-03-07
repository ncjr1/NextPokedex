export default function Image({ Url, style, ...props }) {
    return (
        <>
            <img src={Url} alt={props.alt}></img>
            <style jsx>{`
                img {
                    ${style}
                }
            `}</style>
        </>
    );
}