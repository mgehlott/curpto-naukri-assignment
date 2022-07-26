import React, { useState } from 'react'
import { BiLock } from 'react-icons/bi';
import Textfield from './Textfield';
import Button from './Ui/Button';
import Header from './Ui/Header';
import Title from './Title';
import { AiFillCheckCircle } from 'react-icons/ai';


function BankVerficaton({prevPageHandler}) {

  const [isvalid, setIsValid] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    alert('Sign Up completed !!!')
  }

 
  const checkValid = (value) => {
    if (value.length === 11) {
      setIsValid(true);
    }
    else {
      setIsValid(false);
    }
  
  }

    return (
      <>
            
   <Header step='3' text='Bank Verification.' prevPageHandler={prevPageHandler} />
     <div className='ml-16 mt-20  p-3 h-80 w-[466px]'>
             <Title title='Complete Your Profile!' para='For the purpose of industry regulation, your details are required.' />
    <div class="block p-6 pl-0 pt-2 bg-white max-w-sm">
    <form className='pr-8 mt-8' onSubmit={submitHandler}>
      <div className="form-group mb-3 relative">
      <Textfield className='mb-3' inputChangeHanlder={checkValid}  type='text' label='Bank verification number (BVN)' name='bankVerficationNumber' placeholder='Enter bank verification number' />
       {isvalid &&  <AiFillCheckCircle className='text-green-600 pointer-events-none  absolute right-2 top-2/3 transform -translate-y-1/2 ' />}
     </div>

   <Button className='mt-12'>Save & Continue</Button>
    <div className='flex text-xs text-appGray mt-5 justify-center'><BiLock/> <span className='ml-2'>Your Info is safely secured</span></div> 
  </form>
</div>
 </div>
      </>
  )
}

export default BankVerficaton;
