import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { HiMenu } from 'react-icons/hi';
import { Link as LinkScroll } from "react-scroll";
import clsx from "clsx";


const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setHasScrolled(window.scrollY > 32)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const NavLink = ({ title }) => (
    <LinkScroll onClick={() => setIsOpen(false)} to={title} offset={-100} spy smooth activeClass="nav-active" className="base-bold text-p4 uppercase transition-colors duration-300 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
      {title}
    </LinkScroll>
  );

  return (
    <header className={clsx('fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4', hasScrolled && 'py-2 bg-black-100 backdrop-blur-[8px]')}>
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2" href="">
          <img src="/images/logo-crop.png"  width={40} height={55} alt="logo" className="rounded-14" />
          <span>Stunning</span>
        </a>

        <div className={clsx('w-full max-lg:w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:bg-s1 max-lg:opacity-0', isOpen ? 'max-lg:opacity-100' : 'max-lg:pointer-events-none')}>
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md: px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" />
                  <NavLink title="pricing" />
                </li>
                <li className="nav-logo">
                  <LinkScroll to="hero" offset={-250} spy smooth className={clsx('max-lg:hidden transition-transform duration-500 cursor-pointer')}>
                    <img
                      src="/images/logo-yoga.png"
                      width={100}
                      height={45}
                      alt="logo"
                      className="rounded-full"
                    />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title="faq" />
                  <NavLink title="streams" />
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
                <img src="/images/bg-outlines.svg" alt="bg-outlines.svg" width={960} height={380} className="relative z-2" />
            </div>
          </div>
        </div>
        <button 
            className="lg:hidden z-2 size-10 flex justify-center items-center"
            onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {
          isOpen ? 
          <FaTimes className="border-2 rounded-full border-s4/25 p-2 box-content" size={20} color="white" /> 
          : 
          <HiMenu className="border-2 rounded-full border-s4/25 p-2 box-content" size={20} color="white" />
          }
        </button>
      </div>
    </header>
  );
};

export default Header;
