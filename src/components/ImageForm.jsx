const ImageForm = ({ page, setPage, formData, setFormData }) => {
  return (
    <div>
      <div className='form'>
        <label htmlFor='photo'>Upload Your Photo:</label>
        <input
          required
          id='photo'
          type='file'
          className='file'
          value={formData.photo}
          onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
        />
        <label htmlFor='signature'>Upload Your Signature:</label>
        <input
          required
          id='signature'
          type='file'
          className='file'
          value={formData.photo}
          onChange={(e) =>
            setFormData({ ...formData, signature: e.target.value })
          }
        />
        <button type='submit'>Submit</button>
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
