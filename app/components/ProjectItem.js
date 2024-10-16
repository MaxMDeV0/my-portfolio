import { useState, useContext } from "react";
import { SessionContext } from '@/app/context/Context';
import CrudButton from "@components/CrudButton";
import CrudValidateButton from "@components/CrudValidateButton";
import MediaSelector from "@components/MediaSelector";

export default function ProjectItem({ item, index, CreatingHook, setDataList, isNew }) {

    const  {isCreating, setIsCreating} = CreatingHook;
    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] = useState(!!item.title ? item.title: "");
    const [desc ,setDesc] = useState(!!item.desc ? item.desc: "");
    const [projectUrl ,setProjectUrl] = useState(!!item.projectUrl ? item.projectUrl: "");
    const [path, setPath] = useState(!!item.path ? item.path: "");
    const session = useContext(SessionContext);

    if(isCreating || isEditing) {

        const formHandler = async (e) => {
            e.preventDefault();
            if( path != "" && title != "" && desc != "") {
                try{
                    const response = await fetch(`/api/projects${!isNew ? "/" + item._id : ""}`, {
                        method:`${isNew ? "POST" : "PUT"}`,
                        body: JSON.stringify({
                            title:title,
                            desc:desc,
                            path: path,
                            projectUrl: projectUrl,
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
                setProjectUrl("");
                setIsCreating(false);
            } else{
                setPath(item.path);
                setTitle(item.title);
                setDesc(item.desc);
                setProjectUrl(item.projectUrl);

                setIsEditing(false);
            }

        }

        return (
            <li className={`w-full max-w-[500px] m-auto px-6 py-[30px] border rounded border-zinc-500 relative`}>
                <form className="space-y-8" onSubmit={formHandler}>
                    <div className="space-y-2 items-center">
                        <div className="max-w-[400px] m-auto">
                            <MediaSelector valueHook={[path, setPath]} />
                        </div>
                        <input className="bg-black text-white text-center w-full max-w-[400px] block m-auto" placeholder="Skill title" name="title" value={title} onChange={e=>setTitle(e.target.value)} />
                        <input className="bg-black text-white text-center w-full max-w-[400px] block m-auto" placeholder="Project link" name="projectUrl" value={projectUrl} onChange={e=>setProjectUrl(e.target.value)} />
                        <textarea className="bg-black text-white text-center w-full max-w-[400px] block m-auto h-10" placeholder="Description" name="title" value={desc} onChange={e=>setDesc(e.target.value)} />


                    </div>
                    <CrudValidateButton cancelHandler={cancelHandler} />


                </form>
            </li>
        )
    }

    return (
        <li className="max-w-[610px] lg:max-w-[1240px] m-auto relative">
            { !!session &&
                <CrudButton 
                    setDataList={setDataList}
                    item={item}
                    apiUri="projects"
                    className="left-0"
                    setIsEditing={setIsEditing}
                />
            }
            <div className={`lg:flex space-y-7 ${index%2 == 1 ? "lg:flex-row-reverse" : ""} lg:space-y-[unset]`}>
                <img src={item.path} alt="" className={`rounded w-full max-w-[610px] lg:w-6/12 lg:flex-1 ${index%2 == 1 ? "lg:pl-[2%]" : "lg:pr-[2%]"} `}/>
                <div className={`flex-1 space-y-7  ${index%2 == 1 ? "lg:pr-[8%]" : "lg:pl-[8%]"} flex flex-col justify-center`}>
                    <h3 className="text-xl text-white font-extrabold">{index + 1 }</h3>
                    <h3 className="text-xl text-white font-extrabold">{item.title}</h3>
                    <p className="text-zinc-500">{item.desc}</p>
                    {!!item.projectUrl &&
                        <a href={item.projectUrl} aria-label="Visit Project">
                            <img alt="read more icon" className="w-5 h-5" src="https://viltrjl2hrtwu1vz.public.blob.vercel-storage.com/uploads/1728997708982-ReadMore-9qWJWZ3daGLhXmzhKIbCveAImg74fX.svg"/>
                        </a>
                    }
                </div>
            </div>
        </li>
    )
}