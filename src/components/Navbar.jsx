import { Link } from 'react-router-dom'
import { useFirebase } from '../context/Firebase'


function Navbar() {
  const firebase = useFirebase();

  return (
    <div className="bg-zinc-900 text-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold tracking-wide text-sky-400 cursor-pointer">
        <Link to='/'>shopi</Link>
      </div>

      <div className="flex items-center space-x-6 text-gray-300">
        <span className="hover:text-white cursor-pointer"><Link to='/about'>About</Link></span>
        <span className="hover:text-white cursor-pointer">
          <Link to='/products'>Our Products</Link>
        </span>

        {firebase.isLoggedIn ? (
          <div className="flex items-center space-x-3">
            <span className="text-white font-medium">Hi, user</span>
            <img
              src={firebase.user?.photoURL || "https://ui-avatars.com/api/?name=User"}
              alt="Profile"
              className="w-8 h-8 rounded-full border-2 border-sky-400 shadow"
            />
            <Link to='/cart'>
                <button className="text-white text-xl hover:text-sky-400">
                 🛒
                </button>
            </Link>
          </div>
        ) : (
          <>
            <button className="bg-sky-600 hover:bg-sky-500 text-white px-4 py-1 rounded-md transition cursor-pointer">
              <Link to='/login'>Login</Link>
            </button>
            <Link to='/cart'>
                <button className="text-white text-xl hover:text-sky-400">
                 🛒
                </button>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar
