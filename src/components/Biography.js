import { render } from '@testing-library/react'
import React from 'react'


function Biography(){
 const headerTable = ['Дата', 'Событие']
 const someEvent = [
        {year:1990, event: 'I was born'},
        {year:1996, event: 'I go to school'},
    ]
    
    const rowItems = someEvent.map((someEvent) =>
    <tr>{someEvent}</tr>        
    )

    return(
        <table>
            <tr>
                <th>{headerTable[0]}</th>
                <th>{headerTable[1]}</th>
           </tr>
           <tr>
               {rowItems}
           </tr>
        </table>
    )
    

};
        

        

export default Biography