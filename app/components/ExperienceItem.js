import { useState, useContext } from "react";
import { SessionContext } from '@/app/context/Context';
import CrudButton from "@components/CrudButton";
import CrudValidateButton from "@components/CrudValidateButton";
import MediaSelector from "@components/MediaSelector";

export default function ExperienceItem({ item, index, CreatingHook, setDataList, isNew }) {

    const  {isCreating, setIsCreating} = CreatingHook;
    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] = useState(!!item.title ? item.title: "");
    const [desc ,setDesc] = useState(!!item.desc ? item.desc: "");
    const [organization, setOrganization] = useState(!!item.organization ? item.organization: "");
    const [startedAt, setStartedAt] = useState(!!item.startedAt ? item.startedAt: "");
    const [endedAt, setEndedAt] = useState(!!item.endedAt ? item.endedAt: "");
    const [path, setPath] = useState(!!item.path ? item.path: "");
    const [isVisible, setIsVisible] = useState(item.isVisible);
    const session = useContext(SessionContext);

    if(isCreating || isEditing) {

        const formHandler = async (e) => {
            e.preventDefault();
            if( path != "" && title != "" && desc != "" && startedAt != "" && endedAt != "" && organization != "") {
                try{
                    const response = await fetch(`/api/experiences${!isNew ? "/" + item._id : ""}`, {
                        method:`${isNew ? "POST" : "PUT"}`,
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
                setDesc("");
                setEndedAt("");
                setStartedAt("");
                setOrganization("")
                setIsCreating(false);
            } else{
                setPath(item.path);
                setTitle(item.title);
                setDesc(item.desc);
                setEndedAt(item.endedAt);
                setStartedAt(item.startedAt);
                setOrganization(item.organization)
                setIsEditing(false);
            }

        }

        return (
            <li className={`w-full max-w-[1240px] m-auto px-6 py-[30px] border rounded border-zinc-500 relative`}>
                <form className="space-y-4 mb-8" onSubmit={formHandler}>
                    <div className="space-y-4 items-center">

                        <div className="flex space-x-[30px] items-end">
                            <MediaSelector valueHook={[path, setPath]} />
                            <input className="bg-black text-white  w-full max-w-[400px] pl-5 h-11" placeholder="Job title" name="title" value={title} onChange={e=>setTitle(e.target.value)} />
                            <input className="bg-black text-white  w-full max-w-[400px] pl-5 h-11" placeholder="Organization Name" name="organization" value={organization}  onChange={e=>setOrganization(e.target.value)} />

                        </div>
                        <div className="flex space-x-[30px] text-white items-center">
                            Start :
                            <input type="date" className="bg-black text-white text-center w-full max-w-[140px] h-11  pl-5" placeholder="Date when your professional experience began" name="startedAt" value={startedAt} onChange={e=>setStartedAt(e.target.value)}/>- End :
                            <input type="date" className="bg-black text-white text-center w-full max-w-[140px] h-11 pl-5" placeholder="Date when your professional experience ended" name="endedAt" value={endedAt} onChange={e=>setEndedAt(e.target.value)} />

                        </div>

                    </div>
                    <textarea className="bg-black text-white  w-full block m-auto h-20 p-5" placeholder="Description" name="title" value={desc} onChange={e=>setDesc(e.target.value)} />

                    <CrudValidateButton cancelHandler={cancelHandler} />


                </form>
            </li>
        )
    }
    const formatDate = (date) => {
        let formattedDate = new Date(date).toLocaleDateString('en-EN', {year:"numeric", month:"short"})
        formattedDate = formattedDate.replace('.', '');
        formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1).toLowerCase();
        return formattedDate;
    }


    return (
        <li className={`w-full max-w-[1240px] m-auto px-6 py-[30px] border rounded border-zinc-500 ${index%2==0 ? "" : "bg-zinc-800" } relative`}>
            { !!session &&
    
                <CrudButton 
                    setDataList={setDataList}
                    item={item}
                    apiUri="experiences"
                    className="left-0"
                    setIsEditing={setIsEditing}
                />
            }
            <header className="space-y-[30px] mb-8">
                <div className="flex space-x-[30px] items-end">
                    <img alt="" className="h-12"  src={item.path} />
                    <h3 className="text-white font-semibold text-xl leading-[24px] tracking-tight">{item.title} - {item.organization}</h3>
                </div>
                <span className="text-zinc-300 font-semibold block">{formatDate(item.startedAt)} - {formatDate(item.endedAt)}</span>

            </header>
            <div>
                <p className="text-zinc-300 tracking-wide">{item.desc}</p>
            </div>
        </li>
    )
}