import React, {useState} from 'react'

function App() {
  const [text, setText] = useState("")

  function handleClick(event) {
    const {value} = event.target
    setText(value)
  }
  return(
    <div>
      <h1>How fast do you type</h1>
      <textarea 
        onChange={handleClick}
      />
      <h3>Time remaingin</h3>
      <button>Start</button>
      <h3>Word count</h3>
    </div>
  )
}

export default App