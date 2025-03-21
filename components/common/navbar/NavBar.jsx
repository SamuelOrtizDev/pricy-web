'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CTA } from "../CTA";
import Logo from "@/app/Logo";

const Menu = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
)

const X = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
)

export function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);
    const path = usePathname()
    const [isOpen, setIsOpened] = useState(false)
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        // Verificar si estamos en el cliente (navegador)
        if (typeof window !== 'undefined') {
            setScreenWidth(window.innerWidth); // Establecer el ancho de la pantalla en el cliente
        }

        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setScreenWidth(window.innerWidth);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (screenWidth >= 768) {
            setIsOpened(false);
        }
    }, [screenWidth]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Limpia el event listener al desmontar
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => { setIsOpened(false) }, [path])

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    return (
        <motion.header
            initial={{
                y: -200, // Posición inicial, fuera de la pantalla hacia arriba
            }}
            animate={{
                y: 0, // Posición final, posición original
                backgroundColor: isScrolled || isOpen ? "white" : "transparent",
                // backdropFilter: isOpen ? "blur(10px)" : "blur(0px)",
                height: isOpen ? '100%' : 'auto'
            }}
            transition={{
                duration: 0.2, // Duración de la animación en segundos
                ease: "easeOut", // Curva de animación
            }}
            className={`w-full transition-all fixed text-silver-200 top-0 px-4 md:px-[72px] py-4 nav:py-2 ${isScrolled && 'shadow-sm'} z-50`}>
            <div className="w-full mx-auto max-w-[1700px] flex flex-wrap items-center justify-between">
                <Link href='/' className="hover:scale-105 transition-all">
                    <Logo/>
                </Link>

                <nav className="hidden nav:flex items-center gap-12">
                    <NavOptions />
                    <CTA label='¡Obtenlo ahora!'/>
                </nav>

                <nav className="nav:hidden">
                    <button onClick={() => setIsOpened(!isOpen)}>
                        {
                            isOpen ? <X /> : <Menu />
                        }
                    </button>
                </nav>

                {
                    isOpen ?
                        <div className="nav:hidden h-full flex flex-col items-center pt-10 basis-full">
                            <motion.nav
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="divide-y divide-white/20 flex flex-col w-full">
                                <NavOptions />
                            </motion.nav>
                            <motion.span
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="py-4"
                            >
                                <CTA label='¡Obtenlo ahora!'/>
                            </motion.span>
                        </div>
                        : <></>
                }
            </div>
        </motion.header>
    )
}

const NavLink = ({ children, className, href }) => (
    <Link href={href} className={`flex justify-center py-4 nav:py-0 font-semibold ${className}`}>
        {children}
    </Link>
)

function NavOptions() {

    const path = usePathname()

    const selectedStyle = 'w-full text-center text-nowrap text-blue-100 navlink'
    const unselectedStyle = 'transition-colors w-full text-center text-nowrap hover:text-blue-100 navlink'

    return (
        <>
            <NavLink href='/product' className={`${path === '/product' ? selectedStyle : unselectedStyle}`}>
                Nuestro Producto
            </NavLink>

            <NavLink href='/about' className={`${path === '/about' ? selectedStyle : unselectedStyle}`}>
                Sobre Nosotros
            </NavLink>

            <NavLink href='/contact' className={`${path === '/contact' ? selectedStyle : unselectedStyle}`}>
                Contactanos
            </NavLink>
        </>
    )
}