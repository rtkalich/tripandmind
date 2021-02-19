import React, {Component} from 'react';
import Event from './Event'



 class Biography extends Component {
    
    state = {
        eventList: [
            {year: 1828, event: ' Родился в городе Нант'},
            {year: 1847, event: ' Едет учиться в Париж на юриспрудента'},
            {year: 1851, event: ' Впервые печатается в журнале "Musée des familles"'},
            {year: 1860, event: ' Женится на Онорине де Виан'},
            {year: 1861, event: ' Рождение сына Мишеля'},
            {year: 1863, event: ' Выходит в большой тираж роман "Путешествие на воздушном шаре"'},
            {year: 1865, event: ' Покупает яхту "Сен-мишель,которая становиться рабочим местом писателя'},
            {year: 1905, event: ' Умирает от сахарного диабета'},
        ],
        listTitle: 'Биография Жюль Верна'
    }

    onSort = () => {
        sort(function (a,b) {
            return b.year - a.year
        })
    }
    render (){
        const date = 'Дата';
        const event = 'Событие'
        return (
            <div>
                <h2>{this.state.listTitle}</h2>
                <table id='biography'>
                <tr>
                    <td onClick={this.onSort.bind(null, date)}><strong>{date}</strong></td>
                    <td onClick={this.onSort.bind(null, event)}> <strong>{event}</strong></td>
                </tr>
                {this.state.eventList.map((year, index)=>{
                    return (
                        <Event
                        key={index}
                        year={year.year}
                        event={year.event}
                        onSort={this.onSort}
                        />
                    )
                })}
            </table>
            </div>
            
        )
    }
 }


 export default Biography;
 