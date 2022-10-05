/* This example requires Tailwind CSS v2.0+ */
import { Menu } from "./Menu"
import Link from 'next/link';
import { ToggleTheme } from "./ToggleTheme";
import { useEffect, useState } from "react";






export function Header() {
  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
    }
  };
  // ${stickyClass}


  return (
    <>
      <div className={`relative w-full py-2 border-y-[3px] border-[#333] dark:border-violet-900 mt-3 ease-in duration-300`}>
        <div className=" relative
             dark:bg-purple-700 bg-purple-600 ease-in duration-300
            md:h-20 h-12 sm:h-16
          ">
            <div className=" flex relative h-full m-auto justify-items-center  items-center max-w-[85rem]">
              <Menu />
              <div className="overflow-hidden justify-center p-1 flex h-7 sm:h-9 md:h-11 max-w-7xl mx-auto" aria-hidden="true">
              <Link href={"/"} passHref>
                    <img
                      className=" object-cover fill-white hover:cursor-pointer"
                      src="/logo3.svg"
                      alt=""
                    />
                  </Link>
                  {/* <Link href="/blog">
                    <a className="m-auto text-center font-chomsky text-3xl sm:text-4xl md:text-6xl xl:text-7xl text-white">Belford News</a>
                  </Link> */}
              </div>
              <ToggleTheme />
            </div>
            </div>
          
      </div>
    </>
  )
}
