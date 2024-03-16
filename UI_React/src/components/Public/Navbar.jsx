import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-white">Birthday Events</div>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-300 text-white">Home</a></li>
            <li><a href="#" className="hover:text-gray-300 text-white">About</a></li>
            <li><a href="#" className="hover:text-gray-300 text-white">Team</a></li>
            <li><a href="#" className="hover:text-gray-300 text-white">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar