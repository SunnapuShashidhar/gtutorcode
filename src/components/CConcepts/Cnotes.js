import React from 'react'
import Ccs from "../../assites/Ccs.pdf"
function Cnotes() {
  return (
    <div className='container'>
      <iframe src={Ccs} className='w-100' height="500px" frameborder="0"></iframe>
    </div>
  )
}

export default Cnotes