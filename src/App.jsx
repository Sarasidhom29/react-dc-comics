import linkNavigazioneHeader from "./info/headerLinks.js";
import comics from "./info/comics.js";
import ActionElem from "./info/actionElem.js";
import dcLinksFooter from "./info/footerLinks.js";
import socialLinks from "./info/socialLinks.js";

import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";


function App() {

  return <>
    <Header links={linkNavigazioneHeader} />
    <Main comicsListObj={comics} actionListLinks={ActionElem} />
    <Footer footerLinkList={dcLinksFooter} socialLinkList={socialLinks} />
  </>

}

export default App
