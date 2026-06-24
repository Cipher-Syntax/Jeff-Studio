# Portfolio Assets Integration Design

## Overview
This document outlines the design for integrating newly added image assets (`me.png` and various project renders) into the Jeff Studio React/Vite portfolio. The goal is to create a visually rich, engaging experience that showcases architectural and 3D work using modern design patterns.

## 1. Architecture & Data Management
To avoid hardcoding image paths and allow for easy future updates, we will centralize the asset metadata.

- **File**: `src/data/projects.js`
- **Purpose**: Acts as a local database for the portfolio.
- **Structure**: It will export an array of project objects, importing images directly from the `src/assets/projects/` subdirectories (`3Ds`, `orthographics`, `plans`).
- **Data Model**:
  ```javascript
  {
    id: string,
    title: string,
    category: '3D' | 'Orthographic' | 'Plan',
    image: importedImageResource,
    alt: string
  }
  ```

## 2. Component Design & Changes

### Landing Page Integration
- **About/Hero Section**: Incorporate `src/assets/images/me.png`. The image will be styled with premium, modern CSS (e.g., subtle drop shadows, rounded corners, or glassmorphism backing) to fit the dark mode aesthetic.
- **Featured Projects Section**: A new or updated component on the `LandingPage` that maps over a subset (e.g., the first 3-4 items) of the `projects.js` data. It will display a structured grid with a clear "View Full Portfolio" Call-To-Action (CTA) button routing to the `/projects` page.

### Projects Page (Masonry Layout)
- **File**: `src/features/projects/pages/ProjectsPage.jsx`
- **Layout**: CSS-based Masonry layout. This approach naturally accommodates the varying aspect ratios of 3D renders, orthographics, and plans without cropping or distorting the images.
- **Responsiveness**: 
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3-4 columns
- **Interaction**: Hovering over an image in the masonry grid will reveal a subtle overlay (e.g., dimming the image slightly and showing the project title) to indicate interactivity.

### Lightbox Experience
- **Component**: `Lightbox` (Likely created in `src/features/projects/components/Lightbox.jsx` or similar).
- **Behavior**: Clicking any image in the `ProjectsPage` masonry grid will trigger the Lightbox.
- **Features**:
  - Full-screen dark overlay.
  - Displays the uncropped image at maximum available screen size.
  - Next/Previous controls to navigate through the `projects.js` array without closing the lightbox.
  - Close button and click-outside-to-close functionality.

### Route Cleanup
- **Action**: Remove the `ProjectDetailPage` component and its corresponding route (`/projects/:slug`) from `src/app/Routes.jsx`, as the Lightbox fully replaces the need for dedicated single-image pages.

## 3. Aesthetic & UI Guidelines
- **Premium Feel**: Use CSS transitions for opening the lightbox and hovering over images. Ensure smooth micro-animations.
- **Color Palette**: Stick to the established dark mode theme, ensuring the lightbox background is suitably dark (e.g., `rgba(0,0,0,0.9)`) to make the vibrant project images pop.

## 4. Scope & Sequence
This project is self-contained. The sequence of work will be:
1. Create `src/data/projects.js`.
2. Update `LandingPage` components (Hero/About & Featured).
3. Build the `ProjectsPage` masonry layout.
4. Build and integrate the `Lightbox` component.
5. Clean up unused routes and files.
