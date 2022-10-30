import './App.css'

import { useEffect, useState } from 'react'

import Header from './Components/Header/Header'
import Card from './Components/Card/Card'

function App() {

  const [repos, setRepos] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=> {

      (async function Res() {
        fetch('https://api.github.com/users/AbnerHenri/repos')
        .then(res => res.json())
        .then(data => setRepos(data))
        
      })()

  }, [])
  
  return (
    <div className='Container'>
      <Header />

      <div className='Filters'>
        <input
          type={'text'}
          placeholder={'Search'} 
          className='Search' 
          onChange={(e)=> setSearch(e.target.value)}
          value={search}
        />
      </div>

      <div className='Cards'>
        {         
          repos.map(e => <Card name={e.name} language={e.language} type={e.visibility} />)
        }
      </div>
    </div>
  )
}

export default App
