import React from 'react'

function OutputBox({value}) {
  return (
    <div>
      <input value={value} type='text' className='outputbox-input'/>
    </div>
  )
}

export default OutputBox
