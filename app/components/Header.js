"use client"

import { useState, useContext } from "react";
import Modal from "@components/Modal";
import { SessionContext } from '@/app/context/Context';

export default function Header() {
    const scrollToSection = (e) => {
        e.preventDefault();
        const sectionID = e.target.getAttribute('href').substring(1)
        const section = document.getElementById(sectionID);
        if (section) {
          // Calculer la position de la section moins l'offset
          const sectionPosition = section.offsetTop - 110;
    
          // Utiliser window.scrollTo pour scroll à la position avec un offset
          window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth', // Pour un défilement fluide
          });
        }
    };
    const [openModal, setOpenModal] = useState(false);
    const session = useContext(SessionContext);
    return (
        <header className={`fixed w-full flex items-center justify-between lg:h-[104px] lg:px-16 lg:py-6 xl:px-28 bg-white z-20 ${ !!session ? "top-8" : "top-0"}`}>
            <div className="w-full flex items-center justify-between 2xl:max-w-[1240px] m-auto ">
                <a href="#" onClick={(e)=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})}} className=" justify-center flex h-[70px] p-[10px] pr-[50px] w-full lg:w-[unset] lg:h-14 lg:p-0 ">
                    <img src="https://viltrjl2hrtwu1vz.public.blob.vercel-storage.com/uploads/1728997050907-fullLogo-z8g4K4fIbNJRmUu6mF6rA8eiBSRv5N.svg" alt="logo"/>
                </a>
                <div className="w-10 h-[50px] m-[10px]  box-border z-30 lg:hidden ">
                    <div className="flex flex-col justify-evenly py-[10px] items-center z-30 inset-0 h-full" tabIndex={0} aria-label={openModal ? "Close Menu" : "Open Menu" } onClick={()=>{setOpenModal(!openModal)}}>
                        <span className={`${openModal ? "h-[3px] rotate-45 translate-y-[7.5px]": "h-[2px] " } transition-all w-6 bg-black block   `} />
                        <span className={`${openModal ? "h-[0px]": "h-[3px]" } w-6 bg-black block mix-blend-difference`} />
                        <span className={`${openModal ? "h-[3px] rotate-[-45deg] translate-y-[-7.5px]": "h-[4px] " } transition-all w-6 bg-black block`} />
                    </div>

                </div>

                <nav>
                    <ul >
                        <li><a href="#about" onClick={scrollToSection}>About</a></li>
                        <li><a href="#skills" onClick={scrollToSection}  >Skills</a></li>
                        <li><a href="#experiences" onClick={scrollToSection} >Experiences</a></li>
                        <li><a href="#projects" onClick={scrollToSection}  >Projects</a></li>
                        <li><a href="#contact" onClick={scrollToSection}  >Contact</a></li>
                    </ul>
                </nav>

                <button className="hidden lg:flex h-12 space-x-2 text-white bg-black rounded px-4 xl:px-5 py-4 xl:h-14">
                    <img alt="download icon" className="twenty" src="https://viltrjl2hrtwu1vz.public.blob.vercel-storage.com/uploads/1728996904225-download-icon-2gJsFuH2SSzGWffvO58LpBCa8d6uPb.svg" />
                    <p className="font-semibold leading-5 xl:text-xl xl:leading-6 ">Resume</p>
                </button>
                
                    <Modal 
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                    />
                
            </div>
        </header>
    )
}