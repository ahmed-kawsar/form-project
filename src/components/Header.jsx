import IconBar from './IconBar'
import ProgressBar from './ProgressBar'

const Header = ({ page }) => {
  return (
    <header>
      <h2 className='title'>Sign Up Your User Account</h2>
      <p className='tagline'>Fill all form field to go to next step</p>
      <IconBar page={page} />
      <ProgressBar page={page} />
    </header>
  )
}
export default Header
