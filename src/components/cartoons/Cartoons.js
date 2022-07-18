import {useEffect} from "react";

import Section from "../../ui/Section";
import SliderCards from "../../ui/SliderCards";
import useRequest from "../../hooks/use-request";

function Cartoons() {
    const {sendRequest, data} = useRequest('discover/movie?', '&with_genres=35,16&certification.lte=PG')

    useEffect(() => {
        sendRequest()
    }, [sendRequest])

    return (
        <Section>
            <SliderCards array={data} title={'cartoons'} category={'cartoons'}/>
        </Section>
    )
}

export default Cartoons