const ProgressBar = ({ page }) => {
  return (
    <div className='progress-bar'>
      <div
        style={{
          width:
            page === 0
              ? '25%'
              : page === 1
              ? '50%'
              : page === 2
              ? '75%'
              : '100%',
        }}
      ></div>
    </div>
  )
}
export default ProgressBar
