import PropTypes from 'prop-types'

const PersonForm = ({ page, setPage, formData, setFormData }) => {
  return (
    <div>
      <div className='form'>
        <label htmlFor='firstName'>FIrst Name: *</label>
        <input
          required
          type='text'
          placeholder='First Name'
          id='firstName'
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
        <label htmlFor='lastName'>Last Name: *</label>
        <input
          required
          type='text'
          placeholder='Last Name'
          id='lastName'
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
        <label htmlFor='contactNo'>Contact No.: *</label>
        <input
          required
          type='text'
          placeholder='Contact No.'
          id='contactNo'
          value={formData.contactNo}
          onChange={(e) =>
            setFormData({ ...formData, contactNo: e.target.value })
          }
        />
        <label htmlFor='altContact'>Alternate Contact No.: *</label>
        <input
          required
          type='text'
          placeholder='Alternate Contact No.'
          id='altContact'
          value={formData.altContactNo}
          onChange={(e) =>
            setFormData({ ...formData, altContactNo: e.target.value })
          }
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

PersonForm.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
}
