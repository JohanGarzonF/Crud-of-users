import React from 'react'

const Form = ({register, reset, handleSubmit, createUser, setIsShow, updateUser,objectUpdate}) => {

  const resetForm = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birthday: ''
  }

  const submit = data => {
    if(objectUpdate !== undefined){
      updateUser(objectUpdate.id, data)
      reset(resetForm)
      setIsShow(false)
    } else {
      createUser(data)
      reset(resetForm)
      setIsShow(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='form-container'>
      <div className='form'>
        <h2>New User</h2>
        <div className='inputs firstdiv-form'>
          <span><i className="fa-solid fa-user"></i></span>
          <input type="text" id='name' {...register('first_name')}  placeholder='first name' className='size2'/>
          <input type="text" id='last_name' {...register('last_name')}  placeholder='last name' className='size2'/>
        </div>
        <div className='inputs'>
          <span><i className="fa-solid fa-envelope"></i></span>
          <input type="text" id='email' {...register('email')} placeholder='email' className='size'/>
        </div>
        <div className='inputs'>
          <span><i className="fa-solid fa-key"></i></span>
          <input type="text" id='password' {...register('password')} placeholder='password' className='size'/>
        </div>
        <div className='inputs'>
          <span><i className="fa-solid fa-calendar"></i></span>
          <input type="date" id='birthday' {...register('birthday')} className='size'/>
        </div>
        <button className='btn'>Send</button>
      </div>
    </form>
  )
}

export default Form