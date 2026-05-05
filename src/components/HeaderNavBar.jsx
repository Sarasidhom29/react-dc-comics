import LinkList from "./LinkList.jsx";

function HeaderNavBar(props) {
    console.log(props.linksNavbar)
    return (
        <nav className="header-menu">
            <LinkList links={props.linksNavbar} />
        </nav>
    )
};

export default HeaderNavBar;