import React from 'react'
import ReactDOM from 'react-dom'
import './options.css'

const App: React.FC<{}> = () => {
  return (
    <div>
      options
      <img src="icon.png" />
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
