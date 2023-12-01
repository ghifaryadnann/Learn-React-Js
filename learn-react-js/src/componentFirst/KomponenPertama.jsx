import React from 'react'

const KomponenPertama = (props) => {
  return (
    <div className='container'>
        <div className='wrapper'>
           <h1>Daftar Nama Orang Ganteng</h1>
           <hr/>
           <ul>
            <li>Nama : {props.name}</li>
            <li>Umur : {props.age}</li>
            <li>Hobi : {props.hobi}</li>

           </ul>
        </div>
        
        
    </div>
  )
}

export default KomponenPertama