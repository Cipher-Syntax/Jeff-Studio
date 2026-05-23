import SectionHeader from './SectionHeader';
import Footer from '../../../components/common/Footer';

const contacts = [
    { label: 'Email', value: 'your.email@gmail.com', href: 'mailto:your@email.com' },
    { label: 'Phone', value: '+63 9XX XXX XXXX', href: '#' },
    { label: 'LinkedIn', value: 'linkedin.com/in/yourname', href: '#' },
    { label: 'Behance', value: 'behance.net/yourname', href: '#' },
];

const ContactSection = () => {
    return (
        <section id="contact" className="grid-bg">
            <div className="section-inner">
                <SectionHeader number="06" title="CONTACT" />
                <div className="contact-layout">
                    <div className="fade-in">
                        <h3 className="contact-big">LET'S<br />WORK<br />TOGETHER</h3>
                        <p className="contact-desc">
                            Open for internship opportunities, OJT placements, freelance drafting
                            projects, or to connect with fellow architecture and design enthusiasts.
                        </p>
                        <div className="contact-links">
                            {contacts.map((contact) => (
                                <a key={contact.label} href={contact.href} className="contact-link">
                                    <span className="c-lbl">{contact.label}</span>
                                    <span>{contact.value}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="fade-in d1">
                        <div className="form-card">
                            <p className="form-hd">SEND A MESSAGE</p>
                            <div className="form-fields">
                                <div>
                                    <label className="field-lbl">Your Name</label>
                                    <input className="form-input" type="text" placeholder="Juan Dela Cruz" />
                                </div>
                                <div>
                                    <label className="field-lbl">Email Address</label>
                                    <input className="form-input" type="email" placeholder="email@example.com" />
                                </div>
                                <div>
                                    <label className="field-lbl">Message</label>
                                    <textarea className="form-input" rows={4} placeholder="Tell me about your project or inquiry..."></textarea>
                                </div>
                                <button className="form-btn" type="button">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </section>
    );
};

export default ContactSection;
