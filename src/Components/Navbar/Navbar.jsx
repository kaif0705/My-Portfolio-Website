import React from 'react'
import './Navbar.scss'

export const Navbar = () => {
  return (
    <div className='navbar'>
        {/* Sidebar */}

        <div className="wrapper">
            <span>Kaif</span>
            <div className="social">
                <a href=" ">
                    <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="Linkedin" />
                </a>
                <a href=" ">
                    <img src="" alt="Github" />
                </a>
                <a href=" ">
                    <img src="/instagram.png" alt="Instagram" />
                </a>
                <a href="">
                    <img src="/facebook.png" alt="Facebook" />
                </a>
            </div>
        </div>
    </div>
  )
}
