import React from 'react';

interface Icon3DProps {
  className?: string;
  size?: number;
}

/**
 * 3D High-Gloss WhatsApp Icon with Metallic/Glass depth, rim lighting, and specular highlights.
 */
export const WhatsApp3DIcon: React.FC<Icon3DProps> = ({ className = '', size = 56 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-[0_12px_24px_rgba(37,211,102,0.4)] ${className}`}
    >
      <defs>
        {/* Outer Shadow */}
        <filter id="wa-shadow" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#000000" floodOpacity="0.6" />
        </filter>
        {/* Main 3D Sphere Gradient */}
        <radialGradient id="wa-body" cx="36%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#4AEB85" />
          <stop offset="35%" stopColor="#25D366" />
          <stop offset="75%" stopColor="#1EBE5D" />
          <stop offset="100%" stopColor="#0B7334" />
        </radialGradient>
        {/* Specular Rim Light */}
        <linearGradient id="wa-rim" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
          <stop offset="40%" stopColor="#7BFF9E" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#044D21" stopOpacity="0.8" />
        </linearGradient>
        {/* Glass Crescent Highlight */}
        <linearGradient id="wa-glass" x1="50" y1="8" x2="50" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
        </linearGradient>
        {/* Phone Receiver Drop Shadow */}
        <filter id="wa-glyph-shadow">
          <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#085224" floodOpacity="0.6" />
        </filter>
      </defs>

      {/* Outer Glow Ring */}
      <circle cx="50" cy="50" r="44" stroke="#25D366" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />

      {/* Main 3D Capsule / Bubble */}
      <path
        d="M50 10C27.91 10 10 27.91 10 50C10 57.5 12.08 64.53 15.68 70.55L11.5 88.5L30.13 84.45C35.91 87.77 42.66 89.69 50 89.69C72.09 89.69 90 71.78 90 50C90 27.91 72.09 10 50 10Z"
        fill="url(#wa-body)"
        stroke="url(#wa-rim)"
        strokeWidth="2.5"
      />

      {/* Top Glass Reflection Arc */}
      <path
        d="M24 36C28 22 38 15 50 15C62 15 72 22 76 36C68 28 58 24 50 24C42 24 32 28 24 36Z"
        fill="url(#wa-glass)"
      />

      {/* Bottom Ambient Occlusion Shade */}
      <ellipse cx="50" cy="82" rx="24" ry="4" fill="#063819" opacity="0.4" />

      {/* Official WhatsApp Phone Receiver in High-Relief 3D */}
      <path
        d="M66.4 59.8C65.5 59.4 61.1 57.2 60.3 56.9C59.5 56.6 58.9 56.5 58.3 57.4C57.7 58.3 56.1 60.3 55.6 60.9C55.1 61.5 54.6 61.6 53.7 61.1C52.8 60.7 49.9 59.7 46.5 56.7C43.8 54.3 42 51.3 41.5 50.4C41 49.5 41.4 49 41.9 48.6C42.3 48.2 42.8 47.6 43.3 47.1C43.7 46.5 43.9 46.1 44.2 45.5C44.5 44.9 44.3 44.4 44.1 44C43.9 43.6 42.2 39.4 41.5 37.6C40.8 35.9 40.1 36.1 39.5 36.1C39 36.1 38.4 36.1 37.8 36.1C37.2 36.1 36.2 36.3 35.4 37.2C34.6 38.1 32.4 40.2 32.4 44.5C32.4 48.8 35.5 52.9 36 53.5C36.4 54.1 42.2 63.1 51.1 66.9C53.2 67.8 54.9 68.4 56.2 68.8C58.3 69.5 60.2 69.4 61.7 69.2C63.4 68.9 66.9 67 67.6 65C68.3 63 68.3 61.3 68.1 60.9C67.9 60.5 67.3 60.2 66.4 59.8Z"
        fill="#FFFFFF"
        filter="url(#wa-glyph-shadow)"
      />
    </svg>
  );
};

/**
 * 3D High-Gloss Instagram Squircle with Iridescent Sunset Hue, Glass Camera Lens, and Specular Bevel.
 */
export const Instagram3DIcon: React.FC<Icon3DProps> = ({ className = '', size = 56 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-[0_12px_24px_rgba(225,48,108,0.4)] ${className}`}
    >
      <defs>
        {/* 3D Iridescent Radial/Linear Gradient */}
        <linearGradient id="ig-sunset" x1="12" y1="88" x2="88" y2="12" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FED373" />
          <stop offset="25%" stopColor="#F15245" />
          <stop offset="60%" stopColor="#D92E7F" />
          <stop offset="85%" stopColor="#9B36B7" />
          <stop offset="100%" stopColor="#515BD4" />
        </linearGradient>
        {/* Specular Metallic Rim */}
        <linearGradient id="ig-rim" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#300A52" stopOpacity="0.8" />
        </linearGradient>
        {/* Top Glare */}
        <linearGradient id="ig-glare" x1="50" y1="10" x2="50" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
        </linearGradient>
        {/* Lens Glass Gradient */}
        <radialGradient id="ig-lens" cx="45%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#000000" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
        </radialGradient>
      </defs>

      {/* Ambient Outer Ring */}
      <rect x="7" y="7" width="86" height="86" rx="26" stroke="#D92E7F" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />

      {/* Main 3D Rounded Squircle */}
      <rect
        x="10"
        y="10"
        width="80"
        height="80"
        rx="23"
        fill="url(#ig-sunset)"
        stroke="url(#ig-rim)"
        strokeWidth="2.5"
      />

      {/* Upper Glass Specular Curve */}
      <path
        d="M20 30C25 18 36 12 50 12C64 12 75 18 80 30C70 22 59 18 50 18C41 18 30 22 20 30Z"
        fill="url(#ig-glare)"
      />

      {/* Camera Outer Rounded Square */}
      <rect
        x="24"
        y="24"
        width="52"
        height="52"
        rx="14"
        stroke="#FFFFFF"
        strokeWidth="6"
        fill="none"
        filter="drop-shadow(0 3px 4px rgba(0,0,0,0.35))"
      />

      {/* Camera Center Lens */}
      <circle
        cx="50"
        cy="50"
        r="13.5"
        stroke="#FFFFFF"
        strokeWidth="5.5"
        fill="url(#ig-lens)"
        filter="drop-shadow(0 3px 4px rgba(0,0,0,0.35))"
      />

      {/* Lens Specular Reflection Point */}
      <circle cx="46" cy="46" r="3" fill="#FFFFFF" opacity="0.8" />

      {/* Flash Sensor Point */}
      <circle
        cx="67"
        cy="33"
        r="3.5"
        fill="#FFFFFF"
        filter="drop-shadow(0 2px 3px rgba(0,0,0,0.4))"
      />
    </svg>
  );
};

/**
 * 3D High-Gloss Google Ceramic Badge with Official 4-Color 'G' and Specular Bevel.
 */
export const Google3DIcon: React.FC<Icon3DProps> = ({ className = '', size = 56 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-[0_12px_24px_rgba(255,255,255,0.15)] ${className}`}
    >
      <defs>
        {/* Ceramic Badge Radial Gradient */}
        <radialGradient id="gg-body" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F5F5F7" />
          <stop offset="100%" stopColor="#E2E4E8" />
        </radialGradient>
        {/* 3D Chrome Rim */}
        <linearGradient id="gg-rim" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#C4C8D0" />
          <stop offset="100%" stopColor="#7E8490" />
        </linearGradient>
        {/* Specular Highlight */}
        <linearGradient id="gg-glare" x1="50" y1="12" x2="50" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
        </linearGradient>
        {/* Relief shadow on inner G */}
        <filter id="gg-shadow" x="0" y="0" width="100" height="100">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#000000" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Subtle Halo */}
      <circle cx="50" cy="50" r="45" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.15" fill="none" />

      {/* Main Ceramic Coin */}
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="url(#gg-body)"
        stroke="url(#gg-rim)"
        strokeWidth="3"
        filter="drop-shadow(0 8px 16px rgba(0,0,0,0.5))"
      />

      {/* Upper Specular Arc */}
      <path
        d="M25 35C30 22 39 16 50 16C61 16 70 22 75 35C66 26 58 22 50 22C42 22 34 26 25 35Z"
        fill="url(#gg-glare)"
      />

      {/* Official 4-Color Google 'G' with 3D Emboss */}
      <g filter="url(#gg-shadow)" transform="translate(2, 2) scale(0.96)">
        {/* Red Segment */}
        <path
          d="M50 33.6C54.4 33.6 58.3 35.1 61.4 38.1L68.2 31.3C64.1 27.5 57.5 25 50 25C37.7 25 27.2 32.1 22.3 42.4L30.6 48.8C32.6 40.1 40.5 33.6 50 33.6Z"
          fill="#EA4335"
        />
        {/* Yellow Segment */}
        <path
          d="M22.3 42.4C21.1 44.8 20.4 47.3 20.4 50C20.4 52.7 21.1 55.2 22.3 57.6L30.6 51.2C30.2 50.8 30 50.4 30 50C30 49.6 30.2 49.2 30.6 48.8L22.3 42.4Z"
          fill="#FBBC05"
        />
        {/* Green Segment */}
        <path
          d="M50 75C57.3 75 63.6 72.6 68 68.6L60.3 62.6C57.7 64.4 54.2 65.6 50 65.6C40.5 65.6 32.6 59.1 30.6 50.4L22.3 56.8C27.2 67.1 37.7 75 50 75Z"
          fill="#34A853"
        />
        {/* Blue Segment */}
        <path
          d="M78.6 50C78.6 48.2 78.4 46.5 78.1 44.8H50V56.2H66.2C65.5 59.8 63.4 62.8 60.3 64.8L68 70.8C72.5 66.6 78.6 60.3 78.6 50Z"
          fill="#4285F4"
        />
      </g>
    </svg>
  );
};

/**
 * 3D High-Gloss Google Maps Location Pin with Metallic Bevel and Radar Pulse.
 */
export const Maps3DIcon: React.FC<Icon3DProps> = ({ className = '', size = 56 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-[0_12px_24px_rgba(234,67,53,0.4)] ${className}`}
    >
      <defs>
        {/* 3D Crimson Red Gradient */}
        <radialGradient id="pin-body" cx="38%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FF6B5B" />
          <stop offset="35%" stopColor="#EA4335" />
          <stop offset="75%" stopColor="#C5221F" />
          <stop offset="100%" stopColor="#8A0C09" />
        </radialGradient>
        {/* Metallic Bevel */}
        <linearGradient id="pin-rim" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FFA69E" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4A0503" stopOpacity="0.9" />
        </linearGradient>
        {/* Top Glare */}
        <linearGradient id="pin-glare" x1="50" y1="12" x2="50" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
        </linearGradient>
        {/* Center Orb Gradient */}
        <radialGradient id="pin-orb" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#E0E3E8" />
          <stop offset="100%" stopColor="#202124" />
        </radialGradient>
      </defs>

      {/* Ground Contact Shadow */}
      <ellipse cx="50" cy="88" rx="20" ry="5" fill="#000000" opacity="0.6" />

      {/* Main 3D Pin Geometry */}
      <path
        d="M50 12C32.33 12 18 26.33 18 44C18 64 45 84 48.2 86.3C49.3 87.1 50.7 87.1 51.8 86.3C55 84 82 64 82 44C82 26.33 67.67 12 50 12Z"
        fill="url(#pin-body)"
        stroke="url(#pin-rim)"
        strokeWidth="2.5"
      />

      {/* Top Glass Specular Arc */}
      <path
        d="M28 32C32 20 40 16 50 16C60 16 68 20 72 32C64 24 57 20 50 20C43 20 36 24 28 32Z"
        fill="url(#pin-glare)"
      />

      {/* Inner Metallic Center Socket */}
      <circle
        cx="50"
        cy="44"
        r="14"
        fill="url(#pin-orb)"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        filter="drop-shadow(0 2px 4px rgba(0,0,0,0.4))"
      />

      {/* Center Ruby Core Eye */}
      <circle cx="50" cy="44" r="6" fill="#EA4335" />
      <circle cx="48" cy="42" r="1.8" fill="#FFFFFF" opacity="0.9" />
    </svg>
  );
};

/**
 * 3D Faceted Gold Review Star with Specular Gleam.
 */
export const Star3D: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-[0_6px_12px_rgba(255,208,0,0.5)] ${className}`}
    >
      <defs>
        <linearGradient id="star-gold-l" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#FFF280" />
          <stop offset="45%" stopColor="#FFD000" />
          <stop offset="100%" stopColor="#CC9600" />
        </linearGradient>
        <linearGradient id="star-gold-r" x1="100" y1="0" x2="0" y2="100">
          <stop offset="0%" stopColor="#FFE033" />
          <stop offset="50%" stopColor="#E5A800" />
          <stop offset="100%" stopColor="#996D00" />
        </linearGradient>
      </defs>

      {/* Left facets */}
      <path
        d="M50 10L62.36 35.05L90 39.06L70 58.55L74.72 86.06L50 73.06V10Z"
        fill="url(#star-gold-r)"
      />
      {/* Right facets */}
      <path
        d="M50 10L37.64 35.05L10 39.06L30 58.55L25.28 86.06L50 73.06V10Z"
        fill="url(#star-gold-l)"
      />
      {/* Specular gleam at peak */}
      <circle cx="50" cy="18" r="3.5" fill="#FFFFFF" opacity="0.9" />
    </svg>
  );
};

/**
 * 3D Stylized High-Tech Tire Rim graphic.
 */
export const TireRim3D: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="tire-rubber" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#2A2A2A" />
          <stop offset="60%" stopColor="#151515" />
          <stop offset="100%" stopColor="#080808" />
        </radialGradient>
        <radialGradient id="rim-alloy" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#D9D9D9" />
          <stop offset="70%" stopColor="#8C8C8C" />
          <stop offset="100%" stopColor="#3A3A3A" />
        </radialGradient>
      </defs>

      {/* Outer Tire Tread Ring */}
      <circle cx="60" cy="60" r="54" fill="url(#tire-rubber)" stroke="#FFD000" strokeWidth="2" strokeDasharray="6 4" opacity="0.8" />
      <circle cx="60" cy="60" r="48" stroke="#333333" strokeWidth="4" fill="none" />

      {/* Inner Alloy Wheel Rim */}
      <circle cx="60" cy="60" r="38" fill="url(#rim-alloy)" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.4" />
      <circle cx="60" cy="60" r="30" fill="#0A0A0A" stroke="#FFD000" strokeWidth="1" />

      {/* 5-Spoke Sport Design */}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 60 60)`}>
          <rect x="57" y="24" width="6" height="24" rx="2" fill="url(#rim-alloy)" />
          <circle cx="60" cy="30" r="1.5" fill="#FFD000" />
        </g>
      ))}

      {/* Wheel Hub Center Nut */}
      <circle cx="60" cy="60" r="10" fill="#FFD000" stroke="#000000" strokeWidth="2" />
      <circle cx="60" cy="60" r="4" fill="#050505" />
    </svg>
  );
};
