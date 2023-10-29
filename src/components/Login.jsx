import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSigninForm, setSigninForm] = useState(true);
  const toggleForm = () => {
    setSigninForm(!isSigninForm);
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='absolute '>
        <img
          className=''
          src='https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='img'
        />
      </div>
      <form className='bg-black absolute my-40 mx-auto right-0 left-0 p-12 w-4/12 text-white bg-opacity-70'>
        <h1 className='font-[500] text-[32px]  my-4'>
          {isSigninForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSigninForm && (
          <input
            type='text'
            className='p-4 w-full bg-[#333] rounded'
            placeholder='Enter Full Name'
          />
        )}
        <input
          type='email'
          placeholder='Email or phone number'
          className='p-4 my-5 w-full bg-[#333] rounded'
        />
        <input
          placeholder='Password'
          className='p-4 my-1 w-full bg-[#333] rounded'
        />
        <button
          type='submit'
          className=' p-4  my-10 bg-red-700 text-white w-full rounded'
        >
          {isSigninForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className='cursor-pointer' onClick={toggleForm}>
          {isSigninForm
            ? 'New to Netflix? Sign up now.'
            : ' Already Registered? Sign In Now.'}
        </p>
      </form>
    </div>
  );
};

export default Login;
