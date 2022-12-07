import { FaUnlock } from 'react-icons/fa'
import { MdPerson } from 'react-icons/md'
import { BsFillCameraFill } from 'react-icons/bs'
import { FaCheck } from 'react-icons/fa'

const IconBar = ({ page }) => {
  return (
    <div>
      <div className='bar-icon-container'>
        <div></div>
        <div className='active-bar'></div>
        <FaUnlock className='active-icon' />
        <div className={page < 1 ? 'disabled-bar' : 'active-bar'}></div>
        <MdPerson className={page < 1 ? 'disabled-icon' : 'active-icon'} />
        <div className={page < 2 ? 'disabled-bar' : 'active-bar'}></div>
        <BsFillCameraFill
          className={page < 2 ? 'disabled-icon' : 'active-icon'}
        />
        <div className={page < 3 ? 'disabled-bar' : 'active-bar'}></div>
        <FaCheck className={page < 3 ? 'disabled-icon' : 'active-icon'} />
        <div className={page < 3 ? 'disabled-bar' : 'active-bar'}></div>
      </div>
      <div className='caption-container'>
        <p>Account</p>
        <p>Person</p>
        <p>Image</p>
        <p>Finish</p>
      </div>
    </div>
  )
}
export default IconBar
