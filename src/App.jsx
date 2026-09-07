import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import topUniversities from './components/topUniversities'

function App() {
  return(
    <>
      <Header/>
      <Hero/>
      <topUniversities/>
    </>
  )
}

export default App
