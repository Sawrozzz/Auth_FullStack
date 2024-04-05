import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SignUp />
    </>
  )
}

export default App
