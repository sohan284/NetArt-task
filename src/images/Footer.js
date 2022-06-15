import React from 'react';
import img from './1020190.webp'
import img2 from './mobile-phone-icon-phone-telephone-icon-22.png'
import img3 from './internet.png'

const Footer = () => {
    return (
        <div className='footer flex-col lg:flex-row pt-8'>
            <div className='fb'>
                <img src={img2} alt="" />
            <h6>Toll free </h6>
            </div>
            <div className='fb'>
                <img src={img} alt="" />
                <h6>
                www.Facebook.com/cripumps
                </h6>
             
            </div>
            <div className='fb'>
<img src={img3} alt="" />
                <h6>www.crigroups.com</h6>
            </div>
           
        </div>
    );
};

export default Footer;