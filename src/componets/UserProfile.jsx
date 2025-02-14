// import React, { useState } from 'react'
// import { useLocation } from 'react-router-dom'
// import { useForm } from 'react-hook-form'

// function UserProfile() {
//     let [Toedit,setEdit]=useState(false)
//     const {register , handleSubmit , setValue }=useForm()
//     const locatedobject=useLocation()
//     let [currentUser,SetcurrentUser]=useState(locatedobject.state)
// function editclicked(){
//       console.log(Toedit)
//       console.log(currentUser)
//       setValue('username',currentUser.username)
//       setValue('mail',currentUser.mail)
//       setValue('password',currentUser.password)
//       setEdit(true)
//     }
//     console.log(Toedit)

// function detailsChange(obj){
//       // setEdit(true)
//       console.log(obj)
//     }
//   return (
//   <div>
    
//   {
//     Toedit===false ? 
//     (
//     <div className='text-info py-4 fs-1 text-center'>
//         <h1><span className="text-warning">Username : </span>
//         {currentUser.username}</h1>
//         <h1><span className="text-warning">Mail : </span>
//         {currentUser.mail}</h1>
//         <h1><span className="text-warning">Password : </span>
//         {currentUser.password}</h1>
//         <button onClick={()=>editclicked()} className='btn btn-success'>Edit details</button>
//     </div>
//     )
//     :
//     (
//       <form className='text-center fs-2 py-5' >
//         <label htmlFor='username' className=' text-warning form-label'>username</label>
//         <input style={{width:"40vh"}} type='text' {...register('username')} id="username" className='form-control mx-auto my-2'></input>
//         <label htmlFor='mail' className='form-label text-warning'>mail</label>
//         <input style={{width:"40vh"}} type='mail' {...register('mail')}  id="mail" className='form-control my-2 mx-auto'></input>
//         <label htmlFor='password' className='form-label text-warning'>password</label>
//         <input style={{width:"40vh"}} type='text' {...register('password')} id="password" className='form-control my-2 mx-auto'></input>
//         <button type='submit' className='btn btn-success'>Save details</button>
//       </form> 
//     )
    
//   }
//   </div>
//   )
// }

// export default UserProfile

import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
    let [Toedit, setEdit] = useState(false);
    const { register, handleSubmit, setValue } = useForm();
    const locatedobject = useLocation();
    let [currentUser, SetcurrentUser] = useState(locatedobject.state);
    let navigate=useNavigate()
    function editclicked() {
        setValue('username', currentUser.username);
        setValue('mail', currentUser.mail);
        setValue('password', currentUser.password);
        setEdit(true);
    }

    function deleteuser(id){
        fetch(`http://localhost:3000/users/${id}`,{method:"DELETE"})
        .then(
          res=>res.json()
        )
        .then(
          res=>{
            console.log("detelte action succesful")
            navigate('/signup')
          }
        )
        .catch(
          err=>console.log(err)
        )
      }

    function detailsChange(obj) {
        setEdit(false);
        obj.id=currentUser.id
        console.log(obj)

        fetch(`http://localhost:3000/users/${obj.id}`,{
          method:'PATCH',
          'Content-Type':'application/json',
          body:JSON.stringify(obj),
        })
        .then(
          res=>res.json()
        //   navigate('login')
        )
        .then(
          SetcurrentUser(obj)
        )
        .catch(
          err=>console.log(err)
        )
    }

    return (
        <div>
            {Toedit === false ? (
                <div className='text-info py-4 fs-1 text-center'>
                    <h1><span className="text-warning">Username : </span>{currentUser.username}</h1>
                    <h1><span className="text-warning">Mail : </span>{currentUser.mail}</h1>
                    <h1><span className="text-warning">Password : </span>{currentUser.password}</h1>
                    <button onClick={() => editclicked()} className='btn btn-success'>Edit details</button>
                </div>
            ) : (
                <form className='text-center fs-2 py-5' onSubmit={handleSubmit(detailsChange)}>
                    <label htmlFor='username' className='text-warning form-label'>Username</label>
                    <input style={{ width: "40vh" }} type='text' {...register('username')} id="username" className='form-control mx-auto my-2'></input>
                    <label htmlFor='mail' className='form-label text-warning'>Mail</label>
                    <input style={{ width: "40vh" }} type='email' {...register('mail')} id="mail" className='form-control my-2 mx-auto'></input>
                    <label htmlFor='password' className='form-label text-warning'>Password</label>
                    <input style={{ width: "40vh" }} type='text' {...register('password')} id="password" className='form-control my-2 mx-auto'></input>
                    {/* <div className='d-flex mx-auto'> */}
                        <button className='btn btn-success'>Save details</button>
                        <button className='btn btn-danger mx-2' onClick={()=>deleteuser(currentUser.id)}>Delete profile</button>
                    {/* </div> */}
                </form>
            )}
        </div>
    );
}

export default UserProfile;
