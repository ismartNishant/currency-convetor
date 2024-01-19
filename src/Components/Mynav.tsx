import { SunIcon, MoonIcon } from 'lucide-react';
import { Dispatch, SetStateAction, useEffect } from 'react';
import React from 'react'
import { Menu, X } from 'lucide-react'

interface MyNavProps {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>;
}

export function Mynav({ theme, setTheme }: MyNavProps) {

  const menuItems = [
    {
      name: 'Home',
      href: '#',
    },
    {
      name: 'About',
      href: '#',
    },
    {
      name: 'Contact',
      href: '#',
    },
  ]


  const iconOptions = [
    {
      name: 'light',
      icon: <SunIcon />,
    },
    {
      name: 'dark',
      icon: <MoonIcon />,

    },

  ]

  const element = document.documentElement;
  const darkQuerry = window.matchMedia('(prefers-color-scheme: dark)');

  console.log(darkQuerry, "darkqueery")

  function onWindowMatch() {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuerry.matches)) {
      element.classList.add("dark")
    } else {
      element.classList.remove("dark")
    }
  }

  onWindowMatch()

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add('dark')
        localStorage.setItem("theme", "dark")
        break;

      case "light":
        element.classList.remove('dark')
        localStorage.setItem("theme", "light")
        break;

      default:
        localStorage.removeItem("theme")
        break;
    }
  }, [element.classList, theme])


  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="fixed z-20 w-full dark:bg-gray-900 dark:text-white bg-white text-black  ">
      <div className="mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-1">
          <span className='cursor-pointer'>
            <img className='w-12' src='/src/assets/logo.png' alt='logo' />
          </span>
          <span className="cursor-pointer font-bold text-2xl">CURRENCY</span>
        </div>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={toggleMenu}
                  className="text-lg font-semibold dark:text-gray-100 text-gray-800 hover:text-yellow-400 hover:underline-offset-8 hover:underline duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block ">

          {iconOptions.map((item) => (
            <button key={item.name}
              type="button"
              onClick={() => setTheme(item.name)}
              className={`duration-100   mx-2 border-[3px] ${item.name === "light" ? "bg-yellow-300 " : "bg-sky-300 "} ${theme === item.name && "text-gray-800  animate-spin "}   rounded-full   p-2  font-semibold  shadow-sm   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow `}
            >
              {item.icon}
            </button>
          ))}


        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden dark:bg-gray-900 dark:text-gray-100 divide-gray-50 bg-white">
            <div className="divide-y-2  rounded-lg  shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="pb-4 ">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <img className='w-10' src='/src/assets/SL-020622-4930-02.jpg' alt='logo' />
                    </span>
                    <span className="font-bold">DevUI</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={toggleMenu}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium dark:text-gray-100 text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <div className=" mt-4">

                  {iconOptions.map((item) => (
                    <button key={item.name}
                      type="button"
                      onClick={() => setTheme(item.name)}

                      className={`duration-100   mx-2 border-[3px] ${item.name === "light" ? "bg-yellow-300 " : "bg-sky-300 "} ${theme === item.name && "text-gray-800  animate-spin "}   rounded-full   p-2  font-semibold  shadow-sm   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow `}
                    >
                      {item.icon}
                    </button>
                  ))}



                </div>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
