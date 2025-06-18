"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Counter from './counter';

export default function ServerComponent() {
    const [postdata, setPostData] = useState(null)
    

    useEffect(()=>{
      const fetchData = async()=>{
     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPostData(data);
      console.log("data",data)

      }
      fetchData()

    }, [])
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                postdata && postdata.map(postitem=>{
                    return(
                        <>
                        <li key={postitem.userId}>{postitem.title}</li>
                        </>
                    )
                })

                }

              </div>
              <Counter />
    </>
  )
}
