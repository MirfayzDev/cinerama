import {useEffect} from "react";

import Section from "../../ui/Section";
import SliderCards from "../../ui/SliderCards";
import useRequest from "../../hooks/use-request";

function Serials() {
    const {sendRequest, data} = useRequest('discover/tv?sort_by=popularity.desc', '&without_genres=10759,16')

    useEffect(() => {
        sendRequest()
    }, [sendRequest])

    return (
        <Section>
            <SliderCards array={data} title={'serials'} category={'serials'}/>
        </Section>
    )
}

export default Serials