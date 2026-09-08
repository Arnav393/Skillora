import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import TopUniversities from './components/topUniversities'
import Courses from './components/Courses'
import Tutors from './components/Tutors'

function App() {
  return(
    <>
      <Header/>
      <Hero/>
      <TopUniversities/>
      <Courses/>
      <Tutors/>
    </>
  )
}

export default App
