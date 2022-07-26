import React from 'react'
import { BsPerson } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai'; 
import { MdOutlineBusinessCenter } from 'react-icons/md'; 
import Card from './Ui/Card';

function Home({nextPageHandler}) {

  return (
     <>
          
          <div className='pt-16  right-20 float-right'> Already have an account?
              <span className='text-appBlue ml-2'  >Sign In</span>
          </div>
          <div className='ml-16 mt-36 p-3 h-80 w-[466px]'>
              <div >
                  <p className='text-black text-2xl font-bold '>Join Us!</p>
                  <p className='w-[320px] text-appGray mt-2'>To begin this journey, tell us what type of account you’d be opening.</p>
              </div>
          <Card onClick={nextPageHandler} >
                  <div className='bg-polygon w-[50px] h-12 bg-no-repeat flex  justify-center'  >
                  <BsPerson className='text-white w-4 h-8 m-auto flex justify-center' />
                  </div>
                  <div className=''>
                      <p className='font-bold text-md'>Individual</p>
                      <p className='text-appGray text-[12px] w-[205px]'>Personal account to manage all you activities.</p>
                  </div>
                  <div>
                      <AiOutlineArrowRight className='text-appBlue'/>
                  </div>
              
          </Card>
          <Card>
              
                  <div className='bg-polygon2 w-[50px] h-12 bg-no-repeat flex  justify-center'  >
                  <MdOutlineBusinessCenter className='text-appBlue w-4 h-8 m-auto flex justify-center' />
                  </div>
                  <div className=''>
                      <p className='font-bold text-md'>Business</p>
                      <p className='text-appGray text-[12px] w-[205px]'>Own or belong to a company, this is for you.</p>
                  </div>
                  <div>  
                  </div>
              
                </Card>
        </div>
   
     </>
  )
}

export default Home
