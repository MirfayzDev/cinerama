import {Fragment} from "react";

import PaginationCards from "../ui/PaginationCards";
import Section from "../ui/Section";
import Header from "../components/header/Header";

function UzbekFilm() {
    return (
        <Fragment>
            <Header/>
            <Section>
                <PaginationCards url={'discover/movie?'} title={'uzbek Film'}
                                 category={'uzbekFilm'}
                                 features={'&with_original_language=uz&region=UZ'}/>
            </Section>
        </Fragment>
    )
}

export default UzbekFilm