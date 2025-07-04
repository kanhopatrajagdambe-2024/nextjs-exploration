import React from 'react'

const ServerComp = async()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
  return (
    <>
    <ul>
        {
            data && data.map(postdata=>{
                return(
                    <li>{postdata.body}</li>
                )
            })
        }
    </ul>
    </>
  )
}

export default ServerComp;
