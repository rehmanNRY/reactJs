import React, { useRef, useEffect } from 'react'

const FeaturesScroll = () => {
   useEffect(() => {
      // Get the button element by its ID
      const button = document.getElementById('autoclickbtn');

      // Check if the button element exists and trigger click event
      if (button) {
         button.click();
      }
   }, []);
   const containerRef = useRef(null);
   const itemsContRef = useRef(null);
   const cardBoxWidth = 300; // Assuming each card-box has a width of 300px
   let count = 0;
   const transitionDuration = 0.5; // Transition duration in seconds
   const handleHorizontalScroll = (scrollDirection) => {
      if (itemsContRef.current && containerRef.current) {
         // Calculate the scroll amount based on the width of three card-box elements
         const scrollAmount = scrollDirection * cardBoxWidth * 3;
         count += scrollAmount;
         let contentRect = itemsContRef.current.getBoundingClientRect();
         let width = contentRect.width;
         let min = -(width - document.body.clientWidth);
         let max = 0;
         // Max/min values check
         count = count < min ? min : count;
         count = count > max ? max : count;
         // Apply translation on X axis using React's useRef
         itemsContRef.current.style.transition = `transform ${transitionDuration}s ease`;
         itemsContRef.current.style.transform = `translateX(${count}px)`;
      }
   };
   return (
      <>
         <div className="features_main">
            <div className="features_content">
               <h3><span>Spider</span> &mdash; OnlyFan Marketing</h3>
               <p>We will manage your <span>onlyfans accounts</span> is best way.</p>
               <div className='features_btns'>
                  <button id='autoclickbtn' onClick={() => handleHorizontalScroll(1)}><svg width="30" height="30" viewBox="0 0 30 30" fill="none"><rect width="30" height="30" rx="15"></rect><path d="M16.7167 8.21674L10.2168 14.7167L16.5001 20.9999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
                  <button onClick={() => handleHorizontalScroll(-1)}><svg width="30" height="30" viewBox="0 0 30 30" fill="none"><rect x="30" y="30" width="30" height="30" rx="15" transform="rotate(-180 30 30)"></rect><path d="M13.2833 21.7833L19.7832 15.2833L13.4999 9.00007" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
               </div>
            </div>
            <div className="containerz" ref={containerRef} style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
               <div className="items-cont" ref={itemsContRef} style={{ display: 'flex' }}>
                  <div className="card-box">
                     <div className="card-box_top"></div>
                     <div className="card-box_bottom">
                        <div className="card-box_img"></div>
                        <h5>Project management</h5>
                        <p className="long-text">
                           Lorem ipsum dolor sit, amet conse adipisicing elit. Possimus quibusdam illum aspernatur rerum sed facilis..
                        </p>
                     </div>
                  </div>
                  <div className="card-box">
                     <div className="card-box_top"></div>
                     <div className="card-box_bottom">
                        <div className="card-box_img"></div>
                        <h5>Meetings</h5>
                        <p className="long-text">
                           Lorem ipsum dolor sit, amet conse adipisicing elit. Possimus quibusdam illum aspernatur rerum sed facilis..
                        </p>
                     </div>
                  </div>
                  <div className="card-box">
                     <div className="card-box_top"></div>
                     <div className="card-box_bottom">
                        <div className="card-box_img"></div>
                        <h5>Onboarding</h5>
                        <p className="long-text">
                           Lorem ipsum dolor sit, amet conse adipisicing elit. Possimus quibusdam illum aspernatur rerum sed facilis..
                        </p>
                     </div>
                  </div>
                  <div className="card-box">
                     <div className="card-box_top"></div>
                     <div className="card-box_bottom">
                        <div className="card-box_img"></div>
                        <h5>Task management</h5>
                        <p className="long-text">
                           Lorem ipsum dolor sit, amet conse adipisicing elit. Possimus quibusdam illum aspernatur rerum sed facilis..
                        </p>
                     </div>
                  </div>
                  <div className="card-box">
                     <div className="card-box_top"></div>
                     <div className="card-box_bottom">
                        <div className="card-box_img"></div>
                        <h5>Resource hub</h5>
                        <p className="long-text">
                           Lorem ipsum dolor sit, amet conse adipisicing elit. Possimus quibusdam illum aspernatur rerum sed facilis..
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="features_bottom">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, harum dicta. Necessitatibus in laudantium deleniti.</p>
               <button type="button">Contact us Now</button>
            </div>
         </div>
      </>
   )
}

export default FeaturesScroll