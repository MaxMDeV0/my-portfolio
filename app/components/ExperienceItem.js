import { useState, useContext } from "react";
import { SessionContext } from '@/app/context/Context';
import CrudButton from "@components/CrudButton";
import CrudValidateButton from "@components/CrudValidateButton";

export default function ExperienceItem({ item, index, EditingHook, setDataList }) {

    const  {isEditing, setIsEditing }= EditingHook;
    const [title, setTitle] = useState('');
    const [desc ,setDesc] = useState('');
    const [organization, setOrganization] = useState('');
    const [startedAt, setStartedAt] = useState('');
    const [endedAt, setEndedAt] = useState('');
    const [path, setPath] = useState('');
    const [isVisible, setIsVisible] = useState(item.isVisible);
    const session = useContext(SessionContext);

    if(isEditing) {

        const formHandler = async (e) => {
            e.preventDefault();
            if( path != "" && title != "" && desc != "" && startedAt != "" && endedAt != "" && organization != "") {
                try{
                    const response = await fetch("/api/experiences", {
                        method:"POST",
                        body: JSON.stringify({
                            title:title,
                            desc:desc,
                            organization:organization,
                            startedAt: startedAt,
                            endedAt: endedAt,
                            path: path,
                        }),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    })
                    if (response.ok) {
                        const data = await response.json();
                        setDataList(data)
                    }

                } catch (err) {
                    console.error(err)
                }
                setIsEditing(false)
            }
        }

        const cancelHandler = () => {
            setPath("");
            setTitle("");
            setDesc("");
            setEndedAt("");
            setStartedAt("");
            setOrganization("")
            setIsEditing(false);
        }
        return (
            <li className={`w-full max-w-[1240px] m-auto px-6 py-[30px] border rounded border-zinc-500 relative`}>
                <form className="space-y-8" onSubmit={formHandler}>
                    <div className="space-y-2 items-center">
                        
                        <input className="bg-black text-white text-center w-full max-w-[400px] block m-auto" placeholder="Img path" name="path" value={path} onChange={e=>setPath(e.target.value)}/>
                        <input className="bg-black text-white text-center w-full max-w-[400px] block m-auto" placeholder="Skill title" name="title" value={title} onChange={e=>setTitle(e.target.value)} />
                        <input className="bg-black text-white text-center w-full max-w-[400px] block m-auto" placeholder="Organization title" name="organization" value={organization} onChange={e=>setOrganization(e.target.value)} />
                        <input type="date" className="bg-black text-white text-center w-full max-w-[400px] block m-auto" placeholder="Date when your professional experience began" name="startedAt" value={startedAt} onChange={e=>setStartedAt(e.target.value)}/>
                        <input type="date" className="bg-black text-white text-center w-full max-w-[400px] block m-auto" placeholder="Date when your professional experience ended" name="endedAt" value={endedAt} onChange={e=>setEndedAt(e.target.value)} />
                        <textarea className="bg-black text-white text-center w-full max-w-[400px] block m-auto h-10" placeholder="Description" name="title" value={desc} onChange={e=>setDesc(e.target.value)} />


                    </div>
                    <CrudValidateButton cancelHandler={cancelHandler} />


                </form>
            </li>
        )
    }

    return (
        <li className={`w-full max-w-[1240px] m-auto px-6 py-[30px] border rounded border-zinc-500 space-y-8 ${index%2==0 ? "" : "bg-zinc-800" } relative`}>
            { !!session &&
    
                <CrudButton 
                    setDataList={setDataList}
                    isVisible={isVisible}
                    setIsVisible={setIsVisible}
                    item={item}
                    apiUri="experiences"
                    className="left-0"
                />
            }
            <header className="space-y-[30px]">
                <div className="flex space-x-[30px] items-center">
                    <img className="h-8" src={item.path} />
                    <h3 className="text-white font-semibold text-xl leading-[24px] tracking-tight">{item.title} - {item.organization}</h3>
                </div>
                <span className="text-zinc-300 font-semibold block">{item.startedAt} - {item.endedAt}</span>

            </header>
            <div>
                <p className="text-zinc-300 tracking-wide">{item.desc}</p>
            </div>
        </li>
    )
}