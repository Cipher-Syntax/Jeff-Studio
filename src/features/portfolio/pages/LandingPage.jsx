import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import FeaturedProjectSection from '../components/FeaturedProjectSection';
import CertificatesSection from '../components/CertificatesSection';
import ContactSection from '../components/ContactSection';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

const LandingPage = () => {
    useFadeInOnScroll();

    return (
        <>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <FeaturedProjectSection />
            <CertificatesSection />
            <ContactSection />
        </>
    );
};

export default LandingPage;