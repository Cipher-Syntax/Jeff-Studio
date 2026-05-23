import { useEffect } from 'react';

const useFadeInOnScroll = () => {
    useEffect(() => {
        const elements = Array.from(document.querySelectorAll('.fade-in'));
        if (elements.length === 0) return undefined;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.08 }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);
};

export default useFadeInOnScroll;
