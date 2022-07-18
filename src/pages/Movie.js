import {Fragment, useEffect} from "react";
import {useParams} from "react-router-dom";

import useRequest from "../hooks/use-request";
import MovieVideo from "../components/movie/MovieVideo";
import Similar from "../components/similar/Similar";
import Section from "../ui/Section";
import MovieDetails from "../components/movieDetails/MovieDetails";
import Header from "../components/header/Header";

function Movie({type}) {
    const params = useParams()
    const id = params.id
    const {sendRequest, data} = useRequest(`${type}/${id}?`, '&append_to_response=videos')

    useEffect(() => {
        sendRequest()
    }, [sendRequest])

    return (
        <Fragment>
            <Header/>
            <MovieVideo data={data}/>
            <Section>
                <MovieDetails data={data}/>
                <Similar id={id} type={type}/>
            </Section>
        </Fragment>
    )
}

export default Movie