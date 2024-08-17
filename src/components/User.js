import React from 'react'

const User = ({name}) => {
  return (
    <div className='user-card'>
        <h2>Name: {name}</h2>
        <h3>Location: Pune</h3>
    </div>
  )
}

export default User