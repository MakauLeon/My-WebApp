import React from 'react';
import "./register.scss"

const register = () => {
  return (
    <div className='register'>
        <div className='card'>
            <div className='left'>
                <h1> Hi There! </h1>
                <p>
                    Welcome to CANVA
                </p>
                <span>
                    Do you have an account ?
                </span>
                <button> Login </button>
            </div>

    <div className='right'>
    <h1> Register </h1>
    <form>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password' />
        <input type= "text" placeholder='Userame'/>
    </form>
    <button>  Register </button>
    </div>



        </div>   
    </div>
  );
}

export default register;
