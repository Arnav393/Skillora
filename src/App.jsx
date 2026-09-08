import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import TopUniversities from './components/topUniversities'
import Courses from './components/Courses'
import Tutors from './components/Tutors'
import Feedbacks from './components/Feedbacks'
import Footer from './components/Footer'

function App() {
  return(
    <>
      <Header/>
      <Hero/>
      <TopUniversities/>
      <Courses/>
      <Tutors/>
      <Feedbacks/>
      <Footer/>
    </>
  )
}

export default App
