import Header from './components/Header'
import AccountForm from './components/AccountForm'
import ImageForm from './components/ImageForm'
import PersonForm from './components/PersonForm'
import Success from './components/Success'
import { useState } from 'react'

const App = () => {
  const [page, setPage] = useState(0)
  const formComponents = [
    <AccountForm page={page} setPage={setPage} />,
    <PersonForm page={page} setPage={setPage} />,
    <ImageForm page={page} setPage={setPage} />,
    <Success />,
  ]
  return (
    <div className='App'>
      <Header page={page} />
      {formComponents[page]}
    </div>
  )
}
export default App
