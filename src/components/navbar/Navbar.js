import ReactDOM from "react-dom";
import {Fragment, useEffect} from "react";
import styles from "./Navbar.module.css";
import {Link} from "react-router-dom";
import {AnimeIcon, CartoonIcon, CloseIcon, FilmIcon, SerialIcon, UzbekFilmIcon} from "../svgComponents/SvgIcons";

const Nav = ({matches, isOpen, onClickToggle}) => {
    return <Fragment>
        {isOpen && !matches && <div className={styles.backdrop} onClick={onClickToggle}></div>}
        <nav className={matches ? styles.navbar : styles.mobileNavbar}>
            {isOpen && !matches && <div className={styles.topPanel}>
                <button type="button"
                        onClick={onClickToggle}
                        className={styles.iconClose}>
                    <CloseIcon />
                </button>
            </div>}
            <ul>
                <li>
                    <Link to={'/serials'}>{isOpen && !matches && <SerialIcon />}Serials</Link>
                </li>
                <li>
                    <Link to={'/films'}>{isOpen && !matches && <FilmIcon />}Films</Link>
                </li>
                <li>
                    <Link to={'/uzbekFilm'}>{isOpen && !matches && <UzbekFilmIcon />}Uzbek Film</Link>
                </li>
                <li>
                    <Link to={'/cartoons'}>{isOpen && !matches && <CartoonIcon />}Cartoons</Link>
                </li>
                <li>
                    <Link to={'/anime'}>{isOpen && !matches && <AnimeIcon />}Anime</Link>
                </li>
            </ul>
        </nav>
    </Fragment>
}

function Navbar({isOpen, onClickToggle, matches}) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen])


    return (
        <Fragment>
            {!isOpen && matches && <Nav matches={matches}/>}
            {isOpen && !matches && ReactDOM.createPortal(<aside><Nav isOpen={isOpen}
                     matches={matches}
                     onClickToggle={onClickToggle}/></aside>, document.getElementById('sidebar'))}
        </Fragment>
    )
}

export default Navbar