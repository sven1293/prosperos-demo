// primitives.jsx — shared icons + small components

const ArrowRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square"/>
  </svg>
);

const ArrowUpRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square"/>
  </svg>
);

const Plus = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
  </svg>
);

const Caret = () => (
  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
    <path d="M1.5 3L4.5 6L7.5 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square"/>
  </svg>
);

const Check = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 8.5L6.5 12L13 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="round"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 1.5L15 3.5V8.5C15 12 12 15 9 16.5C6 15 3 12 3 8.5V3.5L9 1.5Z" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M6.5 9L8 10.5L11.5 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square"/>
  </svg>
);

const MapIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 16C12 13 14.5 10.5 14.5 7.5C14.5 4.5 12 2 9 2C6 2 3.5 4.5 3.5 7.5C3.5 10.5 6 13 9 16Z" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="9" cy="7.5" r="2" stroke="currentColor" strokeWidth="1.3"/>
  </svg>
);

const LayersIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 1.5L2 5L9 8.5L16 5L9 1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <path d="M2 9L9 12.5L16 9" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <path d="M2 13L9 16.5L16 13" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
  </svg>
);

const ChartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M2 16H16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square"/>
    <path d="M4 13V8M8 13V4M12 13V10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square"/>
  </svg>
);

const TeamIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="6" cy="6.5" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="12.5" cy="7.5" r="2" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M1.5 15.5C1.5 12.5 3.5 11 6 11C8.5 11 10.5 12.5 10.5 15.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square"/>
    <path d="M10.5 12.5C11 12 11.6 12 12.5 12C14.5 12 16 13 16 15.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square"/>
  </svg>
);

const Building = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="2.5" y="4" width="6" height="12" stroke="currentColor" strokeWidth="1.3"/>
    <rect x="8.5" y="7" width="7" height="9" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M4 7H7M4 9.5H7M4 12H7M10 9.5H14M10 12H14" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square"/>
  </svg>
);

const BankIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M2 7L9 2L16 7" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <path d="M2 7H16" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M4 7V14M7 7V14M11 7V14M14 7V14" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M2 14H16" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M2 16H16" stroke="currentColor" strokeWidth="1.3"/>
  </svg>
);

const Gov = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 1.5L15.5 5.5H2.5L9 1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <path d="M3.5 8V14M7 8V14M11 8V14M14.5 8V14" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M2 14H16M2 16.5H16" stroke="currentColor" strokeWidth="1.3"/>
  </svg>
);

const Hammer = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M4 12L8 8M3 16L6 13M11 4L14 7M9 6L12 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square"/>
    <path d="M9 6L12 9L15 6L12 3L9 6Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
  </svg>
);

const Shop = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M3 6.5L4 3H14L15 6.5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <path d="M3 6.5V15.5H15V6.5" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M3 6.5C3 7.6 3.9 8.5 5 8.5C6.1 8.5 7 7.6 7 6.5C7 7.6 7.9 8.5 9 8.5C10.1 8.5 11 7.6 11 6.5C11 7.6 11.9 8.5 13 8.5C14.1 8.5 15 7.6 15 6.5" stroke="currentColor" strokeWidth="1.3"/>
  </svg>
);

const IMG_MAP = {
  // Homepage
  "home-hero": "uploads/Bedrijfsenergielabels-2024-15.jpg",
  "home-fig-1": "uploads/Bedrijfsenergielabels-2024-28.jpg",
  "home-fig-2": "uploads/Bedrijfsenergielabels-2024-4.jpg",
  "home-fig-3": "uploads/Bedrijfsenergielabels-2024-27.jpg",
  "home-cta-specialist": "uploads/Bedrijfsenergielabels-2024-1.jpg",
  "home-case-1": "uploads/Bedrijfsenergielabels-2024-30.jpg",
  "home-case-2": "uploads/Bedrijfsenergielabels-2024-22.jpg",
  "home-case-3": "uploads/Bedrijfsenergielabels-2024-34.jpg",

  // Solution
  "sol-hero": "uploads/Bedrijfsenergielabels-2024-19.jpg",
  "sol-kwaliteit": "uploads/Bedrijfsenergielabels-2024-34.jpg",
  "sol-cta-specialist": "uploads/Bedrijfsenergielabels-2024-8.jpg",

  // Audience (Woningcorporaties)
  "aud-hero": "uploads/Bedrijfsenergielabels-2024-28.jpg",
  "aud-team": "uploads/Bedrijfsenergielabels-2024-22.jpg",
  "aud-quote-photo": "uploads/Bedrijfsenergielabels-2024-14.jpg",
  "aud-case-1": "uploads/Bedrijfsenergielabels-2024-30.jpg",
  "aud-case-2": "uploads/Bedrijfsenergielabels-2024-15.jpg",
  "aud-cta-specialist": "uploads/Bedrijfsenergielabels-2024-1.jpg",

  // Knowledge (EPBD IV)
  "know-cta-photo": "uploads/Bedrijfsenergielabels-2024-8.jpg",
  "know-author-photo": "uploads/Bedrijfsenergielabels-2024-9.jpg",

  // Case
  "case-hero": "uploads/Bedrijfsenergielabels-2024-28.jpg",
  "case-quote-photo": "uploads/Bedrijfsenergielabels-2024-14.jpg",
  "case-cta-specialist": "uploads/Bedrijfsenergielabels-2024-1.jpg",

  // Over Prosperos
  "over-team": "uploads/Bedrijfsenergielabels-2024-15.jpg",
  "over-quality": "uploads/Bedrijfsenergielabels-2024-33.jpg",
  "over-werkenbij": "uploads/Bedrijfsenergielabels-2024-19.jpg",

  // Contact specialists
  "contact-spec-1": "uploads/Bedrijfsenergielabels-2024-1.jpg",
  "contact-spec-2": "uploads/Bedrijfsenergielabels-2024-8.jpg",
  "contact-spec-3": "uploads/Bedrijfsenergielabels-2024-3.jpg",

  // Knowledge sidebar author + author block
  "know-sidebar-author": "uploads/Bedrijfsenergielabels-2024-8.jpg",
};

const Photo = ({ label, slot, src, shape = "rounded", radius = 12, dark = false, style = {}, className = "" }) => {
  const cornerMap = { rect: 0, rounded: radius, circle: "50%", pill: 9999 };
  const borderRadius = cornerMap[shape] ?? radius;
  const resolvedSrc = src || (slot && IMG_MAP[slot]);

  if (resolvedSrc) {
    return (
      <div
        className={className}
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius,
          background: "var(--bg-soft)",
          ...style,
        }}
      >
        <img
          src={resolvedSrc}
          alt={label || ""}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
    );
  }

  return (
    <div className={`photo ${dark ? "dark" : ""} ${className}`} style={{ borderRadius, ...style }}>
      {label && (
        <div className="ph-label">
          <span>{label}</span>
        </div>
      )}
    </div>
  );
};

// Pill/button-style logo placeholder for proof bars
const LogoPlaceholder = ({ name }) => (
  <div style={{
    padding: "10px 14px",
    border: "1px solid var(--line)",
    borderRadius: 6,
    background: "var(--bg-card)",
    fontFamily: "var(--mono)",
    fontSize: 11,
    color: "var(--ink-3)",
    letterSpacing: "0.04em",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
  }}>
    <svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="3.5" stroke="currentColor" strokeWidth="1" fill="none"/></svg>
    {name}
  </div>
);

const Btn = ({ kind = "primary", children, onClick, arrow = true }) => (
  <button className={`btn btn-${kind}`} onClick={onClick}>
    <span>{children}</span>
    {arrow && <span className="arr"><ArrowRight /></span>}
  </button>
);

const PillLink = ({ children, onClick }) => (
  <button className="pill" onClick={onClick} style={{ cursor: "pointer" }}>
    <span className="dot" style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
    {children}
  </button>
);

const Eyebrow = ({ children }) => (
  <div className="eyebrow"><span className="dot" />{children}</div>
);

Object.assign(window, {
  ArrowRight, ArrowUpRight, Plus, Caret, Check,
  ShieldIcon, MapIcon, LayersIcon, ChartIcon, TeamIcon,
  Building, BankIcon, Gov, Hammer, Shop,
  Photo, LogoPlaceholder, Btn, PillLink, Eyebrow,
});
