import React, { useEffect } from 'react'

function Daily() {
  useEffect(()=> {
    const dailyData = async () => {
        const response = await fetch(``)
    }
  }, [])

  return (
    <div>Daily</div>
  )
}

export default Daily