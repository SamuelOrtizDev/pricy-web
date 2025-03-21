export function CTA({label = 'Descarga la extensión'}) {
    return (
        <a href="/error" className="px-4 cursor-pointer py-2 rounded-full text-nowrap font-bold text-white bg-blue-100 underline transition-colors hover:bg-blue-200 w-fit">
            {label}
        </a>
    )
}