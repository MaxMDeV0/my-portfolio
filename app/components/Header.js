export default function Header(){
    <header>
        <a href="/" aria-label="logo">
            <img src={logo}/>
        </a>
        <div className="mb menuburger" aria-label="menu" tabIndex="0" onClick={()=>setModalOpen(modalOpen+1)}>
            <span id="sp-1"/>
            <span id="sp-2"/>
            <span id="sp-3"/>
        </div>

    </header>
}