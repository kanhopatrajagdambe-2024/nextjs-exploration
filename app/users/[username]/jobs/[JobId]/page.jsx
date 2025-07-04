"use client";
import React, { use } from 'react'

export default function RoutiingInClintcomp(props) {
   const user = use(props.params)
   console.log(props);
  return (
    <div>
  username:-{user.username}
  JobId:-{user.JobId}
    </div>
  )
}
