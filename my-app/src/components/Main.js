import React from 'react'
import github from '../i/github.png'
import dribbble from '../i/dribbble.png'
import linkedin from '../i/linkedin.png'
import facebook from '../i/facebook.png'

function Main(){
    return (
        <div class="container">
            <header>
                <div class="header__box">
                    <div class="header__box_item">
                        <span class="logo"><a href="index.html">Trip&Mind</a></span>
                    </div>
                    <div class="header__box_item">
                        <ul class="menu__list">
                            <li class="menu__list_item">
                                <a href="#tour__wrap">Все туры</a>
                            </li>
                            <li class="menu__list_item"><a href="#price__wrap">стоимость</a></li>
                            <li class="menu__list_item"><a href="#contact__wrap">контакты</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div class="main__content_box">
                <h1 class="main__content_header">Открой для себя страну льда и пламени</h1>
                <p class="main__content_p">Авторские туры по завораживающей Исландии</p>
                <div class="main__content_contact">
                    <a href="#" class="contact__btn">Оставить заявку</a>
                </div>
                <div class="main__content_society">
                    <ul class="society__box">
                        <li class="society__box_item"><a href="https://github.com/rtkalich/tripandmind/tree/master" target="_blank"><img src={github} alt="github"/></a></li>
                        <li class="society__box_item"><a href="https://dribbble.com/shots/7125569-New-Ireland-Landing-page" target="_blank"><img src={dribbble} alt="dribbble"/></a></li>
                        <li class="society__box_item"><a href="https://www.linkedin.com/in/roman-tkalich-88b263166/" target="_blank"><img src={linkedin} alt="linkedin"/></a></li>
                        <li class="society__box_item"><a href="https://www.facebook.com/roman.romashkin90" target="_blank"><img src={facebook} alt="facebook"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Main