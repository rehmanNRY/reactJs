import React from 'react'

const Footer = () => {
  return (

    <footer className="text-white relative bg-slate-900">
      {/* <div className="absolute h-full w-full img-bg -z-10 top-0 left-0"></div> */}
      {/* <div className="absolute h-full w-full -z-10 top-0 left-0 bg-[#010632db]"></div> */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 pb-8 sm:px-6 lg:px-8">
        <div
          className="flex flex-col items-center gap-4 rounded-lg bg-[#010632] p-6 shadow-lg sm:flex-row sm:justify-between"
        >
          <strong className="text-xl text-white sm:text-xl"> Make Your Next Career Move! </strong>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-indigo-600 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
            href="/"
          >
            <span className="text-sm font-medium"> Let&apos;s Get Started </span>

            <svg
              className="size-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-50">About Us</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a className="text-gray-100 transition hover:text-gray-100/75" href="/">
                  Company History
                </a>
              </li>

              <li>
                <a className="text-gray-100 transition hover:text-gray-100/75" href="/"> Meet the Team </a>
              </li>

              <li>
                <a className="text-gray-100 transition hover:text-gray-100/75" href="/">
                  Employee Handbook
                </a>
              </li>

              <li>
                <a className="text-gray-100 transition hover:text-gray-100/75" href="/"> Careers </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-50">Our Services</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a className="text-gray-100 transition hover:text-gray-100/75" href="/">
                  Web Development
                </a>
              </li>

              <li>
                <a className="text-gray-100 transition hover:text-gray-100/75" href="/"> Web Design </a>
              </li>

              <li>
                <a className="text-gray-100 transition hover:text-gray-100/75" href="/"> Marketing </a>
              </li>

              <li>
                <a className="text-gray-100 transition hover:text-gray-100/75" href="/"> Google Ads </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-50">Resources</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a className="text-gray-100 transition hover:text-gray-100/75" href="/"> Online Guides </a>
              </li>

              <li>
                <a className="text-gray-100 transition hover:text-gray-100/75" href="/">
                  Conference Notes
                </a>
              </li>

              <li>
                <a className="text-gray-100 transition hover:text-gray-100/75" href="/"> Forum </a>
              </li>

              <li>
                <a className="text-gray-100 transition hover:text-gray-100/75" href="/"> Downloads </a>
              </li>

              <li>
                <a className="text-gray-100 transition hover:text-gray-100/75" href="/">
                  Upcoming Events
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-50">Helpful Links</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a className="text-gray-100 transition hover:text-gray-100/75" href="/"> FAQs </a>
              </li>
              <li>
                <a className="text-gray-100 transition hover:text-gray-100/75" href="/"> Support </a>
              </li>
              <li>
                <a
                  className="group flex gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  href="/"
                >
                  <span className="text-gray-100 transition group-hover:text2gray-700/75"> Live Chat </span>

                  <span className="relative flex h-2 w-2">
                    <span
                      className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"
                    ></span>
                    <span className="relative inline-flex size-2 rounded-full bg-teal-500"></span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 sm:mt-7 text-center text-sm text-gray-300">
            Copyright &copy; 2022. All rights reserved.
          </p>
      </div>
    </footer>
  )
}

export default Footer