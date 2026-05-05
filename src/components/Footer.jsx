import FooterNavBar from "./FooterNavBar";
import FooterSocial from "./FooterSocialBar";

function Footer(props) {
    console.log(props.footerLinkList);
    console.log(props.socialLinkList);
    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <FooterNav linkList={props.footerLinkList} />
                    <div className="footer-logo-bg">
                        <img src="/img/dc-logo-bg.png" alt="DC Logo Background" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <FooterSocial linkSocial={props.socialLinkList} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;