import React from 'react'
import tickImg from '../../images/icons/tick.png';
import crossImg from '../../images/icons/cross.png';

const Difference = () => {
  return (
    <div className='difference_main' id='Difference'>
      <h3>What makes difference</h3>
      <div className="diffrence">
         <div className="others_difference">
            <div className="top_difference">
               <h5>Other Agencies</h5>
            </div>
            <div className="bottom_difference">
               <div>
                  <span><img height={25} src={crossImg} alt="Cross icon" /></span>
                  <p>99% Male run</p>
               </div>
               <div>
                  <span><img height={25} src={crossImg} alt="Cross icon" /></span>
                  <p>Agency withdrawals to their Account</p>
               </div>
               <div>
                  <span><img height={25} src={crossImg} alt="Cross icon" /></span>
                  <p>6, 12 or even 24 month contracts.</p>
               </div>
               <div>
                  <span><img height={25} src={crossImg} alt="Cross icon" /></span>
                  <p>Up to $ 20.000 SetUp Fees</p>
               </div>
               <div>
                  <span><img height={25} src={crossImg} alt="Cross icon" /></span>
                  <p>Model doesn't get access to her page</p>
               </div>
               <div>
                  <span><img height={25} src={crossImg} alt="Cross icon" /></span>
                  <p>Agency deletes OnlyFans Account after cooperating</p>
               </div>
            </div>
         </div>
         <div className="spider_difference">
            <div className="top_difference">
               <h5>Spider Agency</h5>
            </div>
            <div className="bottom_difference">
               <div>
                  <span><img height={25} src={tickImg} alt="Check icon" /></span>
                  <p>99% Runs by females</p>
               </div>
               <div>
                  <span><img height={25} src={tickImg} alt="Check icon" /></span>
                  <p>Money goes directly to the Models Bank Account</p>
               </div>
               <div>
                  <span><img height={25} src={tickImg} alt="Check icon" /></span>
                  <p>3 Month contract duration</p>
               </div>
               <div>
                  <span><img height={25} src={tickImg} alt="Check icon" /></span>
                  <p>No SetUp fees</p>
               </div>
               <div>
                  <span><img height={25} src={tickImg} alt="Check icon" /></span>
                  <p>Model has access to all her accounts</p>
               </div>
               <div>
                  <span><img height={25} src={tickImg} alt="Check icon" /></span>
                  <p>Model can keep her account after cooperating</p>
               </div>
               <div>
                  <span><img height={25} src={tickImg} alt="Check icon" /></span>
                  <p>Bulit porrf strategies</p>
               </div>
               <div>
                  <span><img height={25} src={tickImg} alt="Check icon" /></span>
                  <p>Nearly four years of experience</p>
               </div>
               <div>
                  <span><img height={25} src={tickImg} alt="Check icon" /></span>
                  <p>Methods how the models can stay anomyous</p>
               </div>
               <div>
                  <span><img height={25} src={tickImg} alt="Check icon" /></span>
                  <p>24/7 supports</p>
               </div>
               <div>
                  <span><img height={25} src={tickImg} alt="Check icon" /></span>
                  <p>Dedicated and professional team</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Difference