import React,{useState} from 'react'
import { API_URL } from '../../data/apiPath'

const Register = ({showLoginHandler}) => {
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [phone,setPhone]=useState('')
  const [error,setError]=useState('')
  const [loading,setLoading]=useState(true)

  const handleSubmit=async(e)=>{
    e.preventDefault()
    
    try{
      const response=await fetch (`${API_URL}/vendor/register`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({username,email,phone,password})
      });

      const data=await response.json();
      if(response.ok){
        console.log(data)
        setUsername('')
        setEmail('')
        setPhone('')
        setPassword('')
        alert('vendor Registration successful')
        showLoginHandler()

      }

    }catch(err){
      setError('Registration failed. Please try again.')
      alert("Registration failed. Please try again.")
    }

  }

  return (
    <div className='registerSection'>
        <h3>Vendor Register</h3>
        <form className='authForm' onSubmit={handleSubmit}>
        <label >
                Username<br />
                <input type="UserName" name='username' value={username}onChange={(e)=>setUsername(e.target.value)} placeholder='Enter your Username' /> <br />
            </label>
            <label >
                Email <br />
                <input type="email" name= 'email' value={email}onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your Email' /> <br />
            </label>
            <label >
                Phone Number<br />
                <input type="number" name= 'phone' value={phone}onChange={(e)=>setPhone(e.target.value)} placeholder='Enter your Phone Number' /> <br />
            </label>
            <label >
                Password <br />
                <input type="Password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)}placeholder='Enter your Password' /> <br />
            </label>
           <div className="btnSubmit">
            <button type="submit">Submit</button>
           </div>
        </form>
    </div>
  )
}

export default Register