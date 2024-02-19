import { useState, useEffect } from 'react';

const useFetch=(url)=>{ 

    const [data,setData] = useState(null);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false); 

    useEffect(() => {
        setLoading(true);   
        fetch(url)
          .then((res) => res.json())
          .then((data) => setData(data.dades))
          .catch((error) => setError(error))
          .finally(() => setLoading(false));
      }, [url]);

    return [ data, error, loading ]

}

export default useFetch;