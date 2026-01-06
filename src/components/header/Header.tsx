import React, { useEffect, useState } from 'react'
import Swiggy from '../../assets/swiggy-white-bg.svg'
import { cn } from '../../utils/cn'
import Button from '../ui/Button'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {

  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (scrollY > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  })

  return (

    <div
      className='relative bg-primary'
    >

      <header
        className={cn(
          `w-305 mx-auto py-8 `,
          "flex justify-between items-center",
        )}
      >

        <div className={cn("flex justify-center items-center gap-3")} >

          <div
            className={cn(
              "w-[3.2rem] h-[2.8rem] rounded-xl bg-white",
              "flex justify-center items-center "
            )}
          >

            <img src={Swiggy} className={cn(' w-10 h-10 ')} />
          </div>

          <span className={cn(
            "text-white text-shadow-sm font-poppins text-3xl font-extrabold"
          )} >Swiggy</span>

        </div>

        <div className=' flex justify-center items-center gap-6 ' >

          <nav
            className={cn(
              "flex justify-center items-center gap-6"
            )}
          >
            <Link to={"/"} >
              <span
                className={cn(
                  "text-lg font-bold text-white text-shadow-xs font-inter "
                )}
              >
                Swiggy Corporate
              </span>
            </Link>

            <Link to={"/"} >
              <span
                className={cn(
                  "text-lg font-bold text-white text-shadow-xs font-inter "
                )}
              >
                Partner With us
              </span>
            </Link>
          </nav>

          <Button
            title="Get the App"
            variant='outline'
            className='border-white'
            textStyle='text-white'
          />
          <Button
            title="Sign in"
            className='bg-black'
            textStyle='text-white'
          />

        </div>

      </header>

      {show && (
        <div
          className={cn(
            "fixed top-4 left-1/2 -translate-x-1/2 z-50",
            "bg-white rounded-2xl shadow-xl",
            "px-8 py-4 w-[90%] max-w-5xl",
            "transition-all duration-300"
          )}
        >
          <header className="flex justify-between items-center">
            <div className={cn("flex justify-center items-center gap-3")} >

              <div
                className={cn(
                  "w-[3.2rem] h-[2.8rem] rounded-xl bg-white",
                  "flex justify-center items-center "
                )}
              >

                <img src={Swiggy} className={cn(' w-10 h-10 ')} />
              </div>

              <span className={cn(
                "text-white text-shadow-sm font-poppins text-3xl font-extrabold"
              )} >Swiggy</span>

            </div>

            <div className=' flex justify-center items-center gap-6 ' >

              <nav
                className={cn(
                  "flex justify-center items-center gap-6"
                )}
              >
                <Link to={"/"} >
                  <span
                    className={cn(
                      "text-lg font-bold text-white text-shadow-xs font-inter "
                    )}
                  >
                    Swiggy Corporate
                  </span>
                </Link>

                <Link to={"/"} >
                  <span
                    className={cn(
                      "text-lg font-bold text-white text-shadow-xs font-inter "
                    )}
                  >
                    Partner With us
                  </span>
                </Link>
              </nav>

              <Button
                title="Get the App"
                variant='outline'
                className='border-white'
                textStyle='text-white'
              />
              <Button
                title="Sign in"
                className='bg-black'
                textStyle='text-white'
              />

            </div>
          </header>
        </div>
      )}
    </div>
  )
}

export default Header