"use client"

import { useState, useEffect, useContext} from "react";
import { SessionContext } from '@/app/context/Context';

export default function List(props) {
    const {isBlack, title, Item, ulClassName, apiUri} = props;
    
    const [dataList, setDataList] = useState([]);
    const session = useContext(SessionContext);
    const [isEditing, setIsEditing] = useState(false);
    useEffect(()=>{
        fetch(`/api/${apiUri}`)
        .then(response => response.json())
        .then(json=>{setDataList(json[apiUri])})
        .catch((err)=>{
            console.log(err);
        })
    },[])
    return (
        
        <section className={`flex flex-col py-10 px-4 space-y-7 items-center bg-${isBlack ? "black" : "white" } lg:py-[60px] min-[450px]:px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 2xl:px-28`}>
            <h2 className={`h-[4.5rem] text-center leading-[4.5rem] text-[1.75rem] text-${!isBlack ? "black" : "white" } lg:text-4xl lg:leading-[5.25rem] lg:h-[5.25rem] xl:text-5xl xl:leading-[6rem] xl:h-[6rem]`}>My <strong>{title}</strong></h2>
            <ul className={ulClassName} >
                {!!dataList && 
                    dataList.map((item, index)=>{
                        if(item.isVisible || !!session) {
                            return <Item item={item} key={index} index={index} setDataList={setDataList} EditingHook={{}} /> 

                        }
                        return null
                })}
                {isEditing && !!dataList  && <Item item={isEditing} key={dataList.length+1} index={dataList.length+1} EditingHook={{isEditing,setIsEditing}}  setDataList={setDataList} />}
            </ul>

            {!!session && !isEditing &&
                <button onClick={()=>setIsEditing(true)} className={`h-10 w-10 flex items-center justify-center rounded-full bg-${!isBlack ? "black" : "white" }`}>
                    <svg height="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill={`${isBlack ? "black" : "white" }`}>
                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                    </svg >
                </button>}
        </section>
    )
}