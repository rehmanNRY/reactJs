import React from 'react';
import logoImg from '../images/logo/spider logo.png'

const Loader = () => {
   return (
      <div className="loader">
         <div className='loader_main'>
            <div>
               <span><img height={160} src={logoImg} alt="Spider logo" /></span>
            </div>
         </div>
      </div>
   )
}

export default Loader