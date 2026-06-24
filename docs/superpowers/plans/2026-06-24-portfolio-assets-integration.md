# Portfolio Assets Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate the portfolio images into a responsive masonry gallery with a lightbox, updating the landing page, and centralizing project data.

**Architecture:** We will create a local data file (`projects.js`) to store image metadata, update the existing React components on the Landing Page, build a CSS-based masonry layout for the Projects Page, and a React Portal/Overlay based Lightbox component.

**Tech Stack:** React, Vite, Tailwind CSS v4, React Router DOM.

---

### Task 1: Create Centralized Projects Data

**Files:**
- Create: `src/data/projects.js`

- [ ] **Step 1: Write the projects.js file with imported assets**

```javascript
import imgMe from '../assets/images/me.png';
import img3D1 from '../assets/projects/3Ds/3D_1.png';
import img3D2 from '../assets/projects/3Ds/3D_2.png';
import img3D3 from '../assets/projects/3Ds/3D_3.png';
import img3D4 from '../assets/projects/3Ds/3D_4.png';
import img3D5 from '../assets/projects/3Ds/3D_5.png';
import img3D6 from '../assets/projects/3Ds/3D_6.png';
import img3D7 from '../assets/projects/3Ds/3D_7.png';
import ortho1 from '../assets/projects/orthographics/ortho_1.png';
import ortho2 from '../assets/projects/orthographics/ortho_2.png';
import plan1 from '../assets/projects/plans/plan_1.png';
import plan2 from '../assets/projects/plans/plan_2.png';
import plan3 from '../assets/projects/plans/plan_3.png';
import plan4 from '../assets/projects/plans/plan_4.png';

export const meImage = imgMe;

export const projectsData = [
    { id: '3d-1', title: 'Modern Architecture 1', category: '3D', image: img3D1, alt: '3D Render 1' },
    { id: '3d-2', title: 'Modern Architecture 2', category: '3D', image: img3D2, alt: '3D Render 2' },
    { id: '3d-3', title: 'Modern Architecture 3', category: '3D', image: img3D3, alt: '3D Render 3' },
    { id: '3d-4', title: 'Modern Architecture 4', category: '3D', image: img3D4, alt: '3D Render 4' },
    { id: '3d-5', title: 'Modern Architecture 5', category: '3D', image: img3D5, alt: '3D Render 5' },
    { id: '3d-6', title: 'Modern Architecture 6', category: '3D', image: img3D6, alt: '3D Render 6' },
    { id: '3d-7', title: 'Modern Architecture 7', category: '3D', image: img3D7, alt: '3D Render 7' },
    { id: 'ortho-1', title: 'Orthographic View 1', category: 'Orthographic', image: ortho1, alt: 'Orthographic 1' },
    { id: 'ortho-2', title: 'Orthographic View 2', category: 'Orthographic', image: ortho2, alt: 'Orthographic 2' },
    { id: 'plan-1', title: 'Floor Plan 1', category: 'Plan', image: plan1, alt: 'Floor Plan 1' },
    { id: 'plan-2', title: 'Floor Plan 2', category: 'Plan', image: plan2, alt: 'Floor Plan 2' },
    { id: 'plan-3', title: 'Floor Plan 3', category: 'Plan', image: plan3, alt: 'Floor Plan 3' },
    { id: 'plan-4', title: 'Floor Plan 4', category: 'Plan', image: plan4, alt: 'Floor Plan 4' }
];
```

- [ ] **Step 2: Commit**

```bash
git add src/data/projects.js
git commit -m "feat: add projects data file"
```

### Task 2: Build the Lightbox Component

**Files:**
- Create: `src/features/projects/components/Lightbox.jsx`

- [ ] **Step 1: Write Lightbox implementation**

```jsx
import React, { useEffect } from 'react';

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onNext, onPrev]);

    if (currentIndex === null || !images[currentIndex]) return null;

    const currentImage = images[currentIndex];

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={onClose}
        >
            <button 
                className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl"
                onClick={(e) => { e.stopPropagation(); onClose(); }}
            >
                &times;
            </button>

            <button 
                className="absolute left-4 text-white hover:text-gray-300 text-5xl p-4"
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
            >
                &#8249;
            </button>

            <img 
                src={currentImage.image} 
                alt={currentImage.alt} 
                className="max-h-[90vh] max-w-[90vw] object-contain transition-transform duration-300"
                onClick={(e) => e.stopPropagation()}
            />

            <button 
                className="absolute right-4 text-white hover:text-gray-300 text-5xl p-4"
                onClick={(e) => { e.stopPropagation(); onNext(); }}
            >
                &#8250;
            </button>
            
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <p className="text-lg font-semibold">{currentImage.title}</p>
                <p className="text-sm text-gray-400">{currentIndex + 1} / {images.length}</p>
            </div>
        </div>
    );
};

export default Lightbox;
```

- [ ] **Step 2: Commit**

```bash
git add src/features/projects/components/Lightbox.jsx
git commit -m "feat: add lightbox component"
```

### Task 3: Build the Masonry Projects Page

**Files:**
- Modify: `src/features/projects/pages/ProjectsPage.jsx`
- Create: `src/features/projects/pages/ProjectsPage.css` (Optional if using Tailwind solely, but for CSS masonry `columns` utility in Tailwind v4 we can use inline classes)

- [ ] **Step 1: Write ProjectsPage with Masonry and Lightbox**

```jsx
import React, { useState } from 'react';
import { projectsData } from '../../../data/projects';
import Lightbox from '../components/Lightbox';

const ProjectsPage = () => {
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const openLightbox = (index) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);
    const showNext = () => setLightboxIndex((prev) => (prev + 1) % projectsData.length);
    const showPrev = () => setLightboxIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Portfolio</h1>
                
                {/* CSS Columns approach for Masonry */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {projectsData.map((project, index) => (
                        <div 
                            key={project.id} 
                            className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl bg-gray-800"
                            onClick={() => openLightbox(index)}
                        >
                            <img 
                                src={project.image} 
                                alt={project.alt} 
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                    <p className="text-sm text-gray-300">{project.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {lightboxIndex !== null && (
                <Lightbox 
                    images={projectsData} 
                    currentIndex={lightboxIndex} 
                    onClose={closeLightbox} 
                    onNext={showNext} 
                    onPrev={showPrev} 
                />
            )}
        </div>
    );
};

export default ProjectsPage;
```

- [ ] **Step 2: Commit**

```bash
git add src/features/projects/pages/ProjectsPage.jsx
git commit -m "feat: build masonry projects page with lightbox"
```

### Task 4: Update Landing Page

**Files:**
- Modify: `src/features/portfolio/components/AboutSection.jsx` (assuming it exists, we will overwrite or create a basic one)
- Modify: `src/features/portfolio/components/FeaturedProjectSection.jsx`

- [ ] **Step 1: Write AboutSection with me.png**
*(Note: If file doesn't exist, this creates it)*

```jsx
import React from 'react';
import { meImage } from '../../../data/projects';

const AboutSection = () => {
    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-20 transform -rotate-3"></div>
                        <img 
                            src={meImage} 
                            alt="Jeff" 
                            className="relative w-80 h-auto rounded-2xl shadow-2xl object-cover border border-gray-700"
                        />
                    </div>
                </div>
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-4xl font-bold">About Me</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        I am a 3D Artist and Architectural Designer dedicated to bringing concepts to life. 
                        With a strong background in spatial design and visualization, I create compelling 
                        orthographics, plans, and 3D renders that tell a story.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
```

- [ ] **Step 2: Write FeaturedProjectSection**
*(Note: If file doesn't exist, this creates it)*

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../../data/projects';

const FeaturedProjectSection = () => {
    // Select first 3 items for featured
    const featuredProjects = projectsData.slice(0, 3);

    return (
        <section className="py-20 bg-gray-950 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Selected Works</h2>
                        <p className="text-gray-400 max-w-2xl">A curated selection of my latest 3D renders and architectural plans.</p>
                    </div>
                    <Link 
                        to="/projects" 
                        className="hidden md:inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    >
                        View Full Portfolio
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredProjects.map(project => (
                        <div key={project.id} className="group relative overflow-hidden rounded-2xl bg-gray-800">
                            <div className="aspect-[4/3] w-full">
                                <img 
                                    src={project.image} 
                                    alt={project.alt} 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-2 block">{project.category}</span>
                                <h3 className="text-2xl font-bold">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 text-center md:hidden">
                    <Link 
                        to="/projects" 
                        className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    >
                        View Full Portfolio
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjectSection;
```

- [ ] **Step 3: Commit**

```bash
git add src/features/portfolio/components/AboutSection.jsx src/features/portfolio/components/FeaturedProjectSection.jsx
git commit -m "feat: update landing page about and featured sections"
```

### Task 5: Clean Up Routes

**Files:**
- Modify: `src/app/Routes.jsx`
- Delete (or ignore): `src/features/projects/pages/ProjectDetailPage.jsx` (we will simply remove the route)

- [ ] **Step 1: Remove ProjectDetailPage route in Routes.jsx**

```jsx
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import LandingPage from '../features/portfolio/pages/LandingPage';
import ProjectsPage from '../features/projects/pages/ProjectsPage';
import ContactPage from '../features/contact/pages/ContactPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<LandingPage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="contact" element={<ContactPage />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
```

- [ ] **Step 2: Commit**

```bash
git add src/app/Routes.jsx
git commit -m "refactor: remove unused project detail route"
```
