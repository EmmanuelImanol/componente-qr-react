

export default function QrComponente() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white mx-auto p-5 rounded-xl shadow-xl w-10/12 sm:w-7/12 md:w-1/3 lg:w-1/4">
                <img 
                    src="img/image-qr-code.png" 
                    alt="Imagen Código Qr" 
                    className="rounded-xl"
                />
                <div className="text-slate-700 p-5 text-center">
                    <h1 className="text-2xl font-black mb-4">Improve your front-end skills by building projects</h1>
                    <p className="text-gray-400 font-bold">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </div>
            </div>
        </div>
    )
}
