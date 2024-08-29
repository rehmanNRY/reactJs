import React from 'react'

const SecondaryBanner = (props) => {
   const { banner_background, banner_title, banner_paragraph } = props;
   return (
      <div className='SecondaryBanner' background={`background`} style={{ backgroundColor: banner_background }}>
         <h3>{banner_title}</h3>
         <p>{banner_paragraph}</p>
         <a href='#Difference' className='SecondaryBannerBtn1'>Show details</a>
         <a href='#ContactForm'>Start with us</a>
      </div>
   )
}
SecondaryBanner.defaultProps = {
   banner_background: '#181722',
   banner_title: 'This is the title of banner',
   banner_paragraph: 'This is the banner paragraph',
   // pageSize: 20
}
export default SecondaryBanner