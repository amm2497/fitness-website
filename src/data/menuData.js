import {AiOutlineCalendar, AiOutlineInfoCircle} from 'react-icons/ai'
import {IoIosFitness} from 'react-icons/io'
import {TfiWrite} from 'react-icons/tfi'
import React from 'react'

export const menuData = [
    {
        title: "About",
        link: "/about",
        icon: <AiOutlineInfoCircle/>,
    },
    {
        title: "Classes",
        link: "/classes",
        icon: <AiOutlineCalendar/>,
    },
    {
        title: "Trainers",
        link: "/trainers",
        icon: <IoIosFitness/>,
    },
    {
        title: "Plans",
        link: "/plans",
        icon: <TfiWrite/>,
    },
    {
        title: "Contact",
        link: "/contact",
        icon: <TfiWrite/>,
    },
]