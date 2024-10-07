
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import AddBookForm from '../Components/Form/AddBookForm'
import { imageUpload } from '../api/utily'
import useAuth from '../hooks/useAuth'
import useAxiosSecure from '../hooks/useAxiosSecure'


const AddBooks = () => {
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()
  const [imagePreview, setImagePreview] = useState()
  const [imageText, setImageText] = useState('Upload Image')
  
  const { mutateAsync } = useMutation({
    mutationFn: async bookData => {
      const { data } = await axiosSecure.post(`/book`, bookData)
      return data
    },
    onSuccess: () => {
      console.log('Data Saved Successfully')
      toast.success('Book Added Successfully!')
      navigate('/listing-books')
      setLoading(false)
    },
  })

  //   Form handler
  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const form = e.target
    const category = form.category.value
    const title = form.title.value
    const description = form.description.value
    const author_name = form.author_name.value
    const quantity = form.quantity.value
    const rating = form.rating.value
    const image = form.image.files[0]

    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    }

    try {
      const image_url = await imageUpload(image)
      const bookData = {
        category,
        title,
        rating,
        author_name,
        quantity,
        host,
        description,
        image: image_url,
      }
      console.table(bookData)

      //   Post request to server
      await mutateAsync(bookData)
    } catch (err) {
      console.log(err)
      toast.error(err.message)
      setLoading(false)
    }
  }

  //   handle image change
  const handleImage = image => {
    setImagePreview(URL.createObjectURL(image))
    setImageText(image.name)
  }

  return (
    <>
      <Helmet>
        <title>Add Book</title>
      </Helmet>

      {/* Form */}
      <AddBookForm
        handleSubmit={handleSubmit}
        setImagePreview={setImagePreview}
        imagePreview={imagePreview}
        handleImage={handleImage}
        imageText={imageText}
        loading={loading}
      />
    </>
  )
}

export default AddBooks
