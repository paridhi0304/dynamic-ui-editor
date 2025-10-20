Dynamic UI Editor for Customizable Components
A fully functional React UI editor that allows live visual customization and previewing of product/component designs, built to match dynamic constraints and the provided Figma specification.

Live Demo on Netlify

Features

Customizable UI Sidebar: Instantly edit colors, text, font, sizing, border radius, gallery image selection, and product presentation—all via controls.

Live Preview: See all changes in real time as you interact with the editor interface.

Image Gallery: Upload images, adjust alignment, gap, and border radius as required by the assignment.

Export Settings: Download your UI configuration as a JSON file for use elsewhere.

Product Controls: Includes zoom buttons, view-in-room, and add-to-cart actions with assignment-inspired layout.

Modern UI: Responsive, clean, and closely aligned with the Figma design.


Component API & Configurable Props

Sidebar Props

Prop	Type	Description
palette	array	Array of color hex codes for quick selection
bgColor, setBgColor	string, function	Background color and setter for preview
previewText, setPreviewText	string, function	Preview area text and setter
fontSize, setFontSize	number, function	Font size and setter
fontFamily, setFontFamily	string, function	Font family and setter
fontWeight, setFontWeight	string, function	Font weight and setter
textColor, setTextColor	string, function	Text color and setter
textAlign, setTextAlign	string, function	Text alignment and setter
radius, setRadius	number, function	Corner radius and setter
shadow, setShadow	string, function	Shadow style and setter
padding, setPadding	number, function	Preview card padding and setter
layout, setLayout	string, function	Layout orientation (horizontal/vertical)
galleryImages, setGalleryImages	array, function	Gallery images and setter
selectedImage, setSelectedImage	number, function	Currently previewed image and setter
galleryAlign, setGalleryAlign	string, function	Alignment of gallery images
gallerySpacing, setGallerySpacing	number, function	Spacing (gap) between gallery images
galleryRadius, setGalleryRadius	number, function	Border radius for gallery images
(See code for full list and types.)

PreviewArea Props

Accepts all values above (not setters) to render the live preview,
plus internal control for icons/buttons, matching Figma.

sage

Clone the repo:
git clone https://github.com/paridhi0304/dynamic-ui-editor.git

Install dependencies:
npm install

Start the app locally:
npm start

Build for production:
npm run build

Deploy:

Netlify: drag the build/ folder onto Netlify Drop

Otherwise: Use Vercel, or host your build output anywhere static files are served

How the Editor Works

All customization is handled in the sidebar.

The main area shows a real-time preview of your current configuration, including background, text, images, and product controls.

Product and image gallery customization are modular and easy to extend.

Export your settings as JSON for use in other systems or for handoff.

Customization & UX Decisions

Grouped Sidebar Sections: All controls are logically grouped for clarity and quick access, inspired by design tools like Figma.

Live Visual Feedback: Every control offers immediate feedback in the preview area for a seamless experience.

Gallery Controls: Users can adjust alignment, spacing, and border radius of images, reflecting modern product configurators.

Minimal Dependencies: The editor uses only React and built-in hooks for maximum clarity and ease of assessment.

Figma-Driven Styling: Margins, paddings, button shapes, and control grouping follow the assignment reference for visual consistency.

Export/Import: (Export implemented, import can be added for extensibility.)


Author

Paridhi Tayal

