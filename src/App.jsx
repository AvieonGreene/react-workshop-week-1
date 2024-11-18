import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() =>{
  if (count === 10) {
    document.title = "Target reached"
  }else if(count < 0) {
    document.title ="Your to low"
  }else if( count > 10)
  {
    document.title = "To High"
  }
  else {
    document.title = "Keep Going"
  }
  }, [count])

  return (
    <>
      <h1>✨ counter ✨</h1>
      <div className="card">
        <p>count is {count}</p>
        <button
          className="increment"
          onClick={() => setCount((count) => count + 1)}
        >
          Add Number
        </button>
        <button
          className="subtract"
          onClick={() => setCount((count) => count - 1)}
        >
          Subtract Number
        </button>


        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
