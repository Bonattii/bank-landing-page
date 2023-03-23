import { useState } from 'react';
import clsx from 'clsx';

import { close, logo, menu } from '../assets';

import { navLinks } from '../constants';

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((navLink, index) => (
          <li
            key={navLink.id}
            className={clsx(
              'font-poppins font-normal cursor-pointer text-[16px] text-white',
              {
                'mr-10': index !== navLinks.length - 1
              }
            )}
          >
            <a href={`#${navLink.id}`}>{navLink.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(prev => !prev)}
        />

        <div
          className={clsx(
            'p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar flex',
            { hidden: toggle === false }
          )}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((navLink, index) => (
              <li
                key={navLink.id}
                className={clsx(
                  'font-poppins font-normal cursor-pointer text-[16px] text-white',
                  {
                    'mb-4': index !== navLinks.length - 1
                  }
                )}
              >
                <a href={`#${navLink.id}`}>{navLink.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
