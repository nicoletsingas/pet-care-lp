import Image from "next/image";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import { Servicos } from "@/components/Servicos";
import { Testemunhos } from "@/components/Testemunhos";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Hero />
            <Sobre />
            <Servicos />
            <Testemunhos />
            <Footer />
        </main>
    );
}
