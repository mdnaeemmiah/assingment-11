import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Card = ({ book }) => {
    return (
        <Link to={`/book/${book?._id}`} className='col-span-1 cursor-pointer group'>
            <div className='flex flex-col gap-2 w-full'>
                <div
                    className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
                >
                    <img
                        className='
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              '
                        src={book?.image}
                        alt='Room'
                    />
                    <div
                        className='
              absolute
              top-3
              right-3
            '
                    ></div>
                </div>
                <div className='flex justify-between'>
                    <div className='font-semibold text-lg'>{book?.author_name}</div>
                    <div className='font-semibold text-lg bg-orange-300 rounded-lg w-8 p-1 text-center'>{book?.rating}*</div>
                </div> 
                <div className='font-light text-neutral-500'>{book?.title}</div>
                <div className='flex flex-row items-center gap-1'>
                    <div className='font-semibold'>Quantity: {book?.quantity}</div>
                    <div className='font-light'>books</div>
                </div>
            </div>
        </Link>
    )
}

Card.propTypes = {
    room: PropTypes.object,
}

export default Card
