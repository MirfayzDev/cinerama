import {Fragment} from "react";

import PaginationCards from "../ui/PaginationCards";
import Section from "../ui/Section";
import Header from "../components/header/Header";

function Cartoons() {
    return (
        <Fragment>
            <Header/>
            <Section>
                <PaginationCards title={'cartoons'}
                                 url={'discover/movie?'}
                                 category={'cartoons'}
                                 features={'certification_country=US&with_genres=35,16&certification.lte=PG&sort_by=popularity.desc'}/>
            </Section>
        </Fragment>
    )
}

export default Cartoons