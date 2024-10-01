import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>✨ counter ✨</h1>
      <div className="card">
        <p>count is {count}</p>
        <button
          className="increment"
          onClick={() => setCount((count) => count + 1)}
        >
          increment
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
