import React, {useState} from 'react'
import lock from './lock.jpg';
import {AiFillEye} from 'react-icons/ai'
import {AiFillEyeInvisible} from 'react-icons/ai'
import {AiFillWarning} from 'react-icons/ai'
import './Login.css'

function Login() {
    // const [userName, setUserName] = useState('');
    // const [firstName, setFirstName] = useState('jk');
    setTimeout(()=>{
        setError(true)

    }, 2000)
    const [passType, setPassType] = useState("password")
    const [show, setShow] = useState(<AiFillEyeInvisible />)
    const [error, setError] = useState(false)
    const [form, setForm] = useState({
        email : 'emails',
        password: " "
    })

    //Handle form inputs
    const handleForm = (e) =>{
        const {name,values} = e.target;
        setForm(prev=>({
            ...prev,
            [name] : values
        }))
    }
    

    //show or hide password
    const showPass = (e)=>{
        e.preventDefault();
        if(passType === 'password'){
            setPassType("text")
            setShow(<AiFillEye />)
        }
        else {
          setPassType("password")
          setShow(< AiFillEyeInvisible />)
    } 
            
    }

  
   return (
    <div className='LoginContainers'>
        <div className="fluid-container">
            <div className="graph__container">
                <img src={lock} alt="" className='graph' />
            </div>

            <div className="sign__in_container">
                <div className="sing__elements">
                    <h2 className='login-h2'>
                        Log in
                    </h2>
                    {error && 
                        <div className='error__credential'>
                            <AiFillWarning />
                            <p>
                            You have entered invalid credentials!
                            </p>
                        </div>
                    }

                    <form action="#" method='POST' className='form__input'>
                        <div className="inputs">
                            <input type="email" name='email' value= {form.email} onChange = {handleForm} placeholder='Email' />
                        </div>

                        <div className="inputs pswd__area">
                            <input type={passType} name='password' value={form.password} onChange = {handleForm} placeholder='Password' className='pswd__area'/>

                            <button className='show__pswd' onClick={showPass}>  {show } </button>
                        </div>

                        <div className="inputs">
                            <button name='' className='sign-btn'>Sign in</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Login