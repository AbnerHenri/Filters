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

  function handleChange(value){

    if(!value){
      setRepos(initialRepos)
      return;
    }

    const newRepos = repos.map((e)=> {
      return {
        name : e.name.toLowerCase(),
        language : e.language,
        visibility : e.visibility
      }
    })

    let filtred = newRepos.filter((e)=> (
      e.startsWith(value)
    ))


    setRepos(filtred)
  }

  return (
    <div className='Container'>
      <Header />

      <div className='Filters'>
        <input
          type={'text'}
          placeholder={'Search'} 
          className='Search' 
          onChange={(e) => handleChange(e.target.value)}
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
