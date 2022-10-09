import React, {useState} from 'react'

function DatePick() {
  const data = [1,2,3,4,5];
  const [value, setValue]=useState("")

  return (
    <div>
      <input list='data' onChange={(e)=>setValue(e.target.value)} placeholder='jose' />
      
      <datalist id='data'>
        {data.map((option)=><option>{option}</option>)}
      </datalist>
      <h1>{value} {value}</h1>
    </div>
  )
}

export default DatePick;