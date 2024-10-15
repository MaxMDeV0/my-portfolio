"use client"

import { useState, useContext } from "react";
import Modal from "@components/Modal";
import { SessionContext } from '@/app/context/Context';
import Image from "next/image";

export default function Header() {

    const [openModal, setOpenModal] = useState(false);
    const session = useContext(SessionContext);
    return (
        <header className={`fixed w-full flex items-center justify-between lg:h-[104px] lg:px-16 lg:py-6 xl:px-28 bg-white z-20 ${ !!session ? "top-8" : "top-0"}`}>
            <div className="w-full flex items-center justify-between 2xl:max-w-[1240px] m-auto ">
                <a href="/" className=" justify-center flex h-[70px] p-[10px] pr-[50px] w-full lg:w-[unset] lg:h-14 lg:p-0 ">
                    <img src="https://viltrjl2hrtwu1vz.public.blob.vercel-storage.com/uploads/1728997050907-fullLogo-z8g4K4fIbNJRmUu6mF6rA8eiBSRv5N.svg" alt="logo"/>
                </a>
                <div className="w-10 h-[50px] m-[10px]  box-border z-30 lg:hidden ">
                    <div className="flex flex-col justify-evenly py-[10px] items-center z-30 inset-0 h-full" tabIndex={0} aria-label={openModal ? "Close Menu" : "Open Menu" } onClick={()=>{setOpenModal(!openModal)}}>
                        <span className={`${openModal ? "h-[3px] rotate-45 translate-y-[7.5px]": "h-[2px] " } transition-all w-6 bg-black block   `} />
                        <span className={`${openModal ? "h-[0px]": "h-[3px]" } w-6 bg-black block mix-blend-difference`} />
                        <span className={`${openModal ? "h-[3px] rotate-[-45deg] translate-y-[-7.5px]": "h-[4px] " } transition-all w-6 bg-black block`} />
                    </div>

                </div>

                <div className="hidden lg:flex items-center ">
                    <nav className="">
                        <ul className="flex text-l xl:text-xl">
                            <li><a href="/" className="p-4 font-semibold  leading-6">About</a></li>
                            <li><a href="/" className="p-4 font-semibold  leading-6">Skills</a></li>
                            <li><a href="/" className="p-4 font-semibold  leading-6">Experiences</a></li>
                            <li><a href="/" className="p-4 font-semibold  leading-6">Projects</a></li>
                            <li><a href="/" className="p-4 font-semibold  leading-6">Contact</a></li>
                        </ul>
                    </nav>
                </div>

                <button className="hidden lg:flex h-12 space-x-2 text-white bg-black rounded px-4 xl:px-5 py-4 xl:h-14">
                    <Image alt="download icon" height={20} width={20} src="https://viltrjl2hrtwu1vz.public.blob.vercel-storage.com/uploads/1728996904225-download-icon-2gJsFuH2SSzGWffvO58LpBCa8d6uPb.svg" />
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