export function SectionLayout({ children, className, bgColor, style, padding = true }) {
    return (
        <section style={style} className={`${bgColor} bg-center bg-cover`}>
            <div className={`mx-auto max-w-[1800px] px-7 md:px-[72px] ${padding === true && 'py-12 md:py-20'} ${className}`}>
                {children}
            </div>
        </section>
    )
}