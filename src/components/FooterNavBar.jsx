import LinkList from "./LinkList.jsx";


function FooterNavBar(props) {
    console.log(props.linkList);

    const { dcComics, shop, dc, sites } = props.LinkList;
    return (
        <div className="footer-columns">

            <div className="col">
                <h4>DC COMICS</h4>
                <ul className="footer-nav-list">
                    <LinkList links={dcComics} />
                </ul>

                <h4>SHOP</h4>
                <ul className="footer-nav-list">
                    <LinkList links={shop} />
                </ul>
            </div>

            <div className="col">
                <h4>DC</h4>
                <ul className="footer-nav-list">
                    <LinkList links={dc} />
                </ul>
            </div>

            <div className="col">
                <h4>SITES</h4>
                <ul className="footer-nav-list">
                    <LinkList links={sites} />
                </ul>
            </div>

        </div>
    );
}

export default FooterNavBar;