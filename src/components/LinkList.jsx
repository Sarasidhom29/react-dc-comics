function LinkList(props) {
    const elementoLista = props.links.map(listaEl => {
        const { id, url, text } = listaEl;
        return (
            <li key={id}>
                <a href={url}>{text}</a>
            </li>
        )
    });
    return (
        <>{elementoLista}</>
    );
}

export default LinkList;