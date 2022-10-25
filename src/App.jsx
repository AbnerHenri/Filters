import './App.css'

import { useEffect, useState } from 'react'

import Header from './Components/Header/Header'
import Card from './Components/Card/Card'

function App() {

  const [repos, setRepos] = useState(null)

  useEffect(()=> {

      (async function Res() {
        const Res = await fetch('https://api.github.com/users/AbnerHenri/repos')
        await Res.json().then(res => { setRepos(res) })
      })()

  }, [])

  console.log(repos)

  return (
    <div className='Container'>
      <Header />

      <div className='Cards'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default App
