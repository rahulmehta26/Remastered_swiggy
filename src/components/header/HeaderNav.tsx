import React from 'react'
import { cn } from '../../utils/cn'
import { NavLink } from 'react-router-dom'
import { NAV_LINKS } from '../../constant/navItems'
import Text from '../ui/Text'
import Button from '../ui/Button'
import TiltArrow from '../icons/TiltArrow'

const HeaderNav = () => {
    return (
        <div className={cn(' flex justify-center items-center gap-6 ')} >

            <nav
                className={cn(
                    "flex justify-center items-center gap-6"
                )}
            >

                {
                    location.pathname === "/" ? (
                        <div
                            className={cn(
                                "flex justify-center items-center gap-6"
                            )}
                        >

                            <NavLink to={"/"} >
                                <span
                                    className={cn(
                                        "text-lg font-bold text-white text-shadow-xs font-inter "
                                    )}
                                >
                                    Swiggy Corporate
                                </span>
                            </NavLink>

                            <NavLink to={"/"} >
                                <span
                                    className={cn(
                                        "text-lg font-bold text-white text-shadow-xs font-inter "
                                    )}
                                >
                                    Partner With us
                                </span>
                            </NavLink>
                        </div>
                    ) : (
                        <>
                            {
                                NAV_LINKS?.map(({ icon: Icon, id, title, url }) => {
                                    return (
                                        <NavLink
                                            to={url}
                                            key={id}
                                            className={cn(
                                                "flex justify-center items-center gap-2",
                                                "group"
                                            )}
                                        >

                                            <Icon className={cn("w-6 h-6 group-hover:text-primary")} />

                                            <Text
                                                as='span'
                                                className={cn(
                                                    "text-black text-shadow-2xs text-base font-bold",
                                                    "group-hover:text-primary transition-all duration-200"
                                                )}
                                            >
                                                {title}
                                            </Text>

                                        </NavLink>
                                    )
                                })
                            }
                        </>
                    )
                }

            </nav>

            {
                location.pathname === "/" && (
                    <div
                        className={cn(' flex justify-center items-center gap-6 ')}
                    >

                        <Button
                            title="Get the App"
                            variant='outline'
                            className='border-white gap-2'
                            textStyle='text-white'
                            rightIcon={TiltArrow}
                            rightIconStyle={cn('text-white stroke-2 w-6 h-auto')}

                        />
                        <Button
                            title="Sign in"
                            className={cn('px-10 bg-black')}
                            textStyle='text-white'

                        />
                    </div>
                )
            }

        </div>
    )
}

export default HeaderNav