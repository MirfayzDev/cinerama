import {useEffect} from "react";

import Section from "../../ui/Section";
import SliderCards from "../../ui/SliderCards";
import useRequest from "../../hooks/use-request";

function Films() {
    const {sendRequest, data} = useRequest('discover/movie?', '&without_genres=16,35,10749&page=2')

    useEffect(() => {
        sendRequest()
    }, [sendRequest])

    return(
        <Section>
            <SliderCards array={data} title={'films'} category={'films'}/>
        </Section>
    )
}

export default Films