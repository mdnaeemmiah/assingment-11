import { categories } from '../Categories/CategoriesData'
import { TbFidgetSpinner } from 'react-icons/tb'
const AddBookForm = ({
  handleSubmit,
  setImagePreview,
  imagePreview,
  imageText,
  handleImage,
  loading,
}) => {
  
  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='category' className='block text-gray-600'>
                Category
              </label>
              <select
                required
                className='w-full px-4 py-3 border-green-300 focus:outline-green-500 rounded-md'
                name='category'
              >
                {categories.map(category => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='title' className='block text-gray-600'>
                Title
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md '
                name='title'
                id='title'
                type='text'
                placeholder='Title'
                required
              />
            </div>

            <div className=' p-4 bg-white w-full  m-auto rounded-lg flex justify-between items-center'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      onChange={e => handleImage(e.target.files[0])}
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-green-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                      {/* {imageText} */}
                      {imageText.length > 20
                        ? imageText.split('.')[0].slice(0, 15) +
                          '....' +
                          imageText.split('.')[1]
                        : imageText}
                    </div>
                  </label>
                </div>
              </div>
              <div className='h-16 w-16 object-cover overflow-hidden flex items-center'>
                {imagePreview && <img src={imagePreview} />}
              </div>
            </div>
            <div className='flex justify-between gap-2'>
            
              <div className='space-y-1 text-sm'>
                <label htmlFor='guest' className='block text-gray-600'>
                Rating
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md '
                  name='rating'
                  id='guest'
                  type='number'
                  placeholder='rating'
                  required
                />
              </div>
              <div className='space-y-1 text-sm'>
                <label htmlFor='guest' className='block text-gray-600'>
                Quantity
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md '
                  name='quantity'
                  id='guest'
                  type='number'
                  placeholder='quantity'
                  required
                />
              </div>
            </div>

            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='bedrooms' className='block text-gray-600'>
                Author Name
                </label>
                <input
                  className=' w-96 px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md '
                  name='author_name'
                  id='bedrooms'
                  type='text'
                  placeholder='author_name'
                  required
                />
              </div>
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='description' className='block text-gray-600'>
                Description
              </label>

              <textarea
                id='description'
                className='block rounded-md focus:green-300 w-full h-32 px-4 py-3 text-gray-800  border border-green-300 focus:outline-rose-500 '
                name='description'
              ></textarea>
            </div>
          </div>
        </div>

        <button
          disabled={loading}
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-green-500'
        >
          {loading ? (
            <TbFidgetSpinner className='animate-spin m-auto' />
          ) : (
            ' Save & Continue'
          )}
        </button>
      </form>
    </div>
  )
}

export default AddBookForm
