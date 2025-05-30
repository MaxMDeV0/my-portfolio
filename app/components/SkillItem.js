"use client"

import { useState, useContext } from "react";
import { SessionContext } from '@/app/context/Context';
import CrudButton from "@components/CrudButton";
import CrudValidateButton from "@components/CrudValidateButton";
import MediaSelector from "@components/MediaSelector";

export default function SkillItem({ item, CreatingHook, setDataList, isNew }) {
    const  {isCreating, setIsCreating} = CreatingHook;
    const [isEditing, setIsEditing] = useState(false)
    const [path, setPath] = useState(!!item.path ? item.path: "");
    const [title, setTitle] = useState(!!item.title ? item.title: "");
    const session = useContext(SessionContext);
    if(isCreating || isEditing) {

        const formHandler = async (e) => {
            e.preventDefault();
            if( path != "" && title != "" ) {
                try{
                    const response = await fetch(`/api/skills${!isNew ? "/" + item._id : ""}`, {
                        method:`${isNew ? "POST" : "PUT"}`,
                        body: JSON.stringify({"title":title,"path":path}),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    })
                    if (response.ok) {
                        const data = await response.json();
                        setDataList(data)
                    }
                    if(isCreating) {
                        setIsCreating(false)
                    }
                    setIsEditing(false)
                } catch (err) {
                    console.error(err)
                }
            }
        }

        const cancelHandler = () => {
            if(isCreating) {
                setPath("");
                setTitle("");
                setIsCreating(false)
            } else{
                setPath(item.path);
                setTitle(item.title);
                setIsEditing(false);
            }
        }
        return (
            <li className={`max-w-[160px] w-full p-6 border-2 rounded border-black aspect-square space-y-8 m-auto relative`}>
                <form onSubmit={formHandler} >
                    <MediaSelector valueHook={[path, setPath]} />
                    <input className="text-center w-full mt-2 h-11" placeholder="skill title" name="title" value={title} onChange={e=>setTitle(e.target.value)} />
                    <div className="w-full flex justify-evenly mt-2">
                        <CrudValidateButton cancelHandler={cancelHandler}/>
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
                    setIsEditing={setIsEditing}
                />
            }
            <div className="m-6 space-y-8 h-full max-h-[108px]">
                <div className="flex justify-center ">
                    <img  className="max-h-[56px]" src={item.path} alt="" />
                </div>
                <div className="text-center">{item.title}</div>

            </div>
        
        </li>
    )
}