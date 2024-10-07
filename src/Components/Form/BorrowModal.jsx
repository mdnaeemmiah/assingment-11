/* eslint-disable react/prop-types */

import useAuth from "../../hooks/useAuth"


const BorrowModal = ({
  handleSubmit,
  setBookData,
}) => {
  const {user} = useAuth();

  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 gap-10'>
          <div className='space-y-1 text-sm'>
            <label htmlFor='name' className='block text-gray-600'>
              name
            </label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
              name='name'
              id='name'
              type='text'
              value={user?.displayName}
              onChange={e =>
                setBookData({ user, name: e.target.value })
              }
              placeholder='name'
              required
            />
          </div>
          <div className='space-y-1 text-sm'>
            <label htmlFor='email' className='block text-gray-600'>
              email
            </label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
              name='email'
              id='email'
              type='text'
              value={user?.email}
              onChange={e =>
                setBookData({ user, email: e.target.value })
              }
              placeholder='email'
              required
            />
          </div>
        </div>
        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
          Confirm
        </button>
      </form>
    </div>
  )
}

export default BorrowModal

