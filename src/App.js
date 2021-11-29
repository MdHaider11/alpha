import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
// import Wallet from './components/wallet/Wallet'
import StackHome from './components/StackHome/StackHome'
import Contact from './components/contact/Contact'

export default function App() {
    return (
        <>
        
            <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<StackHome/>} />
                <Route path = "/stack" element ={<Home/>} />
                <Route path = "/alpha" element ={<Contact/>} />
            </Routes>
                
             </BrowserRouter>
            
            {/* { <Banner /> } */}
            
        </>
    )
}
