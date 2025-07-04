"use client"

import React, { useEffect, useState } from 'react'

export default function ClientComp() {
    const[postData, setPostData] = useState([])

    useEffect(()=>{
       const fetchData = async() =>{
         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
         const data = await res.json();
         setPostData(data)
       }
fetchData()
    }, [])
  return (
    <>
   <ul>
    {
        postData && postData.map(item=>{
            return(
                <li>{item.title}</li>
            )
        })
    }
   </ul>
    </>
  )
}
