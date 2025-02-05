import React from 'react'
import { useForm } from 'react-hook-form'

function Login() {
  const { register, handleSubmit, errors } = useForm()
  function submitHandler(obj){
    console.log(obj)
  }

  return (
    <div style={{minHeight:'90vh'}} className='text-white px-3 jsutify-space-around text-center fs-1 bg-primary'>
      <h1 className='mx-auto fs-1 px-3 py-3 '>LOGIN FORM</h1>
      <form className='text-center text-capitalize px-5 text-info' onSubmit={()=>{handleSubmit(submitHandler())}}>
        <div className='mx-1 form-group my-1'>
          <label className='control-label py-2'>Name </label>
          <input {...register('username' , {minLength:5})} style={{maxWidth:'400px'}} className='form-control mx-auto yx-2' type='username' id='username' placeholder='Usename'></input>
          {/* {
            errors.username?.required===true && console.log("error occured")
          } */}
        </div>
        <div className='mx-1 my-1 form-group'>
          <label className='py-2'>mail</label>
          <input style={{maxWidth:'400px'}} className='form-control mx-auto yx-2' type='mail' id='mail' placeholder='mail id'></input>
        </div>
        <div className='mx-1 my-1 form-group'>
          <label className='py-2'>password </label>
          <input style={{maxWidth:'400px'}} className='form-control mx-auto yx-2' type='password' id='password' placeholder='password'></input>
        </div>
        <div className=' mx-1 my-1 form-group'>
          <label className='py-2'>comfrim password  </label>
          <input style={{maxWidth:'400px'}} className='form-control mx-auto yx-2' type='password' id='password' placeholder='password'></input>
        </div>
        <button type='submit' className='btn btn-success'>submit</button>
      </form>
    </div>
  )
}

export default Login