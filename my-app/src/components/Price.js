import React from 'react'
import {description, iceCaves, minDesc,
 nameOfTour, northernLightTour, ourPrice, 
 price, priceTourFirst, priceTourSecond, waterfallOfIceland, priceTourThird } from '../constants/General'


function Price() {
    return(
        <div className='price__wrap'>
            <div class="container">
            <div class="price__wrap_table">
                <h3 class="table__header">{ourPrice}</h3>
                <table class="table"  >
                    <tr>
                        <th>{nameOfTour}</th>
                        <th>{description}</th>
                        <th>{price}</th>
                    </tr>
                    <tr>
                        <td>{northernLightTour}</td>
                        <td>{minDesc}</td>
                        <td>{priceTourFirst}</td>
                    </tr>
                    <tr>
                        <td>{iceCaves}</td>
                        <td>{minDesc}</td>
                        <td>{priceTourSecond}</td>
                    </tr>
                    <tr>
                        <td>{waterfallOfIceland}</td>
                        <td>{minDesc}</td>
                        <td>{priceTourThird}</td>
                    </tr>
                </table>
            </div>
        </div>
        </div>
        
    )    
}
export default Price