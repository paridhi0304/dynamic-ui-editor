import React from 'react';

// PreviewArea expects all needed props declared
export default function PreviewArea({
  galleryImages,
  selectedImage,
  radius,
  textColor,
  fontSize,
  fontFamily,
  fontWeight,
  textAlign,
  previewText,
  shadow,
  padding,
  shadowStyles,
  layout,
  galleryAlign,
  gallerySpacing,
  galleryRadius
}) {
  return (
    <div className="preview-area">
      <div style={{
        width: 440,
        minHeight: 360,
        background: '#f8f8f8',
        borderRadius: 18,
        boxShadow: '0 4px 24px #0001',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
        position: 'relative'
      }}>
        {/* --- Left Icon Button Column --- */}
        <div style={{
          position: 'absolute',
          left: -68,
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: 15
        }}>
          <IconButton icon="camera" />
          <IconButton icon="minus" />
          <IconButton icon="expand" />
          <IconButton icon="plus" />
        </div>

        {/* --- Main Preview Image --- */}
        <img
          src={galleryImages[selectedImage]}
          alt="Gallery Preview"
          style={{
            width: '92%',
            height: 210,
            objectFit: 'contain',
            borderRadius: radius,
            marginBottom: 15
          }}
        />

        {/* --- Preview Text --- */}
        <span style={{
          color: textColor,
          fontSize: fontSize,
          fontFamily: fontFamily,
          fontWeight: fontWeight,
          textAlign: textAlign,
          width: '100%',
          display: "block",
          marginBottom: 24
        }}>
          {previewText}
        </span>

        {/* --- Buttons row at bottom --- */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginTop: 10,
          gap: 20
        }}>
          <button
            style={{
              background: "#e69688",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: "1.05rem",
              padding: "13px 36px",
              cursor: "pointer",
              marginRight: 8,
              boxShadow: "0 1.5px 8px #b9847733",
              outline: "none",
              transition: "box-shadow 0.12s"
            }}>
            Add to cart
          </button>
          <button
            style={{
              border: "1px solid #bbb",
              background: "#fff",
              borderRadius: 8,
              padding: "12px 20px",
              color: "#222",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              fontWeight: 480,
              gap: 8
            }}>
            <RoomIcon />
            <span style={{marginLeft: 8}}>View in your room</span>
          </button>
        </div>
      </div>
    </div>
  );
}


function IconButton({ icon }) {
  let svg;
  if (icon === "camera") svg = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
      <rect x="4" y="6" width="16" height="12" rx="3"/>
      <circle cx="12" cy="12" r="4" fill="#fff"/>
      <rect x="9" y="8" width="6" height="2" rx="1" fill="black"/>
    </svg>
  );
  if (icon === "minus") svg = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
      <rect x="7" y="11" width="10" height="2" rx="1"/>
    </svg>
  );
  if (icon === "expand") svg = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
      <polyline points="8 16 3 21" stroke="black" strokeWidth="2" fill="none"/>
      <polyline points="16 8 21 3" stroke="black" strokeWidth="2" fill="none"/>
    </svg>
  );
  if (icon === "plus") svg = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
      <rect x="11" y="7" width="2" height="10" rx="1"/>
      <rect x="7" y="11" width="10" height="2" rx="1"/>
    </svg>
  );
  return (
    <button style={{
      background: "#fff",
      border: "1.5px solid #bbb",
      borderRadius: 12,
      width: 54,
      height: 54,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }}>
      {svg}
    </button>
  );
}


function RoomIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" stroke="#888" strokeWidth="1.6" fill="none"/>
      <path d="M8 15L12 8l4 7" stroke="#888" strokeWidth="1.6" fill="none"/>
    </svg>
  );
}
