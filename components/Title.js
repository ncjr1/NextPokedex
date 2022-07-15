export default function Title({children, as, style}) {
    const Tag = as;
    return (
        <div>
            <Tag>
                {children}
            </Tag>
            <style jsx>{`
                ${Tag}{
                    color: black;
                    font-family: Pokemon, sans-serif;
                    text-align: center;
                    height : 50px; 
                    display: flex; 
                    align-items: center;
                    ${style}
                }
            `}</style>
        </div>
    );
}