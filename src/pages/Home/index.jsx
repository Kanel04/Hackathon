import React from 'react'
import Header from './components/header'
import Navbar from './components/navbar'

function HomePage() {
  return (
    <div className='bg-[#f0f0f0]'>
      <Navbar></Navbar>
      <Header></Header>
    </div>
  )
}

export default HomePage