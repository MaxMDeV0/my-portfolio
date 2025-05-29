export default function ResumeButton() {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://viltrjl2hrtwu1vz.public.blob.vercel-storage.com/uploads/1748503190127-CV%20Maxence%20MERTER%20DEV-Ow1EgV6q0EJSGZPNLvKkuDv4CCPJgu.pdf'; // chemin relatif depuis /public
        link.download = 'CV-MaxenceMERTER.pdf'; // nom du fichier téléchargé
        link.click();
    };

    return (
        <button onClick={handleDownload} className="hidden lg:flex h-12 space-x-2 text-white bg-black rounded px-4 xl:px-5 py-4 xl:h-14">
            <img alt="download icon" className="twenty" src="https://viltrjl2hrtwu1vz.public.blob.vercel-storage.com/uploads/1728996904225-download-icon-2gJsFuH2SSzGWffvO58LpBCa8d6uPb.svg" />
            <p className="font-semibold leading-5 xl:text-xl xl:leading-6 ">Resume</p>
        </button>
    )
}