import { useEffect, useState } from 'react'
import Create from './components/Create'
// import './App.css'
import './components/Style.css'
function App() {
  let [amount,setAmount]=useState(0)

  useEffect(()=>{},[amount])
 
  return (
    <>
      <div>
        <h1>Personal Finance Manager</h1>
        <h3 >Balance:${amount}</h3>
        <Create setAmount={setAmount} />
      </div>
    </>
  )
}

export default App
