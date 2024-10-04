
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import Container from '../Share/Container'
import Heading from './Heading'
import LoadingSpinner from './LoadingSpinner'
import useAxiosCommon from '../../hooks/useAxiosCommon'
import { useState } from 'react'
import UpdateRoomModal from '../modal/UpdatedBookModal'
import { Helmet } from 'react-helmet-async'

const RoomDetails = () => {
  const { id } = useParams()
  const axiosCommon = useAxiosCommon()
  const [isOpen, setIsOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const closeModal = () => {
    setIsOpen(false)
  }

  const {
    data: book = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['book', id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/book/${id}`)
      return data
    },
  })

  if (isLoading) return <LoadingSpinner />
  console.log(book)
  return (
    
    <Container>
       <Helmet>
        <title>Book Details</title>
      </Helmet>

      {book && (
        <div className='max-w-screen-lg mx-auto'>
          {/* Header */}
          <div className='flex flex-col gap-6 mt-5'>
            <div>
              <Heading title={book.title} subtitle={book.location} />
              <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
                <img
                  className='object-cover w-full'
                  src={book.image}
                  alt='header image'
                />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1  md:gap-10 mt-6'>
            {/* book Info */}
            <div className='col-span-4 flex flex-col gap-8'>
              <div className='flex  md:justify-between  gap-2'>
                <div
                  className='
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              '
                >
                  <div>Author Name {book?.author_name}</div>
                </div>
                <div
                  className='flex flex-row  items-center   gap-4 font-light text-neutral-500'>
                  <div>{book?.rating} Rating</div>
                  <div>{book?.quantity} Quantity</div>
                </div>
              </div>

              <hr />
              <div
                className='  text-lg font-light text-neutral-500 ' >
                {book?.description}
              </div>
              <hr />
            </div>
            {/* aslikdhfksdj */}
            <div className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
              <button
                onClick={() => setIsEditModalOpen(true)}
                className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
              >
                <span
                  aria-hidden='true'
                  className='absolute inset-0  rounded-full'
                ></span>
                <span className='relative text-2xl bg-orange-200 p-2 rounded-lg'>Borrow Book</span>
              </button>
              {/* Update Modal */}
              <UpdateRoomModal
                isOpen={isEditModalOpen}
                setIsEditModalOpen={setIsEditModalOpen}
                book={book}
                refetch={refetch}
              />
            </div>
          </div>
        </div>
      )}
    </Container>
  )
}

export default RoomDetails
