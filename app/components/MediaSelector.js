import { useState, useEffect } from "react";
import MediaModal from "./MediaModal";

export default function MediaSelector({valueHook}){
    const [path, setPath] = valueHook;
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <button 
                className="rounded bg-[#007bff] text-sm w-full text-white p-1 h-11 min-w-[108px]" 
                onClick={(e)=>{
                    e.preventDefault();
                    setOpenModal(true)
                }}>
                {path.length==0 ? <>Select Image</> : <>Change Img</> }
            </button>

            {openModal &&
                <div className="relative z-30 m-auto">
                    <MediaModal setOpenModal={setOpenModal} setPath={setPath}/>

                </div>
            }
        </div>
    )
}