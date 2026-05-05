import ImgList from "./ImgList.jsx";

function ActionNavbar(props) {
    console.log(props.actionElem);
    return <div className="main-navbar">
        <ul className="action-bar-list">
            <ImgList elements={props.actionElem} />
        </ul>
    </div>
};

export default ActionNavbar;