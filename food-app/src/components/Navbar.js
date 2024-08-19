import React from 'react'
const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-[#010632] shadow z-10 text-gray-200 py-4">
        <div className="container flex justify-between items-center px-16">
          <img src="https://foodmatters.in/wp-content/uploads/2022/06/thetab.png" width={120} alt="" />
          <ul className='flex gap-5'>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Events</a></li>
            <li><a href="/">Events</a></li>
          </ul>
          <div className='flex gap-5'>
            <button type="button"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(230, 230, 230, 1)" }}><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg></span></button>
            <button type="button"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></span></button>
            <button type="button" className='py-2 px-7 text-lg bg-[#F01543] rounded'>Contact</button>
          </div>
        </div>
      </nav>
      <nav className="invisible top-0 left-0 right-0 bg-[#010632] shadow z-10 text-gray-200 py-4">
        <div className="container flex justify-between items-center px-16">
          <img src="https://foodmatters.in/wp-content/uploads/2022/06/thetab.png" width={120} alt="" />
          <ul className='flex gap-5'>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Events</a></li>
            <li><a href="/">Events</a></li>
          </ul>
          <div className='flex gap-5'>
            <button type="button"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(230, 230, 230, 1)" }}><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg></span></button>
            <button type="button"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></span></button>
            <button type="button" className='py-2 px-7 text-lg bg-[#F01543] rounded'>Contact</button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar