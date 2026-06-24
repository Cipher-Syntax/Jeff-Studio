import imgMe from '../assets/images/me.png';

export const meImage = imgMe;

export const projectsData = [];

// Helper to extract filename without extension
const getBasename = (path) => {
    const parts = path.split('/');
    return parts[parts.length - 1].replace(/\.[^/.]+$/, "");
};

// Function to add modules to projectsData
const addModules = (modules, category) => {
    // Sort paths to ensure consistent ordering numerically (e.g. 3D_1, 3D_2 ... 3D_10)
    const paths = Object.keys(modules).sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)?.[0] || '0', 10);
        const numB = parseInt(b.match(/\d+/)?.[0] || '0', 10);
        if (numA !== numB) return numA - numB;
        return a.localeCompare(b);
    });

    paths.forEach(path => {
        const basename = getBasename(path);
        
        projectsData.push({
            id: basename.toLowerCase(),
            title: category,
            category: category,
            image: modules[path].default || modules[path],
            alt: `${category} render ${basename}`
        });
    });
};

// Vite's import.meta.glob dynamically imports all matching files in the directory
// Using { eager: true, import: 'default' } gives us the URL strings directly
const threeDModules = import.meta.glob('../assets/projects/3Ds/*.png', { eager: true, import: 'default' });
const orthoModules = import.meta.glob('../assets/projects/orthographics/*.png', { eager: true, import: 'default' });
const planModules = import.meta.glob('../assets/projects/plans/*.png', { eager: true, import: 'default' });

addModules(threeDModules, '3D');
addModules(orthoModules, 'Orthographic');
addModules(planModules, 'Plan');
