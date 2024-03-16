import React from 'react'

const Footer = () => {
  return (
    <div> <footer className="bg-gray-800 py-12">
    <div className="container mx-auto text-center">
      <div className="text-gray-400">
        <ul className="flex justify-center space-x-6">
          <li><a href="#" className="hover:text-white">Home</a></li>
          <li><a href="#" className="hover:text-white">About</a></li>
          <li><a href="#" className="hover:text-white">Team</a></li>
          <li><a href="#" className="hover:text-white">Contact</a></li>
        </ul>
        <p className="mt-6">&copy; 2024 Birthday Event Management System. All rights reserved.</p>
      </div>
    </div>
  </footer></div>
  )
}

export default Footer