import React from 'react';

const Logo = ({ className = "", size = "default" }) => {
  // Size variants
  const sizes = {
    small: { width: 32, height: 32, fontSize: 'text-sm' },
    default: { width: 48, height: 48, fontSize: 'text-base' },
    large: { width: 64, height: 64, fontSize: 'text-xl' }
  };

  const logoSize = sizes[size] || sizes.default;

  return (
    <svg
      width={logoSize.width}
      height={logoSize.height}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main gear/cog - representing robotics */}
      <circle cx="50" cy="50" r="35" fill="#d97706" opacity="0.9"/>
      <circle cx="50" cy="50" r="20" fill="#111827"/>
      
      {/* Gear teeth */}
      <rect x="48" y="15" width="4" height="10" rx="2" fill="#111827"/>
      <rect x="48" y="75" width="4" height="10" rx="2" fill="#111827"/>
      <rect x="15" y="48" width="10" height="4" rx="2" fill="#111827"/>
      <rect x="75" y="48" width="10" height="4" rx="2" fill="#111827"/>
      
      {/* Diagonal gear teeth */}
      <rect x="28" y="28" width="4" height="8" rx="2" fill="#111827" transform="rotate(-45 30 32)"/>
      <rect x="68" y="28" width="4" height="8" rx="2" fill="#111827" transform="rotate(45 70 32)"/>
      <rect x="28" y="64" width="4" height="8" rx="2" fill="#111827" transform="rotate(45 30 68)"/>
      <rect x="68" y="64" width="4" height="8" rx="2" fill="#111827" transform="rotate(-45 70 68)"/>
      
      {/* Circuit board lines - representing IT/Tech */}
      <path d="M20 30 L35 30 L35 45" stroke="#d97706" strokeWidth="2" strokeLinecap="round"/>
      <path d="M65 20 L80 20" stroke="#d97706" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 70 L35 70 L35 55" stroke="#d97706" strokeWidth="2" strokeLinecap="round"/>
      <path d="M65 80 L80 80" stroke="#d97706" strokeWidth="2" strokeLinecap="round"/>
      
      {/* Connection nodes */}
      <circle cx="35" cy="30" r="2" fill="#fbbf24"/>
      <circle cx="35" cy="45" r="2" fill="#fbbf24"/>
      <circle cx="80" cy="20" r="2" fill="#fbbf24"/>
      <circle cx="35" cy="55" r="2" fill="#fbbf24"/>
      <circle cx="35" cy="70" r="2" fill="#fbbf24"/>
      <circle cx="80" cy="80" r="2" fill="#fbbf24"/>
      
      {/* Inner tech element - microchip/processor */}
      <rect x="42" y="42" width="16" height="16" rx="2" fill="#fbbf24" opacity="0.8"/>
      <line x1="42" y1="46" x2="58" y2="46" stroke="#111827" strokeWidth="1"/>
      <line x1="42" y1="50" x2="58" y2="50" stroke="#111827" strokeWidth="1"/>
      <line x1="42" y1="54" x2="58" y2="54" stroke="#111827" strokeWidth="1"/>
    </svg>
  );
};

export default Logo;

