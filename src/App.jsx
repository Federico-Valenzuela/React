import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './components/NavBar'
import Title from './components/Title'
import ItemListContainer from  './components/ItemListContainer'

function App() {


  return (
    <>
      <Title />
      <NavBar />
      <ItemListContainer />
</>
  )
}

export default App
