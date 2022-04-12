import { useState, useEffect } from 'react'
import Wrapper from '../assets/wrappers/RegisterPage'
import { Logo, FormRow } from '../components'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  //global state and useNavigate

  const handleChange = (e) => {
    console.log(e.target)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        {/* name input */}
        <FormRow
          type='text'
          name='name'
          value={values.name}
          onChange={handleChange}
        ></FormRow>
        {/* email input */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          onChange={handleChange}
        ></FormRow>
        {/* password input */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          onChange={handleChange}
        ></FormRow>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </Wrapper>
  )
}

export default Register
