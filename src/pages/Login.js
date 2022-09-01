import React from 'react'
import 'styles/login.scss'

const Login = () => {
  return (
    <div className='login'>
      <form className='login__form'>
        <div className='login__form_item'>
          <label htmlFor='username'>نام کاربری</label>
          <input type='text' id='username' name='username' />
        </div>
        <div className='login__form_item'>
          <label htmlFor='password'>نام کاربری</label>
          <input type='text' id='password' name='password' />
        </div>
      </form>
    </div>
  )
}

export default Login
