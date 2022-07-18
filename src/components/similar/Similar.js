import {useEffect} from "react";

import useRequest from "../../hooks/use-request";
import SliderCards from "../../ui/SliderCards";

function Similar({id, type}) {
    const {data, sendRequest} = useRequest(`${type}/${id}/similar?`)

    useEffect(() => {
        sendRequest()
    }, [sendRequest])

    return (
        <SliderCards title={'similar'} array={data} category={'similar'}/>
    )
}

export default Similar