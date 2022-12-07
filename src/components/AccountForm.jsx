import PropTypes from 'prop-types'

const AccountForm = ({ page, setPage, formData, setFormData }) => {
  return (
    <div>
      <div className='form'>
        <label htmlFor='email'>Email:*</label>
        <input
          required
          id='email'
          type='email'
          placeholder='Email Id'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <label htmlFor='userName'>Username:*</label>
        <input
          required
          id='userName'
          type='text'
          placeholder='Username'
          value={formData.userName}
          onChange={(e) =>
            setFormData({ ...formData, userName: e.target.value })
          }
        />
        <label htmlFor='password'>Password:*</label>
        <input
          required
          id='password'
          type='password'
          placeholder='Password'
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <label htmlFor='confirmPassword'>Confirm Password:*</label>
        <input
          required
          id='confirmPassword'
          type='password'
          placeholder='Confirm Password'
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
        <button
          onClick={() => {
            setPage(page + 1)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}
export default AccountForm

AccountForm.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
}
