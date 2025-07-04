import React from 'react'

const  NestedDynamicRoutes = async (props)=> {
    const user = await  props.params
    console.log("user", user)
  return (
    <>
    user:{user.username} 
     PostId:- {user.PostId}
    </>
  )
}

export default NestedDynamicRoutes;
