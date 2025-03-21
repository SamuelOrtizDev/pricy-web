import { SectionLayout } from "@/components/common/SectionLayout";
import man from './assets/man.webp'
import Image from "next/image";

const steps = [
    {
        title: 'Instala la extensión en tu navegador.',
        desc: 'Descarga e instala nuestra extensión en Chrome, Edge o Firefox con un solo clic. No ocupa espacio y se activa automáticamente cuando compras en línea.'
    },
    {
        title: 'Busca tu producto en tu tienda favorita',
        desc: 'Navega como lo harías normalmente en Amazon, eBay, Walmart u otras tiendas en línea. Nuestra extensión detectará automáticamente el producto que estás viendo.'
    },
    {
        title: 'Compara precios y opciones en un solo click',
        desc: 'Cuando encuentres el producto que quieres, abre la extensión y verás al instante las mejores ofertas disponibles en diferentes tiendas.'
    },
    {
        title: 'Instala la extensión en tu navegador YA.',
        desc: 'Selecciona la mejor oferta directamente desde la extensión y serás redirigido a la tienda para completar tu compra. ¡Sin trucos ni costos ocultos, solo ahorro garantizado!'
    },
]

function Card({ title, desc }, index) {
    return (
        <li className="p-4 md:p-8 rounded-3xl bg-white/20 backdrop-blur-lg shadow-xl flex flex-col justify-between min-h-[182px] max-w-sm">
            <span className="flex items-center justify-between">
                <strong className="font-bold text-blue-200">{title}</strong>
                <p>{index}</p>
            </span>
            <p>{desc}</p>
        </li>
    )
}

export function Steps() {
    return (
        <SectionLayout>
            <article className="mx-auto max-w-6xl flex flex-col gap-8 relative">
                <div className="flex flex-col md:flex-row gap-8 justify-between">
                    {
                        steps.slice(0, 2).map(({ title, desc }) => (
                            <Card title={title} desc={desc} key={title} />
                        ))
                    }
                </div>

                <Image src={man} alt="" className="hidden md:block col-span-full max-w-[500px] mx-auto md:-my-56" />

                <div className="flex flex-col md:flex-row gap-8 justify-between">
                    {
                        steps.slice(2).map(({ title, desc }) => (
                            <Card title={title} desc={desc} key={title} />
                        ))
                    }
                </div>
                
                <Image src={man} alt="" className="md:hidden col-span-full max-w-[500px] mx-auto w-full" />



                <div className="absolute bg-[#09D1C7]/20 -top-12 left-[20%] w-[700px] aspect-square rounded-full -z-20 blur-[80px]"></div>
            </article>
        </SectionLayout>
    )
}