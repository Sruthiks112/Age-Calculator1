import React,{useState} from 'react'
import './calculate.css'
import { useSelector, useDispatch } from 'react-redux'
import { calculateAge } from './calculateSlice'
import SuggestedProducts from './SuggestedProducts'
export function Calculate() {
  const Dob = useSelector(state => state.calculate.age)
  let newdob;
  const dispatch = useDispatch()
  return(
      <div>
      <div className="header">
          <form onSubmit={()=>dispatch(calculateAge(newdob))}>
          <p>Enter Name</p>
          <input type="name" required />
          <p>Enter DOB:</p>  
          <input type="date" onChange={(e)=>newdob=e.target.value} required/>
          <button >calculate Age</button>
          <p>{Dob}</p>
          </form>
       </div>
       <div>
          {Dob>0 && <SuggestedProducts age={Dob}/>} 
       </div>
       </div>
          
      
  )}