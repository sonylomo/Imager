import React from 'react'
import './UploadImg.css'
// import image from './agents_of_s_h_i_e_l_d.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { fas } from '@fortawesome/free-brands-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

function UploadImg ({Url, File}) {
    return (
        <div className='uploadImg'>
            {/* <i class="fas fa-check-circle"></i> */}
            <FontAwesomeIcon icon={ faCheckCircle}  size="3x" color="green"/>
            <h3>Uploaded Successfully!</h3>
            {/* src=Url & alt=Title */}
            {/* <img src={image} alt='Agents of shield' /> */}
            <img src={Url} alt={File}/>
            <div className='imgInput'>
                {/* image URL from firebase */}
                <input value='imager\src\assets\agents_of_s_h_i_e_l_d.jpg'/>
                <button variant='light'>Copy Link</button>
            </div>
            
        </div>
    )
}

export default UploadImg
