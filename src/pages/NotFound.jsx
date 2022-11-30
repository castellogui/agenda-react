export default function NotFound(){
    return(
        <div className="w-full h-screen bg-[#6327C8] flex justify-center">
            <div className="w-max h-max flex flex-col items-center text-white absolute z-20 m-auto top-[40%]">
                <h1>Desculpe, não foi possível encontrar esta página.</h1>
                <button className="w-[60%] bg-white border-0 font-bold py-2 px-4 text-gray-600 rounded cursor-pointer my-4">
                    Voltar para
                    <span className="text-[#6327C8]"> Home</span>
                </button>
            </div>
            <img
                className="absolute w-full bottom-0 z-0"
                src="../src/assets/NotFound/arvores.png"
                alt="arvores-de-fundo"
            />
            <img
            className="absolute w-[15%] left-0 right-0 m-auto bottom-0 z-10"
            src="../src/assets/NotFound/telescopio.png"
            alt="telescopio"
            />
            <img className="absolute left-0 w-[230px] h-[200px]" src="../src/assets/NotFound/lua.png" alt="lua" />
            <img
            className="absolute right-0 w-[230px] h-[200px]"
            src="../src/assets/NotFound/estrelas.png"
            alt="estrelas"/>
    </div>
    )   
}