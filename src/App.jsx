import './App.css'

import { useEffect, useState } from 'react'

import Header from './Components/Header/Header'
import Card from './Components/Card/Card'

function App() {

  const [repos, setRepos] = useState([])

  const filtered = repos.filter((e)=> {
    e.name.startsWith() || e.language.startsWith()
  })

  useEffect(()=> {

      (async function Res() {
        const Res = await fetch('https://api.github.com/users/AbnerHenri/repos')
        await Res.json().then(res => { 
          res.shift()
          res.pop()
          setRepos(res)
         })
      })()

  }, [])

  
  return (
    <div className='Container'>
      <Header />

      <input type={'text'} placeholder={'Search'} className='Search' />

      <div className='Cards'>
        {
          repos.map( e => <Card name={e.name} language={e.language} type={e.visibility} />)
        }
      </div>
    </div>
  )
}

export default App
