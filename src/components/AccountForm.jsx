const AccountForm = ({ page, setPage }) => {
  return (
    <div>
      <div className='form'>
        <label htmlFor='email'>Email:*</label>
        <input required id='email' type='email' placeholder='Email Id' />
        <label htmlFor='userName'>Username:*</label>
        <input required id='userName' type='text' placeholder='Username' />
        <label htmlFor='password'>Password:*</label>
        <input required id='password' type='password' placeholder='Password' />
        <label htmlFor='confirmPassword'>Confirm Password:*</label>
        <input
          required
          id='confirmPassword'
          type='password'
          placeholder='Confirm Password'
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
