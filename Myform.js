//THIS PRGM IS ABOUT FORM VALIDATION...!!!


import React, { useState } from 'react'

function Myform() {
    const [formData, setFormData]=useState({name:"",email:"",password:""})

    const handleChange = (e) =>{                 
        setFormData({...setFormData , [e.target.name]: e.target.value});
     }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!formData.name || !formData.email || formData.password){
            alert("pls fill all the field")
        }
        else{
            console.log("form submitted:",formData);
            
        }
    }


  return (
   <form onClick={handleSubmit}>
      <input name='name' placeholder='Name' onChange={handleChange}/><br/>
      <input name='email' placeholder='Email' onChange={handleChange}/><br/>
      <input name='password' type='Password' placeholder='Password' onChange={handleChange}/><br/>
      <button>Submit</button>
    </form>
  )      
}

export default Myform


//...Myform , copy the existing state to prevent the ovewriting 




