import React from 'react'
import Javanote from "./../assites/Javanote.pdf"
function Javanotes() {
  return (
    <div className='container'>
      <iframe src={Javanote} className="w-100" height="500px" frameborder="0"></iframe>
    </div>  )
}

export default Javanotes