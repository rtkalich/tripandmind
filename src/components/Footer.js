import React from 'react'
import { author, privacy} from '../constants/General'

function Footer() {
    return(
        <footer>
            <div class="container">
            <div class="bottom__box">
                <h3>{author}</h3>
                <p>{privacy}&copy;</p>
            </div>
        </div>
        </footer>
        
    )
    
}
export default Footer