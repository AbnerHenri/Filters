import './App.css'

import Header from './Components/Header/Header'
import Card from './Components/Card/Card'

function App() {
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
