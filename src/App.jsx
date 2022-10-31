import './App.css'

import { useEffect, useState } from 'react'

import Header from './Components/Header/Header'
import Card from './Components/Card/Card'

function App() {

  const [initialRepos, setInitialRepos] = useState([])
  const [repos, setRepos] = useState([])

  return (
    <div className='Container'>
      <Header />

      <div className='Filters'>
        <input
          type={'text'}
          placeholder={'Search'} 
          className='Search' 
          value={search}
        />
      </div>

      <div className='Cards'>
        {/* {         
          repos.map(e => <Card name={e.name} language={e.language} type={e.visibility} />)
        } */}
      </div>
    </div>
  )
}

export default App
