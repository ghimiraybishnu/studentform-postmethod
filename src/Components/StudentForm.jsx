import React, { useState } from 'react'
import './Student.css'
import { createUser } from '../apis/Users';

 function StudentForm() {
    const [Student,  setStudent] = useState({
        name: "",
    roll: "",
    job: "",
    gender: "",
    });

const handleSubmit=()=>{
  createUser(Student).then((resp)=>{
    console.log('user addeded succesfully',resp)
  })
}



  return (
    <div className="hello">
        <fieldset>
            <legend>Student Form</legend>
      <form onSubmit={()=>{console.log(Student)}} style={{display:"grid", gap:"1rem"}}>

        <input onChange={(e)=> {Student.name = e.target.value; setStudent({ Student }); }} required value= {Student.name} placeholder='name' />
        <input onChange={(e)=> {Student.roll = e.target.value; setStudent({ Student }); }} required value= {Student.roll} placeholder='RollNo' />
        <input onChange={(e)=> {Student.job = e.target.value; setStudent({ Student }); }} required value= {Student.job} placeholder='Job' />

        


    
    <select
        onChange={() => {}}
        required
         value= {Student.gender} placeholder='gender' >
     
        
        
        <option value={'male'}>Male</option>
        <option value={'female'}>feMale</option>
        <option value={'Others'}>Others</option>
        </select>
        <button type='submit'> Submit </button>
        </form>
        </fieldset>
         </div>
  );
}
export default StudentForm;