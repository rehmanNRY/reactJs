import React from 'react';
import fblogo from '../images/logo/fb.png';
import iglogo from '../images/logo/ig.png';


const Clients = () => {
  return (
    <div className="clients">
        <h1>Strong partnership & Track record 🎯</h1>
        <p>Trusted by over 30,000 all over the world.</p>
        <div className="client">
            <div>
                <img height="40px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="google logo"/>
                <p>Agency is rated 5 out of 5 stars in google maps.</p>
                <h4><span><i className="bx bxs-star"></i></span> 5.00</h4>
            </div>
            <div>
                <img height="40px" src={fblogo} alt="facebook logo"/>
                <p>Agency is rated 5 out of 5 stars in google maps.</p>
                <h4><span><i className="bx bxs-star"></i></span> 5.00</h4>
            </div>
            <div>
                <img height="40px" src="https://freelogopng.com/images/all_img/1656958733linkedin-logo-png.png" alt="linkedin logo"/>
                <p>Agency is rated 5 out of 5 stars in google maps.</p>
                <h4><span><i className="bx bxs-star"></i></span> 5.00</h4>
            </div>
            <div>
                <img height="40px" src={iglogo} alt="instagram logo"/>
                <p>Agency is rated 5 out of 5 stars in google maps.</p>
                <h4><span><i className="bx bxs-star"></i></span> 5.00</h4>
            </div>
        </div>
    </div>
  )
}

export default Clients