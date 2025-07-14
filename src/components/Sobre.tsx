import { Check, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Sobre() {
    return (
        <section className="bg-[#fffbda] py-16 px-5">
            <div className="container mx-auto lg:grid lg:grid-cols-2 lg:gap-10">
                <div className="relative">
                    <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
                        <Image
                            src={'/about-1.png'}
                            alt="sobre"
                            className="object-cover hover:scale-110 duration-300"
                            quality={100}
                            priority
                            fill
                        />
                    </div>
                    <div className="absolute right-4 bottom-[-32px] w-40 h-40 overflow-hidden border-4 border-white hidden lg:block">
                        <Image
                            src={'/about-2.png'}
                            alt="sobre"
                            className="object-cover"
                            quality={100}
                            priority
                            fill
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-5 mt-10 lg:mt-0">
                    <h2 className="font-bold text-4xl ">SOBRE</h2>
                    <p>
                        Até que alguém ame um animal, uma parte da sua alma
                        permanece adormecida. Acreditamos nisso e acreditamos no
                        fácil acesso a coisas que fazem bem à mente, ao corpo e
                        ao espírito. Com uma oferta inteligente, um suporte
                        excelente e um checkout seguro, você está em boas mãos.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-2">
                            <Check className="text-red-500" />
                            Aberto desde 2006.
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-red-500" />
                            Equipe com mais de 10 veterinários.
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-red-500" />
                            Qualidade é nossa prioridade.
                        </li>
                    </ul>
                    <div className="flex flex-row items-center gap-5">
                        <a
                            href="http://"
                            target="_blank"
                            className="bg-red-500 text-white px-3 py-1 rounded-md"
                        >
                            Contato via WhatsApp
                        </a>
                        <span className="flex">
                            Endereço da loja <MapPin />
                        </span>
                    </div>
                </div>
            </div>
            <div></div>
        </section>
    );
}
