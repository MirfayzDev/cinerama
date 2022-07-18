import {Fragment} from "react";

import Section from "../ui/Section";
import PaginationCards from "../ui/PaginationCards";
import Header from "../components/header/Header";

function Serials() {
    return (
        <Fragment>
            <Header/>
            <Section>
                <PaginationCards title={'serials'}
                                 url={'discover/tv?sort_by=popularity.desc'}
                                 category={'serials'}
                                 features={16}/>
            </Section>
        </Fragment>
    )
}

export default Serials