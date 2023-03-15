import React from 'react'
import C_header from './C_header'
import Sidebar from './Sidebar'
import Quiz_card from './Quiz_card';
import './client.css';
const ClientApp = () => {
  return (
   <> 
   <div className='container-fluid m-0'>
   <C_header/>
    <div className='col-lg-12 content'>
    <div className='row'> 
        <div className='col-lg-3 m-3'>
            <div className='left-box'>
               <Sidebar/> 
            </div>
        </div>
        <div className='col-lg-8  m-3'>
            <div className='right-box shadow'>
               <Quiz_card/>
               <Quiz_card/>
               <Quiz_card/>
               <Quiz_card/>
               <Quiz_card/>
               <Quiz_card/>
            </div>
        </div>
    </div>
    </div>
   </div>
   </>
  )
}

export default ClientApp