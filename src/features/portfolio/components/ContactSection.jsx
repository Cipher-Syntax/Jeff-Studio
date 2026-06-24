import SectionHeader from './SectionHeader';
import Footer from '../../../components/common/Footer';

const contacts = [
    { label: 'Email', value: 'jtoong15.zppsu.edu.ph@gmail.com', href: 'mailto:jtoong15.zppsu.edu.ph@gmail.com' },
    { label: 'Phone', value: '0991 944 7390', href: 'tel:09919447390' },
    { label: 'Facebook', value: 'Jefferson Toong', href: 'https://www.facebook.com/orewajefu.desu' },
    { label: 'LinkedIn', value: 'Jefferson Toong', href: 'https://www.linkedin.com/in/jefferson-toong-9b2726316' },
];

const ContactSection = () => {
    return (
        <section id="contact" className="grid-bg py-24 px-[6%] border-t border-slate-200 dark:border-[#1c4a6a] transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto w-full">
                <SectionHeader number="06" title="CONTACT" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[72px] mb-[60px]">
                    <div className="fade-in">
                        <h3 className="font-sans font-bold text-[52px] leading-[0.95] text-slate-900 dark:text-[#d8edf8] mb-4">
                            LET'S<br />WORK<br />TOGETHER
                        </h3>
                        <p className="text-[14px] font-light text-slate-600 dark:text-[#82b8d4] leading-[1.8] mb-8">
                            Open for internship opportunities, OJT placements, freelance drafting
                            projects, or to connect with fellow architecture and design enthusiasts.
                        </p>

                        <div className="flex flex-col gap-3">
                            {contacts.map((contact) => (
                                <a key={contact.label} href={contact.href} target="_blank" rel="noopener noreferrer" className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-[18px] text-[14px] text-slate-700 dark:text-[#b0d4e8] bg-white/80 dark:bg-[#07111f]/80 px-4 py-[13px] border border-slate-200 dark:border-[#1c4a6a] transition-all duration-200 hover:border-[#3d8ab5] hover:text-[#5eafd4] dark:hover:border-[#3d8ab5] dark:hover:text-[#5eafd4]">
                                    <span className="font-mono text-[9px] tracking-[2px] text-[#3d8ab5] min-w-[64px] uppercase">
                                        {contact.label}
                                    </span>
                                    <span>{contact.value}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="fade-in delay-100">
                        <div className="bg-white/80 dark:bg-[#0d2240]/80 backdrop-blur-sm border border-slate-200 dark:border-[#1c4a6a] p-9 transition-colors duration-300">
                            <p className="font-mono text-[10px] tracking-[2px] text-[#3d8ab5] mb-6 uppercase">
                                SEND A MESSAGE
                            </p>
                            <form 
                                action="https://formspree.io/f/your_form_id_here" 
                                method="POST" 
                                className="flex flex-col gap-4"
                            >
                                <div>
                                    <label className="block font-mono text-[9px] tracking-[1.5px] text-slate-500 dark:text-[#4a7f9a] mb-2 uppercase">Your Name</label>
                                    <input name="name" required className="w-full bg-slate-50 dark:bg-[#07111f] border border-slate-200 dark:border-[#1c4a6a] text-slate-900 dark:text-[#d8edf8] px-3.5 py-3 font-mono text-[12px] outline-none transition-colors duration-200 focus:border-[#3d8ab5] dark:focus:border-[#3d8ab5]" type="text" placeholder="Juan Dela Cruz" />
                                </div>
                                <div>
                                    <label className="block font-mono text-[9px] tracking-[1.5px] text-slate-500 dark:text-[#4a7f9a] mb-2 uppercase">Email Address</label>
                                    <input name="email" required className="w-full bg-slate-50 dark:bg-[#07111f] border border-slate-200 dark:border-[#1c4a6a] text-slate-900 dark:text-[#d8edf8] px-3.5 py-3 font-mono text-[12px] outline-none transition-colors duration-200 focus:border-[#3d8ab5] dark:focus:border-[#3d8ab5]" type="email" placeholder="email@example.com" />
                                </div>
                                <div>
                                    <label className="block font-mono text-[9px] tracking-[1.5px] text-slate-500 dark:text-[#4a7f9a] mb-2 uppercase">Message</label>
                                    <textarea name="message" required className="w-full bg-slate-50 dark:bg-[#07111f] border border-slate-200 dark:border-[#1c4a6a] text-slate-900 dark:text-[#d8edf8] px-3.5 py-3 font-mono text-[12px] outline-none resize-y transition-colors duration-200 focus:border-[#3d8ab5] dark:focus:border-[#3d8ab5]" rows={4} placeholder="Tell me about your project or inquiry..."></textarea>
                                </div>
                                <button type="submit" className="self-start bg-[#3d8ab5] text-white dark:text-[#07111f] font-mono text-[11px] tracking-[2px] px-[26px] py-[13px] mt-2 uppercase cursor-pointer transition-colors duration-200 hover:bg-[#88c8e8]">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default ContactSection;