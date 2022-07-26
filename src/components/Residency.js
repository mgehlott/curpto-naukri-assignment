import React, { useState } from 'react'
import { BiLock } from 'react-icons/bi';
import Textfield from './Textfield';
import Button from './Ui/Button';
import Header from './Ui/Header';
import Title from './Title';
import 'react-phone-input-2/lib/bootstrap.css'
import PhoneInput from 'react-phone-input-2';

function Residency({ nextPageHandler, prevPageHandler }) {

  const [value, setValue] = useState();
  const submitChangeHandler = (e) => {
    e.preventDefault();
    nextPageHandler();
  }
   
    return (
      <>
            
   <Header step='2' text='Residency Info.' prevPageHandler={prevPageHandler} />
     <div className='ml-16 mt-4  p-3 h-80 w-[466px]'>
             <Title title='Complete Your Profile!' para='For the purpose of industry regulation, your details are required.' />
 <div className="block p-6 pl-0 pt-2 bg-white max-w-sm">
    <form className='pr-8' onSubmit={submitChangeHandler}>
      <div className="form-group mb-3 ">
      <label htmlFor='phone' className={`form-label inline-block text-sm  mb-1 text-gray-700 `}>Phone number</label>
     <PhoneInput
      country={ 'in' }
      value={ value }      
      onChange={ () => setValue(value) } 
     inputStyle={ {
           color: 'green',
           height: '52px', width: '100%',
           marginRight: '6rem'
                                } }
                                
    containerStyle={ { margin: '0' } }
      dropdownStyle={{height:'300px'}}
                           
      />
     </div>
    <div className="form-group mb-3 ">
    <Textfield type='text' label='Your address' name='address' placeholder='Please enter address' />
     </div>
     <div className="form-group mb-3">
     <label htmlFor="large" className="form-label inline-block text-sm  mb-1 text-gray-700  ">Large select</label>
     <select id="large" className="form-control  block w-full px-2 pr-6  py-3 text-sm  font-normal
        text-appGray   bg-white bg-clip-padding border border-solid border-gray-300 rounded
        transition ease-in-out m-0 placeholder:text-xs focus:text-appGray focus:bg-white
          focus:border-appBlue focus:outline-none">
                 <option selected >Choose a country</option>
                  <option value="IN">India</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                <option value="AUS">Australia</option>
    </select>
     </div>
                        

    <div className="flex justify-between items-center mb-6">
    </div>
   <Button>Save & Continue</Button>
    <div className='flex text-xs text-appGray mt-5 justify-center'><BiLock/> <span className='ml-2'>Your Info is safely secured</span></div> 
  </form>
</div>
 </div>
      </>
  )
}

export default Residency;
