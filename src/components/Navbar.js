import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
// import cst from '../assets/cst.jpg'
import cst2 from '../assets/cst2.png'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open , close }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src={cst2}
                    alt="Your Company"
                  />
                  <h1 className='pl-5 text-lg text-[#ffffff]'><b></b></h1>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <ul className="flex space-x-4">
                      <li>
                        <Link to="/" className={classNames(
                          'rounded-md px-3 py-2 text-sm font-medium',
                          'text-gray-300 hover:bg-gray-700 hover:text-white'
                        )}>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/about" className={classNames(
                          'rounded-md px-3 py-2 text-sm font-medium',
                          'text-gray-300 hover:bg-gray-700 hover:text-white'
                        )}>
                          About
                        </Link>
                      </li>
                      <li>
                        <Link to="/services" className={classNames(
                          'rounded-md px-3 py-2 text-sm font-medium',
                          'text-gray-300 hover:bg-gray-700 hover:text-white'
                        )}>
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link to="/products" className={classNames(
                          'rounded-md px-3 py-2 text-sm font-medium',
                          'text-gray-300 hover:bg-gray-700 hover:text-white'
                        )}>
                          Products
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact" className={classNames(
                          'rounded-md px-3 py-2 text-sm font-medium',
                          'text-gray-300 hover:bg-gray-700 hover:text-white'
                        )}>
                          Contact Us
                        </Link>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* ... (previous code) ... */}
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <ul className="space-y-1 px-2 pb-3 pt-2">
                <li>
                  <Link to="/" onClick={() => close()} className={classNames(
                    'block rounded-md px-3 py-2 text-base font-medium text-[#ffffff]',
                    'hover:bg-gray-700 hover:text-white'
                  )}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => close()} className={classNames(
                    'block rounded-md px-3 py-2 text-base font-medium text-[#ffffff]',
                    'hover:bg-gray-700 hover:text-white'
                  )}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" onClick={() => close()} className={classNames(
                    'block rounded-md px-3 py-2 text-base font-medium text-[#ffffff]',
                    'hover:bg-gray-700 hover:text-white'
                  )}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/products" onClick={() => close()} className={classNames(
                    'block rounded-md px-3 py-2 text-base font-medium text-[#ffffff]',
                    'hover:bg-gray-700 hover:text-white'
                  )}>
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => close()} className={classNames(
                    'block rounded-md px-3 py-2 text-base font-medium text-[#ffffff]',
                    'hover:bg-gray-700 hover:text-white'
                  )}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
