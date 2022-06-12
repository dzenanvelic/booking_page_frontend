import { useEffect, useState } from 'react'
import axios from 'axios'
//fetch ad refetch data
export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {

                const res = await axios.get(url)
                setData(res.data)
                setLoading(false)
            } catch (error) {
                setError(error)
            }

        }

        fetchData()

    }, [url])

    const reFetch = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url);
            setData(res.data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setError(err);
        }

    };

    return { data, loading, error, reFetch };
}