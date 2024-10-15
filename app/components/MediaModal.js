import { useState, useEffect } from "react"

export default function MediaModal({setOpenModal, setPath}){
    const [file, setFile] = useState(null);
    const [mediasList, setMediasList] = useState([])

    useEffect(()=>{
        if(!!file){
            submitHandler();
        }
    },[file, submitHandler])

    useEffect(()=>{
        fetch(`/api/medias`)
        .then(response => response.json())
        .then(json=>{setMediasList(json)})
        .catch((err)=>{
            console.log(err);
        })
    },[])

    const clickHandler = () => {
        const fileInput = document.getElementById('file_input')
        fileInput.click()
    }

    const submitHandler = async () => {
        if (file) {
            const formData = new FormData();
            formData.append('file', file); // Ajouter le fichier à l'objet FormData

            try {
                // Envoyer le fichier à votre route API
                const response = await fetch('/api/medias', { // Remplacez '/api/upload' par votre route API
                    method: 'POST',
                    body: formData, // Envoie le formData
                });
                if (response.ok) {
                    const data = await response.json();
                    setMediasList(data)
                } else {
                    console.error('File upload failed');
                }
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        } else {
            console.error('No file selected');
        }
    };

    const selectHandler = (path) => {
        console.log(path)
        setPath(path)
        setOpenModal(false)
    }
    return (
        <div>
            <div className="fixed bg-black  w-screen h-screen top-0 left-0 opacity-30" />
            <section className="flex fixed calc bg-[#efefef] h-[70vh] w-[90%] top-0 bottom-0 left-0 right-0 border-2 border-zinc-500 rounded m-auto box-border max-w-[1440px] max-h-[690px] px-5 py-20">
                <ul className="mx-auto grid grid-cols-2 grid-rows-[150px] overflow-y-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
                    {
                        mediasList.map((item, index) => { return <li className="max-h-32" key={index}><button onClick={()=>selectHandler(item.path)}><img className="h-32" src={item.path} /></button></li>})
                    }
                </ul>
                <button className="absolute h-8 w-8 right-5 top-5 rounded-full border-2 border-[red] flex justify-center items-center bg-white" onClick={()=>setOpenModal(false)}>
                    <svg height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="red">
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                    </svg>
                </button>
                <button className="absolute bottom-5 right-5 flex bg-[#007bff] text-white rounded p-2 w-32 justify-between items-center" onClick={clickHandler}>
                    <svg height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill={`white`}>
                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                    </svg >
                    Add media
                </button>
                <input type="file" id="file_input" className="hidden" onChange={(e)=>setFile(e.target.files[0])} />
            </section>
        </div>
    )
}