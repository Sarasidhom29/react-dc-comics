function ImgList(props) {
    const listaImgJsx = props.elements.map(element => {
        const { id, img, text, alt } = element;
        let esisteTesto = (text) ? <span>{text}</span> : null;
        return (
            <li key={id}>
                <a href="#">
                    <img src={img} alt={alt} />
                    {esisteTesto}
                </a>
            </li>
        )
    })
    return <>
        {listaImgJsx}
    </>
}
export default ImgList;