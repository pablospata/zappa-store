const ComponenteA = ({ curso, comision, coder, tomarValor }) => {
    coder();
    tomarValor(4);

    return (
        <>
            <div>ComponenteA</div>
            <h1>{curso}</h1>
            <h2>{comision}</h2>
        </>
    )
}

export default ComponenteA