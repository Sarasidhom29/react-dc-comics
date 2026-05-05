import HeaderNavBar from "./HeaderNavBar.jsx";
import Logo from "./Logo.jsx";


function Header(props) {
    console.log(props.links);
    return <header className="header">
        <div className="container">
            <Logo />
            <HeaderNavBar linksNavbar={props.links} />
        </div>
    </header>
}

export default Header;