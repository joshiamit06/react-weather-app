import React, { useContext } from 'react'
import { WheatherContext } from '../store/WheatherContext'

function Error() {
    const {error} = useContext(WheatherContext)
    console.log(error);
    console.log("error called")
    
  return (
    <div>{error}</div>
  )
}

export default Error