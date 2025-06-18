import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h3>{count}</h3>
        <button className='bg-blue-500' onClick={()=>setCount((prevCount)=>prevCount+1)}>Increment</button>
    </div>
  )
}
