import Me from '../../../assets/images/me.png';
import ResumePdf from '../../../assets/RESUME.pdf';

const HeroSection = () => {
    return (
        <section id="hero" className="grid-bg min-h-screen pt-[130px] px-5 sm:px-[6%] pb-[80px] flex items-center relative border-t border-gray-200 dark:border-[#1c4a6a] transition-colors duration-300 overflow-hidden">
            <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[60px] items-center">

                {/* Left Text Content */}
                <div className="w-full">
                    <p className="font-mono text-[9px] sm:text-[11px] tracking-[2px] sm:tracking-[3px] text-[#3d8ab5] border-l-2 border-[#3d8ab5] pl-3.5 mb-5 uppercase">
                        BSIT &mdash; Architectural Drafting Technology
                    </p>

                    <h1 className="font-sans font-black text-[clamp(44px,12vw,100px)] leading-[1.05] sm:leading-[0.9] tracking-[-1px] text-slate-900 dark:text-[#d8edf8] mb-4">
                        <span className="block whitespace-nowrap">JEFFERSON T.</span>
                        <span className="block whitespace-nowrap text-transparent [-webkit-text-stroke:0.75px_#5eafd4] sm:[-webkit-text-stroke:1.5px_#5eafd4]">
                            JEFF | STUDIO
                        </span>
                    </h1>

                    <p className="font-mono text-[10px] sm:text-[12px] text-[#5eafd4] tracking-[1px] mb-3.5">
                        Architectural Drafter &middot; CAD Specialist &middot; Design Enthusiast
                    </p>

                    <p className="text-[14px] sm:text-[15px] font-light text-slate-600 dark:text-[#82b8d4] leading-[1.75] max-w-[480px] mb-9">
                        Creating precise technical drawings, spatial designs, and architectural
                        visualizations. Transforming concepts into detailed working drawings
                        with accuracy and intent.
                    </p>

                    <div className="flex flex-wrap gap-3.5">
                        <a href="#portfolio" className="font-mono text-[11px] tracking-[1.5px] bg-[#5eafd4] text-white dark:text-[#07111f] px-[26px] py-[13px] uppercase hover:bg-[#88c8e8] transition-colors">
                            View Portfolio
                        </a>
                        <a href={ResumePdf} download="Jefferson_Toong_CV.pdf" className="font-mono text-[11px] tracking-[1.5px] text-[#5eafd4] border border-[#2a6a90] px-[26px] py-[13px] uppercase hover:border-[#5eafd4] transition-colors">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="hidden lg:block mt-12 lg:mt-0">
                    <div className="w-[270px] h-[310px] lg:ml-auto bg-slate-50 dark:bg-[#0d2240] border border-gray-200 dark:border-[#2a6a90] relative flex items-center justify-center p-2 before:content-[''] before:absolute before:w-5 before:h-5 before:border-solid before:border-[#5eafd4] before:-top-1.5 before:-left-1.5 before:border-t-2 before:border-l-2 before:border-b-0 before:border-r-0 after:content-[''] after:absolute after:w-5 after:h-5 after:border-solid after:border-[#5eafd4] after:-bottom-1.5 after:-right-1.5 after:border-b-2 after:border-r-2 after:border-t-0 after:border-l-0 transition-colors duration-300">
                        <img
                            src={Me}
                            alt="Jefferson Alah Toong"
                            className="w-full h-full object-cover border border-gray-200 dark:border-[#2a6a90]"
                        />
                    </div>
                    <p className="font-mono text-[9px] text-slate-500 dark:text-[#4a7f9a] mt-2 text-center lg:text-right uppercase">
                        ELEV. FRONT &middot; A-01
                    </p>
                </div>
            </div>

            <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
                <span className="font-mono text-[9px] text-slate-400 dark:text-[#4a7f9a] tracking-[2px]">SCROLL</span>
                <div className="w-px h-8 bg-gradient-to-b from-slate-400 dark:from-[#4a7f9a] to-transparent"></div>
            </div>
        </section>
    );
};

export default HeroSection;