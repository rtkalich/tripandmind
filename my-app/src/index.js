import React from 'react'
import {render} from 'react-dom'
import Main from './components/Main';
import Tour from './components/Tour';
import Price from './components/Price';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './css/index.css';



render(<Main/>, document.getElementById('main__wrap'))
render(<Tour/>, document.getElementById('tour__wrap'))
render(<Price/>, document.getElementById('price__wrap'))
render(<Contact/>, document.getElementById('contact__wrap'))
render(<Footer/>, document.getElementById('footer'))