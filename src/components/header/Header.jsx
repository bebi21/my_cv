import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Waypoint } from "react-waypoint";
import { Link } from "react-scroll";
export default function Example() {
  return (
    <header className='fixed bg-black flex justify-center w-[100vw] z-[999]'>
      <nav
        className=' w-[100%] mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8'
        aria-label='Global'>
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          <Link
            to='top'
            smooth
            duration={700}
            className='text-lg font-semibold leading-6 text-white cursor-pointer'>
            OVERVIEW
          </Link>
          <Link
            smooth
            duration={700}
            to='skills'
            className='text-lg font-semibold leading-6 text-white cursor-pointer'>
            SKILLS
          </Link>
          <Link
            smooth
            duration={700}
            to='projects'
            className='text-lg font-semibold leading-6 text-white cursor-pointer'>
            PROJECT
          </Link>
          <Link
            smooth
            duration={700}
            to='about-me'
            className='text-lg font-semibold leading-6 text-white cursor-pointer'>
            ABOUT ME
          </Link>
          <Link
            to='the-end'
            smooth
            duration={500}
            className='text-lg font-semibold leading-6 text-white cursor-pointer'>
            THE END
          </Link>
        </Popover.Group>
      </nav>
    </header>
  );
}
