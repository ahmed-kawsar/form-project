const ImageForm = ({ page, setPage }) => {
  return (
    <div>
      <div className='form'>
        <label htmlFor='photo'>Upload Your Photo:</label>
        <input required id='photo' type='file' className='file' />
        <label htmlFor='signature'>Upload Your Signature:</label>
        <input required id='signature' type='file' className='file' />
        <button
          onClick={() => {
            setPage(page + 1)
          }}
        >
          Submit
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
export default ImageForm
