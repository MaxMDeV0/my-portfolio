import { useState, useContext } from "react";
import { SessionContext } from '@/app/context/Context';
import CrudButton from "@components/CrudButton";
import CrudValidateButton from "@components/CrudValidateButton";
import Image from "next/image";

export default function ProjectItem({ item, index, CreatingHook, setDataList }) {

    const  {isCreating, setIsCreating} = CreatingHook;
    const [title, setTitle] = useState('');
    const [desc ,setDesc] = useState('');
    const [projectUrl, setProjectUrl] = useState('');
    const [path, setPath] = useState('');
    const [isVisible, setIsVisible] = useState(item.isVisible);
    const session = useContext(SessionContext);

    if(isCreating) {

        const formHandler = async (e) => {
            e.preventDefault();
            if( path != "" && title != "" && desc != "" ) {
                try{
                    const response = await fetch("/api/projects", {
                        method:"POST",
                        body: JSON.stringify({
                            title:title,
                            desc:desc,
                            projectUrl:projectUrl,
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
                setIsCreating(false)
            }
        }

        const cancelHandler = () => {
            setPath("");
            setTitle("");
            setDesc("");
            setProjectUrl("");
            setIsCreating(false);
        }
        return (
            <li className={`w-full max-w-[448px] m-auto px-6 py-[30px] border rounded border-zinc-500 relative`}>
                <form className="space-y-8" onSubmit={formHandler}>
                    <div className="space-y-2 items-center">
                        
                        <input className="bg-black text-white text-center w-full max-w-[400px] block m-auto" placeholder="Img path" name="path" value={path} onChange={e=>setPath(e.target.value)}/>
                        <input className="bg-black text-white text-center w-full max-w-[400px] block m-auto" placeholder="Project title" name="title" value={title} onChange={e=>setTitle(e.target.value)} />
                        <input className="bg-black text-white text-center w-full max-w-[400px] block m-auto" placeholder="Project Url" name="title" value={projectUrl} onChange={e=>setProjectUrl(e.target.value)} />

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
                    isVisible={isVisible}
                    setIsVisible={setIsVisible}
                    item={item}
                    apiUri="projects"
                    className="left-0"
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
                            <Image alt="read more icon" width={20} height={20} src="https://viltrjl2hrtwu1vz.public.blob.vercel-storage.com/uploads/1728997708982-ReadMore-9qWJWZ3daGLhXmzhKIbCveAImg74fX.svg"/>
                        </a>
                    }
                </div>
            </div>
        </li>
    )
}