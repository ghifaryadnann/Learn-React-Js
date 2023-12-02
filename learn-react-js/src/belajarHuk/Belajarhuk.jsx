import React, { useState } from 'react'
import { Button } from 'flowbite-react'

const Belajarhuk = () => {
    const [count, setCount] = useState(0)
const nambahNilai = () => setCount (count + 1)
    const kurangNilai = () => setCount ( count - 1)
    const resetNilai = () => setCount (0)
  return (
    <div className='container'>
        <div className='wrapper'>
        <div>
            <p>{count >= 11  ? <span>Lebih dari sepuluh</span> : <span>{count}</span>}</p>
            <Button color="success" onClick={nambahNilai}>Success</Button>
            <Button color="gray" onClick={kurangNilai}>Kurang</Button>
            <Button color="success" onClick={resetNilai}>Reset</Button>
        </div>
        
        </div>
    </div>
  )
}

export default Belajarhuk