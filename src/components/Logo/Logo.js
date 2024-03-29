import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
// import brain from './brain.png';
import logo from './logo.gif';


const Logo = () => {
    return (
        <div className='ma4 mt0 place'>
            <Tilt className="Tilt br3 shadow-3" options={{ max: 45 }} style={{ height: 130, width: 130 }} >
                <div className="Tilt-inner "><img style={{paddingTop:'5px'}} src={logo} alt='oops'/></div>
            </Tilt>
        </div>
    );

}

export default Logo;

//--save is just used for saving it in dependencies