import { SectionLayout } from "@/components/common/SectionLayout";
import bottom from './assets/bottom.webp'
import logoImg from './assets/logoImg.png'
import Image from "next/image";
import { CTA } from "@/components/common/CTA";

function Logo() {
    return (
        <svg width="333" height="97" viewBox="0 0 202 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.6766 59.7903C45.9183 59.7903 59.0847 46.6264 59.0847 30.3879C59.0847 14.1495 45.9183 0.985596 29.6766 0.985596C13.435 0.985596 0.268555 14.1495 0.268555 30.3879C0.268555 46.6264 13.435 59.7903 29.6766 59.7903Z" fill="url(#paint0_linear_57_29)" />
            <path d="M41.2398 30.4402C44.5492 30.4402 47.232 27.7579 47.232 24.4493C47.232 21.1406 44.5492 18.4584 41.2398 18.4584C37.9304 18.4584 35.2476 21.1406 35.2476 24.4493C35.2476 27.7579 37.9304 30.4402 41.2398 30.4402Z" fill="#040241" />
            <path d="M70.345 30.4402C73.6545 30.4402 76.3373 27.7579 76.3373 24.4493C76.3373 21.1406 73.6545 18.4584 70.345 18.4584C67.0356 18.4584 64.3528 21.1406 64.3528 24.4493C64.3528 27.7579 67.0356 30.4402 70.345 30.4402Z" fill="#040241" />
            <path d="M56.5037 59.0654C45.9021 59.0654 37.2759 50.4411 37.2759 39.8419V35.273H45.2041V39.8419C45.2041 46.0697 50.2744 51.139 56.5037 51.139C62.733 51.139 67.8034 46.0697 67.8034 39.8419V35.273H75.7316V39.8419C75.7316 50.4411 67.1054 59.0654 56.5037 59.0654Z" fill="#040241" />
            <path d="M187.723 42.8818H187.912L188.856 38.5406L192.726 26.7909H201.269L190.036 54.4899C187.77 60.294 183.381 60.1524 178.236 59.4446L178.284 53.499C181.351 54.1596 183.428 54.0652 183.9 50.8565L173.8 26.7909H182.295L186.638 38.5406L187.723 42.8818Z" fill="#040241" />
            <path d="M172.65 30.7073L168.213 35.1901C166.467 33.5858 165.192 33.2555 163.635 33.2555C161.086 33.2555 158.726 34.7655 158.726 38.8236C158.726 42.0323 161.039 44.2029 163.682 44.2029C165.098 44.2029 166.75 43.6839 168.543 41.7964L173.121 46.1376C170.054 49.9598 167.127 51.0923 163.446 51.0923C155.281 51.0923 150.844 45.1939 150.844 38.7764C150.891 32.3589 155.422 26.602 163.446 26.5548C166.75 26.5548 169.204 27.2627 172.65 30.7073Z" fill="#040241" />
            <path d="M140.026 26.8853H147.955V50.715H140.026V26.8853Z" fill="#040241" />
            <path d="M120.405 26.7909H126.918L127.438 29.4334C128.57 27.0268 131.355 26.2718 133.856 26.6965C135.603 26.9796 137.16 27.829 138.293 29.1031L135.036 35.0015C133.007 32.6893 128.382 32.9724 128.24 36.653V50.7149H120.405V26.7909Z" fill="#040241" />
            <path d="M101.352 41.3716V50.7147H93.0452V17.6835H104.042C112.632 17.7307 116.739 23.7235 116.644 29.6691C116.55 35.5675 112.302 41.3716 104.09 41.3716H101.352ZM104.042 34.671C106.969 34.671 108.479 32.2172 108.526 29.7163C108.573 27.2154 107.11 24.7144 104.042 24.7144H101.21V34.671H104.042Z" fill="#040241" />
            <rect x="140.026" y="17.1934" width="7.92929" height="7.92749" rx="3.96375" fill="#040241" />
            <path d="M37.1755 17.7067L38.1433 19.65L40.2487 20.6216L38.1433 21.5932L37.1755 23.5365L36.2077 21.5932L34.1023 20.6216L36.2077 19.65L37.1755 17.7067Z" fill="white" />
            <defs>
                <linearGradient id="paint0_linear_57_29" x1="33.6545" y1="0.985596" x2="-12.2467" y2="59.799" gradientUnits="userSpaceOnUse">
                    <stop offset="0.005" stopColor="#57F8C7" />
                    <stop offset="0.419862" stopColor="#45E0B1" />
                    <stop offset="0.690329" stopColor="#09D1C7" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export function Pricy() {
    return (
        <SectionLayout>
            <span className="flex flex-col items-center gap-3">
                <h2 className="flex items-center justify-center gap-2 md:gap-6 text-center text-3xl md:text-5xl text-blue-200 font-semibold">Deja que <span className="hidden md:block"><Logo /></span> <span className="md:hidden">Pricy</span> Te guie</h2>
                <span className="font-bold text-4xl md:text-7xl text-blue-100 text-center">Al mejor precio</span>
            </span>

            <div className="grid md:grid-cols-[300px_1fr_300px] gap-6 md:gap-12 mt-16 mx-auto relative">
                <div className="flex flex-col gap-4 md:gap-8">
                    <Image src={logoImg} alt=""/>
                    <strong className="font-bold text-xl md:text-3xl">Pricy te ayuda</strong>
                    <p>Tu asistente inteligente que compara precios, revisa reseñas y te ayuda a encontrar la mejor opción en segundos.</p>
                </div>

                <picture>
                    <Image src={bottom} alt="" />
                </picture>

                <div className="md:h-full flex flex-col md:justify-between gap-8 md:py-16">
                    <span>
                        <strong className="text-[#09D1C7] font-bold text-6xl md:text-7xl">+1200</strong>
                        <p className="font-bold text-lg">Descargas Online</p>
                    </span>
                    <span className="md:-ml-32">
                        <CTA />
                    </span>
                </div>


                <div className="absolute bg-blue-100/40 top-12 -left-[200px] w-[500px] h-[300px] rounded-full -z-10 blur-[80px]"></div>
                <div className="absolute bg-[#7EEDCC] -bottom-20 right-0 w-[900px] h-[300px] rounded-full -z-10 blur-[80px]"></div>
            </div>
        </SectionLayout>
    )
}