import {Fragment} from "react";

import PaginationCards from "../ui/PaginationCards";
import Section from "../ui/Section";
import Header from "../components/header/Header";

function Anime() {
    return (
        <Fragment>
            <Header/>
            <Section>
                <PaginationCards title={'anime'}
                                 category={'anime'}
                                 url={'discover/tv?'}
                                 features={'&with_genres=16,10759'}/>
            </Section>
        </Fragment>
    )
}

export default Anime