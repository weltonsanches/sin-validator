import React from 'react'

function App() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='container min-h-80 bg-violet-200 text-center align-middle rounded-lg'>
        <h1 className="text-3xl text-center align-middle m-10	text-violet-950">
          SIN Number Validator
        </h1>

        <input type="text" placeholder="SIN Number" className="input input-bordered input-primary w-full max-w-xs m-5" />
        <button className="btn btn-primary">Validate</button>
      </div>
    </div>
  )
}

export default App
