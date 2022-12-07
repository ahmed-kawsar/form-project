const PersonForm = ({ page, setPage }) => {
  return (
    <div>
      <div className='form'>
        <label htmlFor='firstName'>FIrst Name: *</label>
        <input required type='text' placeholder='First Name' id='firstName' />
        <label htmlFor='lastName'>Last Name: *</label>
        <input required type='text' placeholder='Last Name' id='lastName' />
        <label htmlFor='contactNo'>Contact No.: *</label>
        <input required type='text' placeholder='Contact No.' id='contactNo' />
        <label htmlFor='altContact'>Alternate Contact No.: *</label>
        <input
          required
          type='text'
          placeholder='Alternate Contact No.'
          id='altContact'
        />
        <button
          onClick={() => {
            setPage(page + 1)
          }}
        >
          Next
        </button>
        <button
          onClick={() => {
            setPage(page - 1)
          }}
        >
          Previous
        </button>
      </div>
    </div>
  )
}
export default PersonForm
