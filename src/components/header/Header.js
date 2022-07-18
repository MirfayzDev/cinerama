import {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar";

import styles from './Header.module.css'
import {HamburgerIcon, Logo} from "../svgComponents/SvgIcons";

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [isSidebar, setIsSidebar] = useState(false)
    const [matches, setMatches] = useState(window.matchMedia('(min-width: 62em)').matches)

    useEffect( () => {
        window
            .matchMedia("(min-width: 62em)")
            .addEventListener('change', e => setMatches(e.matches));
        setIsShow(matches && !isOpen)
        setIsSidebar(!matches)
    }, [matches, isOpen])

    const onClickToggleHandler = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <header className={styles.header}>
            <button type="button" onClick={onClickToggleHandler} className={styles.iconSidebar}>
                <HamburgerIcon/>
            </button>
            <div className={styles.logo}>
                <Logo/>
            </div>
            {
                isShow && <Navbar matches={matches}/>
            }
            {
                isSidebar && <Navbar isOpen={isOpen} matches={matches} onClickToggle={onClickToggleHandler}/>
            }
        </header>
    )
}

export default Header
