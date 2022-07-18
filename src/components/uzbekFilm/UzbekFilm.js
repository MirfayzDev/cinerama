import {useEffect} from "react";
import useRequest from "../../hooks/use-request";

import Section from "../../ui/Section";
import SliderCards from "../../ui/SliderCards";

function UzbekFilm() {
    const {sendRequest, data} = useRequest('discover/movie?', '&with_original_language=uz&region=UZ&sort_by=release_date.desc')

    useEffect(() => {
        sendRequest()
    }, [sendRequest])

    return (
        <Section>
            <SliderCards array={data} title={'uzbek Film'} category={'uzbekFilm'}/>
        </Section>
    )
}

export default UzbekFilm