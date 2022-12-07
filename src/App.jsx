import Header from './components/Header'
import AccountForm from './components/AccountForm'
import ImageForm from './components/ImageForm'
import PersonForm from './components/PersonForm'
import Success from './components/Success'
import { useState } from 'react'

const App = () => {
  const [page, setPage] = useState(0)
  const [formData, setFormData] = useState({
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    contactNo: 0,
    altContactNo: 0,
    photo: null,
    signature: null,
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    setPage(page + 1)
    console.log(formData)
  }
  const formComponents = [
    <AccountForm
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <PersonForm
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <ImageForm
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <Success />,
  ]
  return (
    <div className='App'>
      <Header page={page} />
      <form onSubmit={handleSubmit}>{formComponents[page]}</form>
    </div>
  )
}
export default App
