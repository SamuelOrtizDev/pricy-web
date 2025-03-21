import { CTA } from "@/components/common/CTA";
import { SectionLayout } from "@/components/common/SectionLayout";
import cursor from './assets/cursor.png'
import img from './assets/heroImg.webp'
import bg from './assets/heroBg.webp'
import Image from "next/image";

export function Hero() {
    return (
        <SectionLayout style={{ backgroundImage: `url(${bg.src})`, overflow: 'hidden' }} padding={false}>
            <div className='flex justify-center py-20 md:py-36 relative z-20'>
                <Image src={img} alt="" className="hidden lg:block absolute bottom-0 -left-32 max-w-[600px]" />

                <div className="flex flex-col gap-6 pt-8 lg:ml-80">
                    <div className="relative w-fit">
                        <h1 className="font-semibold text-4xl md:text-7xl text-blue-200">Tu mejor amigo <br /> <span className="text-blue-100 font-bold text-6xl md:text-8xl">En cada compra</span></h1>
                        <Image src={cursor} alt="" className="absolute right-8 bottom-2 md:-right-8 md:-bottom-20 w-[100px] md:w-[144px]" />
                    </div>
                    <p className="text-lg md:text-2xl max-w-sm text-blue-200 font-light">Compara precios, calidad y tiempos de entrega en multiples tiendas con un solo click.</p>
                    <CTA />
                </div>
            </div>
        </SectionLayout>
    )
}