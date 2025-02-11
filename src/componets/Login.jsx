import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { VscGlobe } from 'react-icons/vsc'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Login() {
  let navigate=useNavigate()
  let [errorstate,seterrorstate]=useState(null)
  let [data,setData]=useState([])
  const { register, handleSubmit,formState:{errors} } = useForm()
  function submitHandler(credentials){
    // console.log(credentials)
    setData({...data,credentials})
    fetch(`http://localhost:3000/users?username=${credentials.username}&password=${credentials.password}`)
    .then(res=> res.json() )
    .then(result=>{
      if(result.length===0){
        seterrorstate({message:"username or password is invalid"})
        console.log('first') 
      }
      else{
        console.log("user login succesful")
        navigate('/userprofile',{"state":result[0]})
      }
    })
    .catch(err=>{
      console.log(err)
      seterrorstate(err)
    })
  }
  // console.log(errors )
  return (
    <div style={{minHeight:'90vh'}} className='text-white px-3  jsutify-space-around text-center fs-1 bg-dark'>
      <h1 className='mx-auto fs-1 px-3 py-3 '>LOGIN FORM</h1>
      {
          errorstate!==null && 
          (
            <div className='text-center text-danger'>
            <h1 >errro occured</h1>
            <h1>{errorstate.message}</h1>
            </div>
          ) 
      }
      
      <form className='text-center text-capitalize px-5 text-info' onSubmit={handleSubmit(submitHandler)}>
        <div className='mx-1 form-group my-1'>
          <label className='control-label py-2'>Userame </label>
          <input  style={{maxWidth:'400px'}} className='form-control mx-auto ' type='username' {...register('username' , {required:'true' , minLength:5})} id='username' placeholder='Usename'></input>
          {
            errors.username?.type==='minLength' && <small className='text-center fs-5 text-warning'>*username must have at least 5 characters</small>
          }
          {
            errors.username?.type==='required' && <p className='text-center fs-5 text-warning'>*this field is mandatory</p>
          }
        </div>
        {/* <div className='mx-1 form-group'>
          <label className='py-2'>mail</label>
          <input style={{maxWidth:'400px'}} className='form-control mx-auto ' type='mail' {...register('mail', {required:'true'} )} id='mail' placeholder='mail id'></input>
          {
            errors.mail?.type==='required' && <small className='text-center  fs-5 text-warning'>*this field is mandatory</small>
          }
        </div> */}
        <div className='mx-1 form-group'>
          <label className='py-2'>password </label>
          <input style={{maxWidth:'400px'}} className='form-control mx-auto ' type='password' {...register('password' , {required:'true'})} id='password' placeholder='password'></input>
          {
            errors.password?.type==='required' && <small className='text-center  fs-5 text-warning'>*this field is mandatory</small>
          }
        </div>
        {/* <div className=' mx-1 form-group'>
          <label className='py-2'>comfrim password  </label>
          <input style={{maxWidth:'400px'}} className='form-control mx-auto ' type='password' {...register('confrimpassword' , {required:'true'})} id='confrimpassword' placeholder='Confrim password'></input>
          {
            errors.confrimpassword?.type==='required' && <small className='text-center  fs-5 text-warning'>*this field is mandatory</small>
          }
        </div> */}
        <button type='submit' className='btn btn-success'>LOGIN</button>
      </form>
    </div>
  )
}

export default Login