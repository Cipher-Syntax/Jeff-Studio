import { useEffect } from 'react';
import colors from '../constants/colors';

const applyColorVars = (palette) => {
    const root = document.documentElement;

    Object.entries(palette).forEach(([groupName, groupValue]) => {
        if (!groupValue || typeof groupValue !== 'object') return;

        Object.entries(groupValue).forEach(([key, value]) => {
            if (typeof value !== 'string') return;
            root.style.setProperty(`--color-${groupName}-${key}`, value);
        });
    });
};

const Providers = ({ children }) => {
    useEffect(() => {
        applyColorVars(colors);
    }, []);

    return children;
};

export default Providers;