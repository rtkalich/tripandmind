import React from 'react'
import iceland from '../assets/iceland.png'
import firstTour from '../assets/first_tour.jpg'
import freezyCave from '../assets/freezy_cave.jpg'
import waterfall from '../assets/waterfall.jpg'

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
                            <h3>В погоне за северным сиянием</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eligendi culpa deserunt? Fugiat minus doloribus nemo sequi dolores magni laboriosam nesciunt beatae expedita, doloremque quia sapiente pariatur veritatis porro fugit omnis debitis suscipit. Rem sequi impedit exercitationem velit, necessitatibus eaque quam doloremque eos minima corrupti a quisquam nesciunt repellendus sed!</p>
                        </div>
                    </div>
                    <div class="tours__list_item ">
                        <img class="tour__list_item_img" src={freezyCave} alt="cave"/>
                        <div class="tour__list_item_text">
                            <h3>Исследование ледяных пещер</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eligendi culpa deserunt? Fugiat minus doloribus nemo sequi dolores magni laboriosam nesciunt beatae expedita, doloremque quia sapiente pariatur veritatis porro fugit omnis debitis suscipit. Rem sequi impedit exercitationem velit, necessitatibus eaque quam doloremque eos minima corrupti a quisquam nesciunt repellendus sed!</p>
                        </div>
                    </div>
                    <div class="tours__list_item ">
                        <img class="tour__list_item_img" src={waterfall} alt="waterfall"/>
                        <div class="tour__list_item_text">
                            <h3>Водопады Исландии</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eligendi culpa deserunt? Fugiat minus doloribus nemo sequi dolores magni laboriosam nesciunt beatae expedita, doloremque quia sapiente pariatur veritatis porro fugit omnis debitis suscipit. Rem sequi impedit exercitationem velit, necessitatibus eaque quam doloremque eos minima corrupti a quisquam nesciunt repellendus sed!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}
export default Tour