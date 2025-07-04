import React from 'react'

const DynamicRouteSegment = async(props) => {
    const user = await props.params;
    console.log(user)
  return (
    <div>
        username: {user.username}
    </div>
  )
}

export default  DynamicRouteSegment;
