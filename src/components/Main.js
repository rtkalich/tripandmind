import React from 'react'
import github from '../assets/github.png'
import dribbble from '../assets/dribbble.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import {projectName} from '../constants/General'
import {allTour} from '../constants/General'
import {cost} from '../constants/General'
import {contact} from '../constants/General'
import {contentHeader} from '../constants/General'
import {contentParagraph} from '../constants/General'
import {contactBtn} from '../constants/General'


function Main(){
    return (
        <div className='main__wrap'>
            <div class="container">
            <header>
                <div class="header__box">
                    <div class="header__box_item">
                        <span class="logo"><a href="index.html">{projectName}</a></span>
                    </div>
                    <div class="header__box_item">
                        <ul class="menu__list ">
                            <li class="menu__list_item">
                                <a href="#tour__wrap">{allTour}</a>
                            </li>
                            <li class="menu__list_item"><a href="#price__wrap">{cost}</a></li>
                            <li class="menu__list_item"><a href="#contact__wrap">{contact}</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div class="main__content_box">
                <h1 class="main__content_header">{contentHeader}</h1>
                <p class="main__content_p">{contentParagraph}</p>
                <div class="main__content_contact">
                    <a href="#" class="contact__btn">{contactBtn}</a>
                </div>
                <div class="main__content_society">
                    <ul class="society__box">
                        <li class="society__box_item">
                            <a href="https://github.com/rtkalich/tripandmind/tree/master" target="_blank">
                                <img src={github} alt="github"/>
                            </a>
                        </li>
                        <li class="society__box_item">
                            <a href="https://dribbble.com/shots/7125569-New-Ireland-Landing-page" target="_blank">
                                <img src={dribbble} alt="dribbble"/>
                            </a>
                        </li>
                        <li class="society__box_item"><a href="https://www.linkedin.com/in/roman-tkalich-88b263166/" target="_blank"><img src={linkedin} alt="linkedin"/></a></li>
                        <li class="society__box_item"><a href="https://www.facebook.com/roman.romashkin90" target="_blank"><img src={facebook} alt="facebook"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Main

