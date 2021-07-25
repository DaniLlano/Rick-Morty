import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const res = await fetch(url)
                const data = await res.json();
                setCharacters(data.results)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCharacters()
    }, [url]);

    return {
        loading,
        characters,
    }
}

export default useFetch;
