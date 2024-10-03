"use client"

import { useEffect, useState } from "react"
import Modal from "./Modal";

export default function Header() {
    const [openModal, setOpenModal] = useState(false);
	const [triggerAnimation, setTrigerAnimation] = useState(false);

    useEffect(()=>{
        let body = document.getElementsByTagName("body")[0];

        if(openModal){
            body.style.overflow = 'hidden';

        }else{body.style.overflow = 'unset';}
    },[openModal])

    function timeout(delay) {
		return new Promise( res => setTimeout(res, delay) );
	}

	const closeModal = async() => {
		setTrigerAnimation(false);
		await timeout(200);
		setOpenModal(false);
	}

    const toggleModal = () => {
        if(openModal) {
            closeModal();
        }else {
            setOpenModal(true);
        }
    }

    return (
            <header className=" ">
                <a href="/" className=" justify-center flex h-[70px] p-[10px] pr-[50px] fixed w-full">
                    <img src="/images/fullLogo.svg" alt="logo"/>
                </a>
                <div className="fixed w-10 h-[50px] m-[10px] p-[10px] box-border md:none mix-blend-difference invert-[1] right-0 z-30">
                    <div className="absolute flex flex-col justify-evenly py-[10px] items-center z-30 inset-0" tabIndex={0} aria-label={triggerAnimation ? "Close Menu" : "Open Menu" } onClick={toggleModal}>
                        <span className={`${triggerAnimation ? "h-[3px] rotate-45 translate-y-[7.5px]": "h-[2px] " } transition-all w-6 bg-black block   `} />
                        <span className={`${triggerAnimation ? "h-[0px]": "h-[3px]" } w-6 bg-black block mix-blend-difference`} />
                        <span className={`${triggerAnimation ? "h-[3px] rotate-[-45deg] translate-y-[-7.5px]": "h-[4px] " } transition-all w-6 bg-black block`} />
                    </div>

                </div>
                { openModal && 
                    <Modal 
                        triggerAnimation={triggerAnimation}
                        setTrigerAnimation={setTrigerAnimation}
                        closeModal={closeModal}
                    />
                }
            </header>
            
    )
}