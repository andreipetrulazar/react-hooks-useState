import React, {useState} from 'react';
import './App.css';

const App = () => {
  // setting useState for username
  const [username, setUsername] = useState('')

  //setting useState for password

  const [password, setPassword] = useState('')

  //setting useState for hide / show button

  const [showPassword, setShowPassword] = useState(false)


  return (
    <div className='container'>
      <input 
      type="text"
      placeholder = 'Enter Username'
      value = {username}
      onChange = {(e) => {setUsername(e.target.value)}}
      />

      <input 
      // if showPassword is true => the type is text else the type is password
      type= {showPassword ? 'text' : 'password'}
      placeholder='Enter Password'
      value= {password}
      onChange = {(e) => {setPassword(e.target.value)}}
      />

      <h2>The Username is : {username}</h2>
      {/* if showPassword is true => show the password else replace the password with "*****" */}
      <h2>The Password is : {showPassword ? password : '*'.repeat(password.length)}</h2>

      <button
      // if showPassword is true the button will change it to false
      // if showPassword is false the button will change it to true
      onClick = {(e) => {setShowPassword(!showPassword)}} 
      >
        Show / Hide Password
      </button>

    </div>
  )
}

export default App;