import React from 'react';

function Modal(props) {
	const { openModal, setOpenModal } = props;

	return (
		<>
			<div className={`transition-opacity fixed z-10 bg-black  h-screen inset-0 ${openModal ? "opacity-60  w-screen" : "opacity-0 w-0"}`} onClick={()=>setOpenModal(false)} />
			<div className={`transition-all fixed z-20 w-52 ${openModal ? "right-0" : "right-[-208px]"} h-screen ml-auto inset-0 bg-white`}>
				<ul className='mt-[70px] p-[10px] '>
					<li className='justify-center flex'><a className='w-48 text-center border-b border-zinc-300 py-3' href='/'>Home</a></li>
					<li className='justify-center flex'><a className='w-48 text-center border-b border-zinc-300 py-3' href='/project'>Projects</a></li>
					<li className='justify-center flex'><a className='w-48 text-center border-b border-zinc-300 py-3' href='/contact'>Contact</a></li>
				</ul>
			</div>
		</>
	);
}

export default Modal;