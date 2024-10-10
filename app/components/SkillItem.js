"use client"

import { useState } from "react";

export default function SkillItem(props) {
    const { item, isEditing, setIsEditing } = props;
    const [path, setPath] = useState("");
    const [title, setTitle] = useState("");
    if(isEditing) {

        const formHandler = async (e) => {
            e.preventDefault();
            if( path != "" && title != "" ) {
                try{
                    const reponse = await fetch("/api/skills", {
                        method:"POST",
                        body: JSON.stringify({"title":title,"path":path}),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    })
                } catch (err) {
                    console.error(err)
                }
                setIsEditing(false)
            }
        }

        const cancelHandler = () => {
            setPath("");
            setTitle("");
            setIsEditing(false);
        }
        return (
            <li className={`max-w-[160px] w-full p-6 border-2 rounded border-black aspect-square space-y-8 m-auto`}>
                <form onSubmit={formHandler} >
                    <input className="text-center w-full" placeholder="img path" name="path" value={path} onChange={e=>setPath(e.target.value)}/>
                    <input className="text-center w-full mt-2" placeholder="skill title" name="title" value={title} onChange={e=>setTitle(e.target.value)} />
                    <div className="w-full flex justify-evenly mt-2">
                        <button className="h-10 w-10  rounded-full border-2 border-[red] flex justify-center items-center" onClick={cancelHandler}>
                            <svg height="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="red">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </button>
                        <button type="submit" className="h-10 w-10  rounded-full border-2 border-[green] flex justify-center items-center">
                            <svg height="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="green">
                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                            </svg>
                        </button>

                    </div>
                </form>
            </li>
        )
    }
    return (
        <li className={`max-w-[160px] w-full p-6 border-2 rounded border-black aspect-square space-y-8 m-auto`}>
        
            <div className="flex justify-center">
                <img src={item.path} />
            </div>
            <div className="text-center">{item.title}</div>
        
        </li>
    )
}