import React from 'react'

function Price() {
    return(
        <div class="container">
            <div class="price__wrap_table">
                <h3 class="table__header">Наш прайс-лист</h3>
                <table class="table"  >
                    <tr>
                        <th>Название тура</th>
                        <th>Описание</th>
                        <th>Стоимость тура</th>
                    </tr>
                    <tr>
                        <td>В погоне за северным сиянием</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, enim.</td>
                        <td>1500 &#8364;</td>
                    </tr>
                    <tr>
                        <td>Исследование ледяных пещер</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, enim.</td>
                        <td>1200 &#8364;</td>
                    </tr>
                    <tr>
                        <td>Водопады Исландии</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, enim.</td>
                        <td>1000 &#8364;</td>
                    </tr>
                </table>
            </div>
        </div>
    )    
}
export default Price