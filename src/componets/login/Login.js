import React from 'react'
import lock from './lock.jpg';
import './Login.css'

function Login() {
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

                    <form action="#" method='POST' className='form__input'>
                        <div className="inputs">
                            <input type="email" name='' value='' />
                        </div>

                        <div className="inputs">
                            <input type="email" name='' value='' />
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