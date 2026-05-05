import ImgList from "/ImgList.jsx";


function FooterSocialBar(props) {
    console.log(props.linkSocial);
    return (
        <section className="footer-social-bar">
            <div className="footer-social-container">

                
                <div className="footer-btn">
                    <button>SIGN-UP NOW!</button>
                </div>

                
                <div className="footer-icons">
                    <span>FOLLOW US</span>
                    <ul>
                        <ImgList elements={props.linkSocial} />
                    </ul>
                </div>

            </div>
        </section>
    );
}

export default FooterSocialBar;