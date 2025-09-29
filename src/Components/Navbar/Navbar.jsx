import React from 'react'
import './Navbar.scss'
import { motion } from 'framer-motion';
import { Sidebar } from '../Sidebar/Sidebar';

export const Navbar = () => {
  return (
    <div className='navbar'>
        {/* Sidebar */}
        <Sidebar />
        <div className="wrapper">
            <motion.span 
                initial={{opacity:0, scale:0.5}}
                animate={{opacity:1, scale:1}}
                transition={{duration:0.5}}
            >
                Kaif
            </motion.span>
            <div className="social">
                <a href="https://www.linkedin.com/in/mohammedkaif07/" target='_blank' rel='noreferrer'>
                    <img className='linkedin' src="/linkedin.svg" alt="Linkedin"/>
                </a>
                <a href="https://github.com/kaif0705" target='_blank' rel='noreferrer'>
                    <img className='github' src="/github.webp" alt="Github" />
                </a>
                <a href="https://www.instagram.com/kaifff.0705/" target='_blank' rel='noreferrer'>
                    <img className='insta' src="/instagram.png" alt="Instagram" />
                </a>
            </div>
        </div>
    </div>
  )
}
