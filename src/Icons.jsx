/* All custom SVG icons — no external icon library */

export const IconPhone = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07
      A19.5 19.5 0 013.09 9.82 19.79 19.79 0 01.18 1.18a2 2 0 012-2.18h3
      a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 6.91
      a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573
      2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

export const IconWhatsapp = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471
      -.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075
      -.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059
      -.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198
      -.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916
      -2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01
      a1.088 1.088 0 00-.79.372C7.37 8.002 6.75 8.57 6.75 9.98c0 1.41 1.025
      2.774 1.166 2.97.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489
      1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413
      .248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.103 1.508 5.832L.057
      23.87a.75.75 0 00.93.93l6.038-1.451A11.933 11.933 0 0012 24c6.627 0
      12-5.373 12-12S18.627 0 12 0zm0 21.75a9.715 9.715 0 01-4.964-1.36
      l-.357-.211-3.687.886.902-3.594-.233-.37A9.715 9.715 0 012.25 12
      C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12
      21.75z"/>
  </svg>
);

export const IconMapPin = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export const IconClock = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

export const IconLeaf = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 014 9c0-4.243 5-9 9-9s9 4.757 9 9-4.757 9-9 9z"/>
    <path d="M11 20v-4"/>
    <path d="M4 9l7 7"/>
  </svg>
);

export const IconShield = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

export const IconCheck = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export const IconScale = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="3" x2="12" y2="21"/>
    <path d="M3 9l9-6 9 6"/>
    <path d="M3 9a5 5 0 0010 0"/>
    <path d="M11 9a5 5 0 0010 0"/>
    <line x1="2" y1="21" x2="22" y2="21"/>
  </svg>
);

export const IconWheat = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V11"/>
    <path d="M12 11c1-2 4-3 6-2"/>
    <path d="M12 11c-1-2-4-3-6-2"/>
    <path d="M12 15c1-2 4-3 6-2"/>
    <path d="M12 15c-1-2-4-3-6-2"/>
    <path d="M12 19c1-2 4-3 6-2"/>
    <path d="M12 19c-1-2-4-3-6-2"/>
    <path d="M12 7c1-2 4-3 6-2"/>
    <path d="M12 7c-1-2-4-3-6-2"/>
    <line x1="12" y1="4" x2="12" y2="3"/>
  </svg>
);

export const IconChakki = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <circle cx="12" cy="12" r="3"/>
    <line x1="12" y1="3" x2="12" y2="9"/>
    <line x1="12" y1="15" x2="12" y2="21"/>
    <line x1="3" y1="12" x2="9" y2="12"/>
    <line x1="15" y1="12" x2="21" y2="12"/>
    <line x1="5.636" y1="5.636" x2="9.172" y2="9.172"/>
    <line x1="14.828" y1="14.828" x2="18.364" y2="18.364"/>
    <line x1="18.364" y1="5.636" x2="14.828" y2="9.172"/>
    <line x1="9.172" y1="14.828" x2="5.636" y2="18.364"/>
  </svg>
);

export const IconStar = ({ size = 14, color = "#F59E0B" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

export const IconMenu = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

export const IconX = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

export const IconArrow = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);
