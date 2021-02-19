import React from 'react'
import Main from './components/Main';
import Tour from './components/Tour';
import Price from './components/Price';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Biography from './components/Biography'


function App() {
    return(
        <div>
            <Main/>
            <Tour/>
            <Price/>
            <Contact/>
            <Biography/>
            <Footer/>
        </div>
    )
}

export default App