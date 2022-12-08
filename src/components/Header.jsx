import PropTypes from 'prop-types'
import IconBar from './IconBar'
import ProgressBar from './ProgressBar'

const Header = ({ page }) => {
  return (
    <header>
      <h2 className='title'>Sign Up Your User Account</h2>
      <p className='tagline'>Fill all form field to go to next step</p>
      <IconBar page={page} />
      <ProgressBar page={page} />
      <div className='meta'>
        <h2>
          {page === 0
            ? 'Account Information'
            : page === 1
            ? 'Personal Information'
            : page === 2
            ? 'Image Upload'
            : 'Finish'}
        </h2>
        <h2>{page + 1} / 4</h2>
      </div>
    </header>
  )
}
export default Header

Header.propTypes = {
  page: PropTypes.number.isRequired,
}
