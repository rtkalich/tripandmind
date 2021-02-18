import React from 'react'
import { contact, mail, tel } from '../constants/General'

function Contact() {
    return(
        <div className='contact__wrap'>
            <div class="container">
            <h3>{contact}:</h3>
            <ul class="contact__list">
                <li class="contact__list__item"><a href="mailto:tkalichroman90@gmail.com">{mail}</a></li>
                <li class="contact__list__item"><a href="tel:+380993571333">{tel}</a></li>
            </ul>
        </div>
        </div>
        
    )
    
}
export default Contact