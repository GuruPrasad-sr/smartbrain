import React from 'react';
import './ImageLinkform.css'

const ImageLinkform = ({onInputchange , onSubmit}) => {
    return (
        <div>
            <p className='f3'>{'This SmartBrain will detect faces in your pictures. Give it a try'}</p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5 '>
                    <input className='f4 pa2 w-70 center' type='text' placeholder='Paste url here' onChange={onInputchange} />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-purple' onClick={onSubmit}>Detect</button>
                </div>
            </div>
        </div>

    );
}

export default ImageLinkform;