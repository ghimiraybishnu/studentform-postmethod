import React, { useState } from 'react'

 function StudentForm() {
    const [Student,  setStudent] = useState({
        name: "",
    roll: "",
    class: "",
    gender: "",
    });





  return (
    <div>
        <fieldset>
            <legend>Student Form</legend>
      <form onSubmit={()=>{console.log(Student)}} style={{display:"grid", gap:"1rem"}}>

        <input onChange={(e)=> {Student.name = e.target.value; setStudent({ Student }); }} required value= {Student.name} placeholder='name' />
        <input onChange={(e)=> {Student.roll = e.target.value; setStudent({ Student }); }} required value= {Student.roll} placeholder='RollNo' />
        <input onChange={(e)=> {Student.class = e.target.value; setStudent({ Student }); }} required value= {Student.class} placeholder='class' />

        


    
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