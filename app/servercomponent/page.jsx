import React from 'react'

 const servercomponent = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  console.log(data)
  return (
    <>
    <ul className='grid grid-cols-4'>
       {
         data && data.map(item=>{
            return(
                <li key={item.userId}>{item.title}</li>
            )
        })
       }
    </ul>
    </>
  )
}
export default servercomponent;