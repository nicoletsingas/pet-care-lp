export default function Hero(){
    return (
      <section className="bg-[#E84C3D] text-white relative overflow-hidden flex flex-row p-5">
        <div className="flex flex-col gap-5">
            <h2 className="text-2xl md:text-3xl">Seu pet merece cuidado, carinho e atenção especial.</h2>
            <p>
            Oferecemos os melhores serviços para garantir o bem-estar e a
            felicidade do seu amigo de quatro patas.
            </p>
            <button className="bg-green-500 w-fit px-3 py-1 rounded-xl">
                <a href="http://" target="_blank">
                    Contato via WhatsApp
                </a>
            </button>
            <div className="flex flex-row">
                <span className="font-bold bg-black px-2 py-1 rounded-[5px] items-center justify-center flex">
                5%
                </span>
                <span className="flex items-center justify-center">
                de desconto na primeira compra
                </span>
            </div>
        </div>
        <div>
        </div>
      </section>
    );
}