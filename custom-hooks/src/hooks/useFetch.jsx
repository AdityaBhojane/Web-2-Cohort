import React, { useEffect, useState } from 'react'

export default function useFetch(url,dep , retry) {
    const [data, setData] = useState([]);
    useEffect(()=>{
        (async ()=>{
           const response = await fetch('');
           const data = response.json;
           setData(data)
        })()
    },[dep]);

    useEffect(()=>{
        setInterval()
    })
  return data
}
