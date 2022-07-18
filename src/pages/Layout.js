import {Fragment} from "react";
import {Link} from "react-router-dom";

import Header from "../components/header/Header";
import Serials from "../components/serials/Serials";
import UzbekFilm from "../components/uzbekFilm/UzbekFilm";
import Films from "../components/films/Films";
import Cartoons from "../components/cartoons/Cartoons";
import Anime from "../components/anime/Anime";
import Slider from "../components/slider/Slider";
import Footer from "../components/footer/Footer";

function Layout() {
    return (
        <Fragment>
            <Header/>
            <main className={'main-layout'}>
                <Slider/>
                <Link to={'/serials'}><Serials/></Link>
                <Link to={'/uzbekFilm'}><UzbekFilm/></Link>
                <Link to={'/films'}><Films/></Link>
                <Link to={'/cartoons'}><Cartoons/></Link>
                <Link to={'/anime'}><Anime/></Link>
            </main>
            <Footer/>
        </Fragment>
    )
}

export default Layout