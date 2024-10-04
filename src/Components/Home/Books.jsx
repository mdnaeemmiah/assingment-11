
import { useQuery } from '@tanstack/react-query'
import useAxiosCommon from '../../hooks/useAxiosCommon'
import { useSearchParams } from 'react-router-dom'
import Container from '../Share/Container'
import Card from './Card'
import Heading from './Heading'
import LoadingSpinner from './LoadingSpinner'

const Books = () => {
  const axiosCommon = useAxiosCommon()
  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useSearchParams()
  const category = params.get('category')

  console.log(category)
  const { data: books = [], isLoading } = useQuery({
    queryKey: ['books', category],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/books?category=${category}`)

      return data
    },
  })

  if (isLoading) return <LoadingSpinner />

  return (
    <Container>
      {books && books.length > 0 ? (
        <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
          {books.map(book => (
           <Card
           key={book._id} book={book}
           ></Card>
          ))}
        </div>
      ) : (
        <div className='flex items-center justify-center min-h-[calc(100vh-300px)]'>
          <Heading
            center={true}
            title='No Rooms Available In This Category!'
            subtitle='Please Select Other Categories.'
          />
        </div>
      )}
    </Container>
  )
}

export default Books
