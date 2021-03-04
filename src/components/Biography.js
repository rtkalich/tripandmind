import React, {Component} from 'react';
import Event from './Event'


const initialList =  [
    {year: 1828, event: 'Родился в городе Нант'},
    {year: 1847, event: 'Едет учиться в Париж на юриспрудента'},
    {year: 1851, event: 'Впервые печатается в журнале "Musée des familles"'},
    {year: 1860, event: 'Женится на Онорине де Виан'},
    {year: 1861, event: 'Рождение сына Мишеля'},
    {year: 1863, event: 'Выходит в большой тираж роман "Путешествие на воздушном шаре"'},
    {year: 1865, event: 'Покупает яхту "Сен-мишель",которая становиться рабочим местом писателя'},
    {year: 1905, event: 'Умирает от сахарного диабета'},
]
const date = 'Дата'
const event = 'Событие'


 class Biography extends Component {
    
    state = {
        eventList: initialList,
        listTitle: 'Биография Жюль Верна',
        sortType: 'sortJS',
        isSortDown: true
    }
    
    handleSort = (type) => {
        
        let sortedList = []
        
        // const firstEl = this.state.eventList[0][type]
        // const lastEl = this.state.eventList[this.state.eventList.length - 1][type]
            
            sortedList = this.state.eventList.sort((a, b)=>{
                if (a[type] > b[type]) {
                    return this.state.isSortDown ? 1 : -1;
                  }
                  if (a[type] < b[type]) {
                    return this.state.isSortDown ? -1 : 1;
                  }

                  return 0;

            })
        this.setState(prevValue => ({...prevValue, isSortDown:!prevValue.isSortDown, eventList: sortedList})) 
    }
    render (){
        
        return (
            <div>
                <h2>{this.state.listTitle}</h2>
                <table id='biography'>
                <tr>
                    <td onClick={() => this.handleSort('year')}><strong>{date}</strong></td>
                    <td onClick={() => this.handleSort('event')} > <strong>{event}</strong></td>
                </tr>
                {this.state.eventList.map((year, index)=>{
                    return (
                        <Event
                        key={index}
                        year={year.year}
                        event={year.event}
                        onSort={this.setState.onSort}
                        />
                    )
                })}
            </table>
            </div>
            
        )
    }
 }


 export default Biography;
 