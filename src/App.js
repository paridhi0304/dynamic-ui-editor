import React, { useState } from 'react';
import Sidebar from './Sidebar';
import PreviewArea from './PreviewArea';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('#e0e0e0');
  const [previewText, setPreviewText] = useState('Preview Area');
  const [fontSize, setFontSize] = useState(22);
  const [fontFamily, setFontFamily] = useState('Inter');
  const [fontWeight, setFontWeight] = useState('normal');
  const [textColor, setTextColor] = useState('#222222');
  const [textAlign, setTextAlign] = useState('center');
  const [radius, setRadius] = useState(18);
  const [shadow, setShadow] = useState('small');
  const [padding, setPadding] = useState(24);
  const [layout, setLayout] = useState('horizontal');
  const [galleryImages, setGalleryImages] = useState([
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca"
  ]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [galleryAlign, setGalleryAlign] = useState('left');
  const [gallerySpacing, setGallerySpacing] = useState(10);
  const [galleryRadius, setGalleryRadius] = useState(9);


  const palette = [
    '#e0e0e0', '#bdbdbd', '#70c1b3', '#49beb7', '#ffb400', '#e4572e',
    '#ab83a1', '#3c3a47', '#5cd4c2', '#50394c', '#0e9aa7', '#ff5470'
  ];

  const shadowStyles = {
    none: 'none',
    small: '0 2px 6px #0001',
    medium: '0 4px 18px #0002',
    large: '0 8px 34px #0003'
  };

  const fontOptions = [
    'Inter', 'Poppins', 'Roboto', 'Arial', 'Georgia', 'Verdana', 'Times New Roman'
  ];

  

  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar
          palette={palette}
          bgColor={bgColor} setBgColor={setBgColor}
          previewText={previewText} setPreviewText={setPreviewText}
          fontSize={fontSize} setFontSize={setFontSize}
          fontFamily={fontFamily} setFontFamily={setFontFamily}
          fontOptions={fontOptions}
          fontWeight={fontWeight} setFontWeight={setFontWeight}
          textColor={textColor} setTextColor={setTextColor}
          textAlign={textAlign} setTextAlign={setTextAlign}
          radius={radius} setRadius={setRadius}
          shadow={shadow} setShadow={setShadow}
          padding={padding} setPadding={setPadding}
          layout={layout} setLayout={setLayout}
          galleryImages={galleryImages} setGalleryImages={setGalleryImages}
          selectedImage={selectedImage} setSelectedImage={setSelectedImage}
          galleryAlign={galleryAlign} setGalleryAlign={setGalleryAlign}
          gallerySpacing={gallerySpacing} setGallerySpacing={setGallerySpacing}
          galleryRadius={galleryRadius} setGalleryRadius={setGalleryRadius}

        />
      </div>
      <div className="preview-area">
        <PreviewArea
          bgColor={bgColor}
          previewText={previewText}
          fontSize={fontSize}
          fontFamily={fontFamily}
          fontWeight={fontWeight}
          textColor={textColor}
          textAlign={textAlign}
          radius={radius}
          shadow={shadow}
          padding={padding}
          shadowStyles={shadowStyles}
          layout={layout}
          galleryImages={galleryImages}
          selectedImage={selectedImage}
          galleryAlign={galleryAlign} 
          setGalleryAlign={setGalleryAlign}

        />
      </div>
    </div>
  );
}

export default App;
