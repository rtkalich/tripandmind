import React from 'react'
import iceland from '../assets/iceland.png'
import firstTour from '../assets/first_tour.jpg'
import freezyCave from '../assets/freezy_cave.jpg'
import waterfall from '../assets/waterfall.jpg'
import {northernLightTour} from '../constants/General'
import {descriptionTour} from '../constants/General'
import {iceCaves} from '../constants/General'
import {waterfallOfIceland} from '../constants/General'


function Tour(){
    return(
        <div className='tour__wrap'>
            <div class="container">
            <div class="tour__wrap_box">
                <img src={iceland} alt="" class="wrap__img"/>
                <div class="tours__list">
                    <div class="tours__list_item ">
                        <img class="tour__list_item_img" src={firstTour} alt="Northern Lights"/>
                        <div class="tour__list_item_text">
                            <h3>{northernLightTour}</h3>
                            <p>{descriptionTour}</p>
                        </div>
                    </div>
                    <div class="tours__list_item ">
                        <img class="tour__list_item_img" src={freezyCave} alt="cave"/>
                        <div class="tour__list_item_text">
                            <h3>{iceCaves}</h3>
                            <p>{descriptionTour}</p>
                        </div>
                    </div>
                    <div class="tours__list_item ">
                        <img class="tour__list_item_img" src={waterfall} alt="waterfall"/>
                        <div class="tour__list_item_text">
                            <h3>{waterfallOfIceland}</h3>
                            <p>{descriptionTour}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}
export default Tour