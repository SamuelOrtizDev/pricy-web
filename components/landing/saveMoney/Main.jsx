import { SectionLayout } from "@/components/common/SectionLayout";
import Image from "next/image";
import image from './assets/image.webp'
import whyUs from './assets/whyUs.png'
import { CTA } from "@/components/common/CTA";

const CompareIcon = () => (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.6798 10.3004C18.6798 13.0652 16.4329 15.3121 13.6681 15.3121C13.0463 15.3121 12.448 15.1987 11.8982 14.9897C11.6321 14.8885 11.5824 14.5479 11.7677 14.3316C12.7216 13.2187 13.2505 11.7922 13.2505 10.3004C13.2505 8.80373 12.7169 7.37216 11.7702 6.26988C11.5843 6.05333 11.6335 5.71153 11.9004 5.61023C12.4496 5.40177 13.0471 5.2887 13.6681 5.2887C16.4329 5.2887 18.6798 7.5356 18.6798 10.3004Z" fill="#040241" />
        <path d="M11.9975 10.3004C11.9975 11.7788 11.3543 13.1153 10.3269 14.0257C9.44154 14.8276 8.27214 15.3121 6.98581 15.3121C4.22103 15.3121 1.97412 13.0652 1.97412 10.3004C1.97412 7.5356 4.22103 5.2887 6.98581 5.2887C8.27214 5.2887 9.44154 5.77316 10.3269 6.57503C11.3543 7.48549 11.9975 8.82194 11.9975 10.3004Z" fill="#040241" />
    </svg>
)

const FilterIcon = () => (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.9893 3.61521V5.05753C13.9893 5.58201 13.6615 6.23761 13.3337 6.56541L10.5147 9.05668C10.1213 9.38448 9.85906 10.0401 9.85906 10.5646V13.3836C9.85906 13.777 9.59682 14.3015 9.26902 14.4982L8.35118 15.0882C7.4989 15.6127 6.31882 15.0226 6.31882 13.9737V10.499C6.31882 10.0401 6.05658 9.45004 5.79434 9.12224L5.48621 8.801C5.28298 8.58465 5.24364 8.25686 5.40754 8.00117L8.76421 2.61215C8.88221 2.42202 9.09201 2.30402 9.32147 2.30402H12.6781C13.3993 2.30402 13.9893 2.89406 13.9893 3.61521Z" fill="#040241" />
        <path d="M7.2693 3.30708L4.94193 7.03744C4.71902 7.39802 4.20766 7.45047 3.91264 7.14234L3.30293 6.49985C2.97513 6.17205 2.71289 5.58201 2.71289 5.18865V3.68077C2.71289 2.89406 3.30293 2.30402 4.02409 2.30402H6.71204C7.22341 2.30402 7.5381 2.86783 7.2693 3.30708Z" fill="#040241" />
    </svg>
)

const features = [
    {
        title: 'Comparación instantánea',
        desc: 'Encuentra el mejor precio en segundos.',
        icon: <CompareIcon />
    },
    {
        title: 'Filtros avanzados',
        desc: 'Ordena por precio, calidad, reseñas y tiempo de entrega.',
        icon: <FilterIcon />
    },
    {
        title: 'Compatible con múltiples tiendas',
        desc: 'No más abrir 10 pestañas, nosotros lo hacemos por ti.',
        icon: <FilterIcon />
    },
]

export function SaveMoney() {
    return (
        <SectionLayout>
            <div className="flex flex-col-reverse items-center md:flex-row justify-center gap-12 md:gap-20">
                <picture className="max-w-xl">
                    <Image src={image} alt="" />
                </picture>

                <div className="flex flex-col gap-8 md:gap-12">
                    <span className="relative">
                        <h2 className="font-semibold text-3xl md:text-4xl text-blue-200">Ahorra tiempo y dinero <br /><span className="text-blue-100 font-bold text-4xl md:text-6xl">en cada compra.</span></h2>

                        <Image src={whyUs} alt="" className="hidden md:block absolute -right-20 w-40 top-0"/>
                    </span>

                    <ul className="flex flex-col gap-6">
                        {
                            features.map(({ title, desc, icon }) => (
                                <div key={title} className="flex items-center gap-2">
                                    <span className="aspect-square p-2 rounded-full w-fit bg-blue-100/30">
                                        {icon}
                                    </span>
                                    <span>
                                        <strong className="font-semibold text-lg text-blue-200">{title}</strong>
                                        <p className="text-[#494949]">{desc}</p>
                                    </span>
                                </div>
                            ))
                        }
                    </ul>

                    <CTA />
                </div>
            </div>
        </SectionLayout>
    )
}