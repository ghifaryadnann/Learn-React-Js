import React, { useState } from 'react'

const Belajarhuk = () => {
    const [count, setCount] = useState(0)

  return (
    <div className='container'>
        <div className='wrapper'>
        <div>
            <p>{count >= 11 ? <span>Lebih dari sepuluh</span> : <span>{count}</span>}</p>
            
            <button onClick={() => setCount(count + 1)}>

            Click me
            </button>
        </div>
        </div>
    </div>
  )
}

export default Belajarhuk