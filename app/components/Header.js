import { useState } from "react"
import Modal from "./Modal";

export default function Header() {
    const [openModal, setOpenModal] = useState(false);

    return (
            <header className="flex h-[70px] p-[10px] justify-between">
                <a href="/" className="flex-1 justify-center flex">
                    <img src="/images/fullLogo.svg" alt="logo"/>
                </a>
                <div className="relative w-10  md:none">
                    <div className="absolute flex flex-col justify-evenly py-[10px] items-center z-30 inset-0" tabIndex={0} aria-label={openModal ? "Close Menu" : "Open Menu" } onClick={()=>setOpenModal(!openModal)}>
                        <span className={`${openModal ? "h-[3px] rotate-45 translate-y-[7.5px]": "h-[2px] " } transition-all w-6 bg-black block`} />
                        <span className={`${openModal ? "h-[0px]": "h-[3px]" } w-6 bg-black block`} />
                        <span className={`${openModal ? "h-[3px] rotate-[-45deg] translate-y-[-7.5px]": "h-[4px] " } transition-all w-6 bg-black block`} />
                    </div>

                </div>
                {openModal && <Modal setOpenModal={setOpenModal} />}
            </header>
            
    )
}