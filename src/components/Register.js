import React from 'react'
import { IoChevronBack } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import Textfield from './Textfield';
import Button from './Ui/Button';
import Header from './Ui/Header';
import Title from './Title';

function Register({ nextPageHandler, prevPageHandler }) {
  
  const submitChangeHandler = (e) => {
    e.preventDefault();
    nextPageHandler();
  }
    return (
      <>
     <Header step='1' text='Personal Info.' prevPageHandler={prevPageHandler} />
   
            <div className='ml-16 mt-4  p-3 h-80 w-[466px]'>
                <Title title='Register Individual Account!'
                para='For the purpose of industry regulation, your details are required.' />
             
 <div className="block p-6 pl-0 pt-2 bg-white max-w-sm">
    <form className='pr-8' onSubmit={submitChangeHandler}>
      <div className="form-group mb-3 ">
      <Textfield type='text' label='Your fullname*' name='fullName' placeholder='Enter your full name' />
    </div>
    <div className="form-group mb-3 ">
    <Textfield type='email' label='Email address*' name='email' placeholder='Enter email address' />
     </div>
     <div className="form-group mb-3">
    <Textfield type='password' label='Create password*' name='password' placeholder='Enter email address' />
     </div>
                        

    <div className="flex justify-between items-center mb-6">
      <div className="form-group form-check flex items-center">
      
        <input type="checkbox"
         className="h-3 w-3 text-appBlue focus:ring-appBlue
                  border-gray-300 rounded mr-3"
          id="checkBox2"/>
         <label className="form-check-label inline-block text-xs  text-gray-800" htmlFor="checkBox2">
         I agree to terms & conditions     
        </label>
      </div>
     
    </div>
                        <Button>Register Account</Button>
    <button type="button" className="
    w-full
    flex
    px-6
    py-2
    mr-5
    mt-4
    font-medium
    text-xs
    leading-tight
    rounded
    shadow-md
    ">
     <FcGoogle className='mt-2 text-xl ml-2'/>
      <span className='text-black font-bold mt-2 mx-auto'>Register with Google</span>
    </button>
  </form>
</div>



         </div>
      </>
  )
}

export default Register;
