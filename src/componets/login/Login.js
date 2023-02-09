import React, {useEffect, useState} from 'react'
import lock from './lock.jpg';
import {AiFillEye} from 'react-icons/ai'
import {AiFillEyeInvisible} from 'react-icons/ai'
import {AiFillWarning} from 'react-icons/ai'
import './Login.css'

// import axios from './api/axios'
import axios from '../api/axios'
import { Navigate } from 'react-router';

import Sidebar from '../SIdebar/Sidebar';


export default function Login() {
    const [firstName, setFirstName] = useState('');


    const [passType, setPassType] = useState("password")
    const [show, setShow] = useState(<AiFillEyeInvisible />)
    const [error, setError] = useState(false)

    const [form, setForm] = useState({
        email : "dd",
        password: "dd"
    })
    // const[email, setEmail] = 

    const LOGIN_URL = '/login'

    useEffect(()=>{
        console.log("error")
    },[])

    //Handle form inputs
    const handleForm = (e) =>{
        e.preventDefault();
        
        const {name,values} = e.target;
        setForm(prev=>({
            ...prev,
            [name] : values
        }))
        console.log(form.email)
        authenticateUser();
    }

    const handleSubmit = async (e)=>{
       console.log("dsjksddjk" + form.email )
       console.log("firssssssssssssss", form)
        e.preventDefault();
        if(true){
             return <Navigate replace to="/login" />;
        }
        // try{
        //     const response = await axios.post(LOGIN_URL,JSON.stringify(form.email, form.password),{

        //         headers: { 'Content-Type': 'application/json' },
        //         withCredentials: true

        //     }
        //     );
        //      console.log(response?.data);

        // } catch(err){
        //     console.log(err)
        //     authenticateUser()
        // }
    }

    const authenticateUser =()=>{
        if(form.password === '1') {
            setTimeout(()=>{
                setError(false)
        
            }, 2000)
    
        } else {
            setTimeout(()=>{
                setError(true)
        
            }, 2000)
    
        }

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

    const handleFirstName = (e) =>{
        setFirstName(e.target.value)

    }

  
   return (
    <div className='sectionContainer'>
    <div className="section">
       <Sidebar />
      <div className='contents-x-login'>
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

                    <form action="#" method='POST' className='form__input' onSubmit={handleSubmit}>
                        <div className="inputs">
                            <input
                                type="email" 
                                name='email' 
                                value= {firstName} 
                                onChange = {handleFirstName} 
                                placeholder='Email'
                              />
                        </div>

                        <div className="inputs pswd__area">
                            <input 
                                type={passType} 
                                name='password' 
                                value={form.password} 
                                onChange = {handleForm} 
                                placeholder='Password' 
                                className='pswd__area'
                                autoComplete='off'
                            />

                            <button className='show__pswd' onClick={showPass}>  {show } </button>
                        </div>
                        <button name='' className='sign-btn'  type = 'submit'>Sign in</button>

                        {/* <div className="inputs"> */}
                            {/* <button name='' className='sign-btn' onClick={handleSubmit} type = 'submit'>Sign in</button> */}
                        {/* </div> */}
                    </form>
                </div>
            </div>

        </div>

    </div>

      </div>
    </div>

</div>
  
  )
}

