import React from 'react';

export default function Sidebar({
  palette,
  bgColor, setBgColor,
  previewText, setPreviewText,
  fontSize, setFontSize,
  fontFamily, setFontFamily, fontOptions,
  fontWeight, setFontWeight,
  textColor, setTextColor,
  textAlign, setTextAlign,
  radius, setRadius,
  shadow, setShadow,
  padding, setPadding,
  layout, setLayout,
  galleryImages, setGalleryImages, selectedImage, setSelectedImage,
  galleryAlign, setGalleryAlign,
  gallerySpacing, setGallerySpacing,
  galleryRadius, setGalleryRadius
}) {
  return (
    <div className="sidebar">
      <h2>Customize UI</h2>

      <div className="sidebar-group">
        <span>Quick Colors:</span>
        <div style={{ display: 'flex', gap: 10, margin: '12px 0', flexWrap: 'wrap' }}>
          {palette.map((color, i) => (
            <button
              key={i}
              onClick={() => setBgColor(color)}
              style={{
                background: color,
                border: bgColor === color ? '2px solid #222' : '2px solid #ddd',
                borderRadius: '50%',
                width: 34,
                height: 34,
                cursor: 'pointer'
              }}
            />
          ))}
        </div>
        <label>
          <span>Preview Background:</span>
          <input type="color" value={bgColor} onChange={e => setBgColor(e.target.value)} />
        </label>
      </div>

      <div className="sidebar-group">
        <label>
          <span>Preview Text:</span>
          <input type="text" value={previewText} onChange={e => setPreviewText(e.target.value)} />
        </label>
        <label>
          <span>Font Size:</span>
          <input type="range" min={12} max={60} value={fontSize} onChange={e => setFontSize(Number(e.target.value))} />
          {fontSize}px
        </label>
        <label>
          <span>Font Family:</span>
          <select value={fontFamily} onChange={e => setFontFamily(e.target.value)}>
            {fontOptions.map(font => (
              <option key={font} value={font}>{font}</option>
            ))}
          </select>
        </label>
        {/* GALLERY ALIGNMENT CONTROL */}
        <label>
          <span>Gallery Alignment:</span>
          <select value={galleryAlign} onChange={e => setGalleryAlign(e.target.value)}>
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </label>
        <label>
          <span>Font Weight:</span>
          <select value={fontWeight} onChange={e => setFontWeight(e.target.value)}>
            <option value="normal">Normal</option>
            <option value="500">Medium</option>
            <option value="700">Bold</option>
          </select>
        </label>
        <label>
          <span>Text Color:</span>
          <input type="color" value={textColor} onChange={e => setTextColor(e.target.value)} />
        </label>
        <label>
          <span>Text Align:</span>
          <select value={textAlign} onChange={e => setTextAlign(e.target.value)}>
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </label>
      </div>

      <div className="sidebar-group">
        <label>
          <span>Corner Radius:</span>
          <input type="range" min={0} max={40} value={radius} onChange={e => setRadius(Number(e.target.value))} />
          {radius}px
        </label>
        <label>
          <span>Shadow:</span>
          <select value={shadow} onChange={e => setShadow(e.target.value)}>
            <option value="none">None</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <label>
          <span>Padding:</span>
          <input type="range" min={0} max={60} value={padding} onChange={e => setPadding(Number(e.target.value))} />
          {padding}px
        </label>
        <label>
          <span>Layout:</span>
          <select value={layout} onChange={e => setLayout(e.target.value)}>
            <option value="horizontal">Horizontal</option>
            <option value="vertical">Vertical</option>
          </select>
        </label>
      </div>

      <div className="sidebar-group">
        <label>
          <span>Add Image:</span>
          <input
            type="file"
            accept="image/*"
            onChange={e => {
              const file = e.target.files[0];
              if (!file) return;
              const reader = new FileReader();
              reader.onload = (event) => {
                setGalleryImages(prev => [...prev, event.target.result]);
              };
              reader.readAsDataURL(file);
            }}
          />
        </label>

        {/* GALLERY SPACING CONTROL */}
        <label>
          <span>Gallery Spacing:</span>
          <input
            type="range"
            min={0}
            max={30}
            value={gallerySpacing}
            onChange={e => setGallerySpacing(Number(e.target.value))}
          />
          {gallerySpacing}px
        </label>
        {/* GALLERY IMAGE BORDER RADIUS CONTROL */}
        <label>
          <span>Image Border Radius:</span>
          <input
            type="range"
            min={0}
            max={20}
            value={galleryRadius}
            onChange={e => setGalleryRadius(Number(e.target.value))}
          />
          {galleryRadius}px
        </label>

        <span style={{ marginBottom: 9 }}>Gallery:</span>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: gallerySpacing,
            justifyContent:
              galleryAlign === 'center'
                ? 'center'
                : galleryAlign === 'right'
                ? 'flex-end'
                : 'flex-start'
          }}
        >
          {galleryImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery ${i}`}
              style={{
                width: 40,
                height: 40,
                objectFit: 'cover',
                borderRadius: galleryRadius,
                border: selectedImage === i ? '2px solid #E4572E' : '1px solid #ddd',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedImage(i)}
            />
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          const config = {
            bgColor, previewText, fontSize, fontFamily, fontWeight,
            textColor, textAlign, radius, shadow, padding, layout,
            selectedImage, galleryImages,
            galleryAlign, gallerySpacing, galleryRadius
          };
          const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'ui-config.json';
          a.click();
          URL.revokeObjectURL(url);
        }}
      >
        Export Config
      </button>
    </div>
  );
}
