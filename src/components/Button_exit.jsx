export default function Button_exit({ size, bg_color, text, icon, text_color, children }) {

    return (
        <button className={`${size == 'normal' ? 'w-32' : 'w-44'} ${bg_color} h-10 ${text_color} text-xs font-bold flex items-center justify-center gap-2 rounded-full`}>
            <a>{text}</a>
            {icon ? (children) :(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>)}
        </button>
    )
}
