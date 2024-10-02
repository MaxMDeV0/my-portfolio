import React, { useState, useEffect } from 'react';

function Modal({ setOpenModal }) {
	const [triggerAnimation, setTrigerAnimation] = useState(false);

	useEffect(()=>{
		setTrigerAnimation(true);
	},[])

	return (
		<>
			<div className="absolute z-10 bg-black opacity-60 h-screen w-screen inset-0" onClick={() => setOpenModal(false)} />
			<div className={`transition-all absolute z-20 ${triggerAnimation ? "w-10/12" : "w-0" } ml-auto inset-0 bg-white`} />
		</>
	);
}

export default Modal;