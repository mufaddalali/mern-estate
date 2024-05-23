import {FaSearch} from "react-icons/fa"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
      <Link to="/">
      <h1 className="font-bold text-sm sm:text-xl flex gap-1 flex-wrap">
        <span className="text-slate-500">Mufaddal</span>
        <span className="text-slate-700">Estate</span>
      </h1>
      </Link>
      <form className="bg-slate-100 border border-slate-900 rounded-md px-3 py-2 flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent focus:outline-none w-24 sm:w-64"
        />
        <FaSearch className="text-slate-600"/>
      </form>
      <ul className="flex gap-3">
        <Link to="/" className="hover:text-black hover:underline">Home</Link>
        <Link to="/about" className="hover:text-black hover:underline">About</Link>
        <Link to="/sign-in" className="hover:text-black hover:underline">Sign In</Link>
      </ul>
    
      </div>
      </header>
  )
}

export default Header