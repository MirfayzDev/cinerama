import {Fragment} from "react";
import {Route, Routes} from "react-router-dom";

import Layout from "./pages/Layout";
import Films from "./pages/Films";
import Serials from "./pages/Serials";
import UzbekFilm from "./pages/UzbekFilm";
import Cartoons from "./pages/Cartoons";
import Anime from "./pages/Anime";
import Movie from "./pages/Movie";

function App() {
    return (
        <Fragment>
            <Routes>
                <Route path={'/'} element={<Layout/>}/>
                <Route path={'/films'} element={<Films/>}/>
                <Route path={'/films/:id'} element={<Movie type={'movie'}/>}/>
                <Route path={'/serials'} element={<Serials/>}/>
                <Route path={'/serials/:id'} element={<Movie type={'tv'}/>}/>
                <Route path={'/uzbekFilm'} element={<UzbekFilm/>}/>
                <Route path={'/uzbekFilm/:id'} element={<Movie type={'movie'}/>}/>
                <Route path={'/cartoons'} element={<Cartoons/>}/>
                <Route path={'/cartoons/:id'} element={<Movie type={'movie'}/>}/>
                <Route path={'/anime'} element={<Anime/>}/>
                <Route path={'/anime/:id'} element={<Movie type={'tv'}/>}/>
                <Route path={'/banner/:id'} element={<Movie type={'movie'}/>}/>
                <Route path={'/similar/:id'} element={<Movie type={'movie'}/>}/>
            </Routes>
        </Fragment>
    );
}

export default App;
