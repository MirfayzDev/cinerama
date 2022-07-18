import {useEffect} from "react";

import Section from "../../ui/Section";
import SliderCards from "../../ui/SliderCards";
import useRequest from "../../hooks/use-request";

function Anime() {
    const {sendRequest, data} = useRequest('discover/tv?', '&with_genres=10759,16')

    useEffect(() => {
        sendRequest()
    }, [sendRequest])

    return (
        <Section>
            <SliderCards array={data} title={'anime'} category={'anime'}/>
        </Section>
    )
}

export default Anime