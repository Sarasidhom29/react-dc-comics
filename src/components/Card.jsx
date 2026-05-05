function Card(props) {
    console.log(props.comics)
    const listCardJsx = props.comics.map(comic => {
        const { id, series, thumb } = comic;
        return (
            <figure key={id}>
                <div className="image-box">
                    <img src={thumb} alt={series} />
                </div>
                <figcaption>{series}</figcaption>
            </figure>
        )
    });
    return <article className="comic-thumb">
        {listCardJsx}
    </article>
}
export default Card;