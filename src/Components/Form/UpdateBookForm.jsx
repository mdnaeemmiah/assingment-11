/* eslint-disable react/prop-types */
import { categories } from '../Categories/CategoriesData'

const UpdateBookForm = ({
  handleSubmit,
  handleImage,
  setBookData,
  bookData,
}) => {
  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 gap-10'>

          <div className='space-y-1 text-sm'>
            <label htmlFor='title' className='block text-gray-600'>
              Title
            </label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
              name='title'
              id='title'
              type='text'
              value={bookData?.title}
              onChange={e =>
                setBookData({ ...bookData, title: e.target.value })
              }
              placeholder='Title'
              required
            />
          </div>

          <div className='space-y-1 text-sm'>
            <label htmlFor='category' className='block text-gray-600'>
              Category
            </label>
            <select
              required
              value={bookData?.category}
              onChange={e =>
                setBookData({ ...bookData, category: e.target.value })
              }
              className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
              name='category'
            >
              {categories.map(category => (
                <option value={category.label} key={category.label}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
            <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
              <div className='flex flex-col w-max mx-auto text-center'>
                <label>
                  <input
                    className='text-sm cursor-pointer w-36 hidden'
                    type='file'
                    name='image'
                    onChange={e => handleImage(e.target.files[0])}
                    id='image'
                    accept='image/*'
                    hidden
                  />
                  <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                    Upload Image
                  </div>
                </label>
              </div>
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
                id='rating'
                value={bookData?.price}
                onChange={e =>
                  setBookData({ ...bookData, price: e.target.value })
                }
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
                value={bookData?.guests}
                onChange={e =>
                  setBookData({ ...bookData, guests: e.target.value })
                }
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
                value={bookData?.bathrooms}
                onChange={e =>
                  setBookData({ ...bookData, bathrooms: e.target.value })
                }
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
              value={bookData?.description}
              onChange={e =>
                setBookData({ ...bookData, description: e.target.value })
              }
              className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
              name='description'
            ></textarea>
          </div>
        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
          Update
        </button>
      </form>
    </div>
  )
}

export default UpdateBookForm
