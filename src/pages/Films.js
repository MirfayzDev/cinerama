import {Fragment} from "react";

import PaginationCards from "../ui/PaginationCards";
import Section from "../ui/Section";
import Header from "../components/header/Header";

function Films() {
    return (
        <Fragment>
            <Header/>
            <Section>
                <PaginationCards title={'films'}
                                 category={'films'}
                                 url={'discover/movie?'}
                                 features={'16'}/>
            </Section>
        </Fragment>
    )
}

export default Films