import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="bg-[#E84C3D] text-white relative overflow-hidden">
            <div className="absolute lg:hidden top-0 left-0 w-full h-full">
                <Image
                    src={'/hero-dog.webp'}
                    alt="cachorro hero"
                    className="object-cover opacity-60"
                    fill
                    sizes="100vw"
                    priority
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 py-10 px-5 container mx-auto relative">
                <div className="flex flex-col gap-5">
                    <h2 className="text-2xl md:text-3xl">
                        Seu pet merece cuidado, carinho e atenção especial.
                    </h2>
                    <p>
                        Oferecemos os melhores serviços para garantir o
                        bem-estar e a felicidade do seu amigo de quatro patas.
                    </p>
                    <button className="bg-green-500 w-fit px-3 py-1 rounded-md">
                        <a href="http://" target="_blank">
                            <WhatsappLogoIcon className="inline mr-2 w-6 h-6" />
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
                <div className="hidden lg:block">
                    <Image
                        src={'/hero-dog.webp'}
                        alt="cachorro hero"
                        className="object-contain ml-[200px]"
                        fill
                        sizes="(max-width: 768px) 0px, 50vw"
                        quality={100}
                        priority
                    />
                </div>
                <div className='hidden lg:block absolute bottom-0 left-0'>
                    <Image
                        src={'/cat-hero.png'}
                        alt="gato hero"
                        className="object-contain"
                        fill
                        quality={100}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
