import React from 'react'
import NavbarItemWithSuspense from './Navbaritem'

export default function Navbar() {
  return (
    <div className='flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6'>
      <NavbarItemWithSuspense title="Trending"param="fetchTrending" />
      <NavbarItemWithSuspense title="Top Rated"param="fetchTopRated" />
    </div>
  )
}
