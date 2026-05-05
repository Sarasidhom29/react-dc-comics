import Card from "./Card";

function CardContainer(props) {
    console.log(props.comicsList);
    return (
        <section id="card-container">
            <Card comics={props.comicsList} />
        </section>
    )
};

export default CardContainer;