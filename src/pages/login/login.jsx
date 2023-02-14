import React from 'react';
import "./login.scss"
const login = () => {
  return (
    <div className='login'>
        <div className='card'>
            <div className='left'>
                <h1> Hello People </h1>
                <p>
                    Ayaaam Makauuu
                </p>
                <span>
                    Do you have an account ?
                </span>
                
                <button> Login </button>
             
            </div>


    <div className='right'>
    <h1> Login </h1>
    <form>
        <input type="text" placeholder='Username' />
        <input type="password" placeholder='Password' />
    </form>
    <button>  Login </button>
    </div>



        </div>   
    </div>
  );
}

export default login;
