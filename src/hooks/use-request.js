import {useState, useCallback} from "react";

const base_url = 'https://api.themoviedb.org/3/'

function useRequest(url, features= '') {
    const [data, setData] = useState([])
    const [totalPages, setTotalPages] = useState('')

    const sendRequest = useCallback(async (page) => {
        try {
            const response = await fetch(`${base_url}${url}&api_key=${process.env.React_App_Movie_Api}&page=${page || 1}${features}`)
            const data = await response.json()
            const result = data?.results?.filter(item => item.poster_path) || data
            setTotalPages(data?.total_pages)
            setData(result)
        } catch (error) {
            console.log(error)
        }
    }, [url, features])

    return {sendRequest, data, totalPages}
}

export default useRequest