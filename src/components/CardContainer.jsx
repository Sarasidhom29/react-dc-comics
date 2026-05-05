import Card from "./Card";

function MainCardContainer(props) {
    console.log(props.comicsList);
    return (
        <section id="card-container">
            <Card comics={props.comicsList} />
        </section>
    )
};

export default MainCardContainer;