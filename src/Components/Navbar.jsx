import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import avatarImg from '../assets/placeholder.jpg'
import logo from '../assets/logo.library.png'


const Navbar = () => {
  const { user, logOut } = useAuth()

  return (
    <div className='navbar bg-base-200 shadow-sm container px-4 mx-auto '>
      <div className='flex-1'>
        <div className='flex gap-2 items-center'>
          <img className='w-auto h-8' src={logo} alt='' />
          <span className='font-bold'>Library Management System</span>
        </div>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/login' >Login</Link>
          </li>
        </ul>

        <div className='dropdown dropdown-end z-50'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            <div className='w-10 rounded-full' title=''>
              <img
                className='rounded-full'
                referrerPolicy='no-referrer'
                src={user && user.photoURL ? user.photoURL : avatarImg}
                alt='profile'
                height='30'
                width='30'
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link to={`/addBook/:id`} className='justify-between'>Add Book</Link>
            </li>
            <li>
              <Link to='/all-books'>All Books</Link>
            </li>
            <li>
              <Link to='/listing-books'>My Listings Books</Link>
            </li>
            <li>
              <Link to='/borrowed' >Borrowed Books</Link>
            </li>
            <li className='mt-2'>
              <button
                
                onClick={logOut}
                className='bg-gray-200 block text-center'>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar