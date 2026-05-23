const SectionHeader = ({ number, title }) => {
    return (
        <div className="flex flex-col gap-2 mb-12 fade-in">
            <span className="font-mono text-[10px] tracking-[2px] text-[#5eafd4] uppercase">
                SEC. {number}
            </span>
            <div className="flex items-center gap-5">
                <h2 className="font-sans font-bold text-[28px] tracking-[1px] text-slate-900 dark:text-[#d8edf8] m-0">
                    {title}
                </h2>
                <div className="flex-1 h-px bg-slate-200 dark:bg-[#1c4a6a]"></div>
            </div>
        </div>
    );
};

export default SectionHeader;