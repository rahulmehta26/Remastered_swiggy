import React from 'react'
import { cn } from '../../utils/cn'
import Swiggy from '../icons/Swiggy'
import SwiggyImg from '../../assets/swiggy-white-bg.svg'
import { useLocation } from 'react-router-dom'


const LogoSection = ({ show = false }: { show: boolean }) => {

    const location = useLocation();

    return (
        <div className={cn("flex justify-center items-center gap-3")} >

            <div
                className={cn(
                    "flex justify-center items-center ",
                    location.pathname === "/" && "w-[3.2rem] h-[2.8rem] rounded-[0.85rem] bg-white"
                )}
            >
                {
                    location.pathname === "/restaurants" ? (
                        <Swiggy className={cn("w-12 h-12")} backgroundColor={show ? "#ffffff" : ""} logoColor={show ? "#FF5200" : ""} />
                    ) : (
                        <img src={SwiggyImg} className={cn(' w-10 h-10 ')} />
                    )
                }

            </div>

            {
                location.pathname === "/" && (
                    <span className={cn(
                        "text-white text-shadow-sm font-poppins text-3xl font-extrabold",
                    )} >
                        Swiggy
                    </span>
                )

            }

        </div>
    )
}

export default LogoSection