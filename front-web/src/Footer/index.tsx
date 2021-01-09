import './styles.css';
import {ReactComponent as YouTubeIcon} from './youtube.svg';
import {ReactComponent as Instagram} from './instagram.svg';
import {ReactComponent as Linkedin} from './linkedin.svg';



function Footer(){
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href ="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g" target="_new">
                    <YouTubeIcon/>
                </a>
                <a href="https://www.linkedin.com/feed/" target="_new"> 
                    <Linkedin/>
                </a>
                <a href="http://www.instagram.com/devsuperior.ig/">
                    <Instagram/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;