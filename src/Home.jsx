import React from 'react'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import Banner from './components/bannner/Banner'
import Header from './components/nav/Header'
import Wallet from './components/wallet/Wallet'
import Cover from './components/cover/Cover'
import Contact from './components/contact/Contact'

export default function App() {
    
    
    return (
        <>
        <div className="background-box">
            <Header/>  
        </div>
        
        <Wallet/>  
        {/* { <Banner /> } */}
        
        </>
    )
}