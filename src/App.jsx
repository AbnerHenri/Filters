import './App.css'

import { useEffect, useState } from 'react'

import Header from './Components/Header/Header'
import Card from './Components/Card/Card'

function App() {

  const [initialRepos, setInitialRepos] = useState([])
  const [repos, setRepos] = useState([])

  useEffect(()=>{
    const fetchRepos = async () =>{
      const Response = await fetch('https://api.github.com/users/AbnerHenri/repos')
      const Data = await Response.json()
      setInitialRepos(Data)
      setRepos(Data)
    }

    fetchRepos()
  }, [])

  const handleChange = ({ target }) => {
    const filtred = repos.filter(({ name, language })=>{
      name.includes(target.value) ||
      language.includes(target.values)
    })
  }

  return (
    <div className='Container'>
      <Header />

      <div className='Filters'>
        <input
          type={'text'}
          placeholder={'Search'} 
          className='Search' 
          onChange={handleChange}
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
