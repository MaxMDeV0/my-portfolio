"use client"

import { useState, useContext } from "react";
import { SessionContext } from '@/app/context/Context';
import CrudButton from "@components/CrudButton";
import CrudValidateButton from "@components/CrudValidateButton";
import MediaSelector from "./MediaSelector";

export default function SkillItem({ item, EditingHook, setDataList }) {
    const  {isEditing, setIsEditing} = EditingHook;
    const [path, setPath] = useState("");
    const [title, setTitle] = useState("");
    const session = useContext(SessionContext);
    if(isEditing) {

        const formHandler = async (e) => {
            e.preventDefault();
            if( path != "" && title != "" ) {
                try{
                    const response = await fetch("/api/skills", {
                        method:"POST",
                        body: JSON.stringify({"title":title,"path":path}),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    })
                    if (response.ok) {
                        const data = await response.json();
                        setDataList(data)
                        console.log(data)
                    }
                    
                    setIsEditing(false)
                } catch (err) {
                    console.error(err)
                }finally{
                    
                }
            }
        }

        const cancelHandler = () => {
            setPath("");
            setTitle("");
            setIsEditing(false);
        }
        return (
            <li className={`max-w-[160px] w-full p-6 border-2 rounded border-black aspect-square space-y-8 m-auto relative`}>
                <form onSubmit={formHandler} >
                    <MediaSelector valueHook={[path, setPath]} />
                    <input className="text-center w-full mt-2" placeholder="skill title" name="title" value={title} onChange={e=>setTitle(e.target.value)} />
                    <div className="w-full flex justify-evenly mt-2">
                        <CrudValidateButton cancelHandler={cancelHandler} />
                    </div>
                </form>
            </li>
        )
    }

    return (
        <li className={`max-w-[160px] w-full  border-2 rounded border-black aspect-square  m-auto relative`}>
            { !!session &&
    
                <CrudButton 
                    setDataList={setDataList}
                    item={item}
                    apiUri="skills"
                />
            }
            <div className="m-6 space-y-8 h-full max-h-[108px]">
                <div className="flex justify-center ">
                    <img src={item.path} />
                </div>
                <div className="text-center">{item.title}</div>

            </div>
        
        </li>
    )
}