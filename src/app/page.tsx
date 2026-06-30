"use client";

import { Check, X, Star, ArrowRight, Zap, Clock, Rocket, Users, Briefcase, BookOpen, Code, ClipboardCheck, Layers, MessageSquare, ShoppingCart, LayoutDashboard, PlayCircle, Bot, Package, Globe, Monitor, Server, Hammer } from "lucide-react";

/* ─── DESIGN TOKENS ─── */
const C = {
  neon: "#7CFF00",
  neonDim: "rgba(124,255,0,0.12)",
  neonBorder: "rgba(124,255,0,0.25)",
  bg: "#0B0B0B",
  bg2: "#0E0E0E",
  card: "#0e0e0e",
  cardHover: "#111111",
  border: "#1e1e1e",
  borderBright: "#282828",
  textPrimary: "#f0f0f0",
  textSub: "#9ca3af",
  textMuted: "#4b5563",
  red: "#ff4444",
  redDim: "rgba(255,68,68,0.12)",
  redBorder: "rgba(255,68,68,0.25)",
  gold: "#fbbf24",
};

/* ─── INLINE SVG TECH ICONS ─── */
const ICONS: Record<string, (s?: number) => React.ReactNode> = {
  "Next.js": (s = 38) => (
    <svg width={s} height={s} viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="64" fill="#000" />
      <path d="M106.3 112L49.2 38.4H38.4v51.2h8.6V47.3l52.8 68A64 64 0 00106.3 112z" fill="url(#n1)" />
      <path d="M81.8 38.4h8.5v51.2h-8.5z" fill="url(#n2)" />
      <defs>
        <linearGradient id="n1" x1="55" y1="55" x2="96" y2="105" gradientUnits="userSpaceOnUse"><stop stopColor="#fff" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient>
        <linearGradient id="n2" x1="86" y1="38" x2="86" y2="76" gradientUnits="userSpaceOnUse"><stop stopColor="#fff" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient>
      </defs>
    </svg>
  ),
  "React": (s = 38) => (
    <svg width={s} height={s} viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="11" fill="#61DAFB" />
      <ellipse cx="64" cy="64" rx="60" ry="22" fill="none" stroke="#61DAFB" strokeWidth="5" />
      <ellipse cx="64" cy="64" rx="60" ry="22" fill="none" stroke="#61DAFB" strokeWidth="5" transform="rotate(60 64 64)" />
      <ellipse cx="64" cy="64" rx="60" ry="22" fill="none" stroke="#61DAFB" strokeWidth="5" transform="rotate(120 64 64)" />
    </svg>
  ),
  "Tailwind": (s = 38) => (
    <svg width={s} height={s} viewBox="0 0 128 128">
      <path fill="#38bdf8" d="M64 25.6c-17 0-27.7 8.5-32 25.6 6.4-8.5 13.9-11.7 22.4-9.6 4.9 1.2 8.4 4.7 12.2 8.7C72.9 56.7 80.2 64 96 64c17 0 27.7-8.5 32-25.6-6.4 8.5-13.9 11.7-22.4 9.6-4.9-1.2-8.4-4.7-12.2-8.7C87 32.9 79.8 25.6 64 25.6zM32 64c-17 0-27.7 8.5-32 25.6 6.4-8.5 13.9-11.7 22.4-9.6 4.9 1.2 8.4 4.7 12.2 8.7C40.9 94.7 48.2 102.4 64 102.4c17 0 27.7-8.5 32-25.6-6.4 8.5-13.9 11.7-22.4 9.6-4.9-1.2-8.4-4.7-12.2-8.7C55 71.3 47.8 64 32 64z" />
    </svg>
  ),
  "Redux": (s = 38) => (
    <svg width={s} height={s} viewBox="0 0 128 128">
      <path fill="#764ABC" d="M85 90c-9 18-24 31-45 35a57 57 0 01-3-23 35 35 0 015 1c3.5 0 6.6-2.5 7.4-6 .8-4-1.7-8-5.7-8.7a7 7 0 00-6 1.5 39 39 0 01-1.6 6.6C29 95 17 89 8.5 80c-4.4-4.5-7-9.8-7.5-15C.4 52 8.7 42 22 38.8a44 44 0 0121.5-.7c10.3 2.3 18.9 7.9 25.2 16.3 7.5 10 11 21.2 10.3 33.3-.7 11.5-4.8 21-11.2 29.4C74.6 111 82 107 87.6 100c-5.1 7.1-11 10.2-20 10.2-14.4 0-22.5-9.2-22.5-24.4 0-15.6 8.6-25 23-25 9 0 17 5 21.3 12.2l13-7.5c-6.8-11.6-19.3-19.5-34.3-19.5-21.5 0-39 17.5-39 39s17.5 39 39 39c15 0 27.5-7.9 34.3-19.5L85 90z" />
    </svg>
  ),
  "Firebase": (s = 38) => (
    <svg width={s} height={s} viewBox="0 0 128 128">
      <path fill="#FFA000" d="M27 80.5l7.7-75.3a2 2 0 013.7-.5L46.6 22z" />
      <path fill="#FFCA28" d="M73 47.3l-8.5-16.3a2 2 0 00-3.5 0L27 80.5z" />
      <path fill="#FFCA28" d="M99 94L87.6 13a2 2 0 00-3.6-.6L73 30.8 64.5 14.8a2 2 0 00-3.5 0L27 80.5l33 19a6 6 0 005.6 0z" />
    </svg>
  ),
  "Git": (s = 38) => (
    <svg width={s} height={s} viewBox="0 0 128 128">
      <path fill="#F34F29" d="M124.7 58.4L69.6 3.3a8 8 0 00-11.5 0L46.7 14.7l14.5 14.5c3.4-1.1 7.2-.4 9.9 2.3 2.7 2.7 3.5 6.6 2.3 10l14 14c3.4-1.2 7.3-.4 10 2.3 3.8 3.8 3.8 9.9 0 13.7a9.7 9.7 0 01-13.7 0 9.7 9.7 0 01-2.1-10.5L68.6 47.9v34.4a9.7 9.7 0 012.5 1.8c3.8 3.8 3.8 9.9 0 13.7-3.8 3.8-9.9 3.8-13.7 0-3.8-3.8-3.8-9.9 0-13.7a9.6 9.6 0 013.2-2.1V47.3a9.6 9.6 0 01-3.2-2.1C54.6 42.3 54 38 55.3 34.5L41 20.3 3.3 58a8 8 0 000 11.5l55 55.1a8 8 0 0011.5 0l55-54.9a8 8 0 000-11.2z" />
    </svg>
  ),
  "Vercel": (s = 38) => (
    <svg width={s} height={s} viewBox="0 0 128 128"><path d="M64 8L122 120H6z" fill="#fff" /></svg>
  ),
  "Responsive": (s = 38) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#A6FF00" strokeWidth="1.5" strokeLinecap="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  "Python": (s = 38) => (
    <svg width={s} height={s} viewBox="0 0 128 128">
      <defs>
        <linearGradient id="pa" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#5A9FD4" /><stop offset="1" stopColor="#306998" /></linearGradient>
        <linearGradient id="pb" x1="1" y1="1" x2="0" y2="0"><stop stopColor="#FFD43B" /><stop offset="1" stopColor="#FFE873" /></linearGradient>
      </defs>
      <path fill="url(#pa)" d="M63.4 2c-4.2.2-8.3.7-11.9 1.5C40.6 5.8 38.6 10.6 38.6 19.5v11.7h25.7v3.9H25.3c-7.5 0-14 4.5-16 13-2.4 9.8-2.5 15.9 0 26.1C11.2 82.6 16.6 88.5 24 88.5h8.1V76.4c0-8.5 7.3-16 16-16h25.7c7.1 0 12.8-5.9 12.8-13.1V15.4c0-7-5.9-12.2-12.8-13.5A67 67 0 0063.4 2zM49.5 10a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8z" />
      <path fill="url(#pb)" d="M91.7 28.5v11.8c0 8.8-7.5 16.3-16 16.3H50c-7 0-12.8 6-12.8 13.1v24.5c0 7 6 11 12.8 13.1 8.1 2.4 15.9 2.9 25.7 0 6.5-1.9 12.8-5.7 12.8-13.1V82.5H62.8v-3.9h38.5c7.5 0 10.2-5.2 12.8-13s2.6-15.8 0-26.1c-1.8-7.4-5.4-13-12.8-13h-9.6zm-13.8 61a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8z" />
    </svg>
  ),
  "Django": (s = 38) => (
    <svg width={s} height={s} viewBox="0 0 128 128">
      <rect width="128" height="128" rx="6" fill="#0C4B33" />
      <path fill="#fff" d="M38.7 14h13.5v56.9c-7 1.3-12 1.8-17.6 1.8C19.5 72.7 12 65.2 12 49.6c0-15 8-24.6 22.5-24.6 1.6 0 2.8.1 4.2.4V14zm0 22.7c-1.2-.3-2.1-.5-3.3-.5-6.6 0-10.4 4.1-10.4 11.7 0 7.4 3.6 11.4 10.2 11.4 1.1 0 2.1-.1 3.5-.3V36.7zM66.4 25.3h13.5v31.5c0 10.7-.8 15.8-3.1 20.3-2.2 4.2-5 6.9-11 9.8L53.4 81c5.9-2.8 8.8-5.1 10.6-8.9 2-3.9 2.5-8.4 2.5-19.9V25.3zM66.4 14H79.9v14.7H66.4V14zM103.2 24.8c9 0 14.8 2.7 19.4 9.2l-9 8.4c-2.7-4-5.5-5.6-9.5-5.6-5.3 0-8.6 4.2-8.6 11.2 0 7.4 3.2 11.5 8.9 11.5 3.7 0 6.4-1.5 9.2-5.5l9.1 8c-5.1 7.1-11.1 10.2-19.9 10.2-14.4 0-22.5-9.2-22.5-24.4 0-15.6 8.6-25 23-25z" />
    </svg>
  ),
  "FastAPI": (s = 38) => (
    <svg width={s} height={s} viewBox="0 0 128 128"><circle cx="64" cy="64" r="64" fill="#009688" /><path fill="#fff" d="M70 20L40 72h26L56 108l46-64H76z" /></svg>
  ),
  "PostgreSQL": (s = 38) => (
    <svg width={s} height={s} viewBox="0 0 128 128">
      <path fill="#336791" d="M93.8 92c.8-6.5.6-7.5 5.4-6.4l1.2.1c3.7.2 8.6-.6 11.5-1.9 6.2-2.9 9.9-7.7 3.8-6.4-13.9 2.9-14.9-1.9-14.9-1.9C115.6 53.7 121.7 26 116.4 19.3 101.9.8 76.8 9.5 76.4 9.8l-.1.1c-2.8-.6-5.8-.9-9.3-.9-6.3 0-11.1 1.6-14.7 4.4 0 0-44.7-18.4-42.6 23.2.4 8.8 12.6 66.9 27.2 49.4 5.3-6.4 10.4-11.8 10.4-11.8 2.6 1.7 5.6 2.6 8.8 2.2l.3-.2c-.1.8 0 1.5.1 2.4-4.9 5.4-3.4 6.4-13.2 8.4-9.8 2-4 5.6-.3 6.6 4.6 1.1 15.1 2.8 22.3-7.2l-.2.9c1.6 1.2 2.6 8.1 2.5 14.3-.2 6.2-.4 10.5.5 13.8.9 3.3 1.7 10.8 9.1 8.6 6.1-1.9 10.8-6.5 11.3-14.3.4-5.6.5-9.5.6-13.1.1-4.4-.3-5.6.9-9.5l.5 1.3c.7 4.6 1 7.3 6.4 8.5 3.3.7 6.8.6 9.2-.2z" />
      <path fill="#fff" d="M74 97c-.4 5.4 0 10.9.6 12.9.7 2 1.8 6.2 8 4.5 5.2-1.5 7.4-4.8 8.1-10.7.5-4.2 1.3-14.1 1.6-16.7l-3.9-1.1c-3.4-1-5.7 5.4-6 6.5-1.2 3.7-2.2 4.6-4 4.6-1.3 0-3.4-.5-4.4.2z" opacity=".3" />
    </svg>
  ),
  "Docker": (s = 38) => (
    <svg width={s} height={s} viewBox="0 0 128 128">
      <path fill="#2496ED" d="M125 52c-4.3-2.5-10-2.8-14.8-1.4-.6-5.2-4-9.7-8-12.9l-1.6-1.3-1.4 1.6c-2.7 3.1-3.5 8.3-3.1 12.3.3 2.9 1.2 5.9 3 8.3-1.4.8-2.9 1.3-4.3 1.8-2.8 1-5.9 1.5-8.9 1.5H.4l-.2 1.5C-.3 69.6 1.2 78.2 5.6 85.2c5 8 12.5 12.2 21.8 12.2 20.2 0 36-8.5 48.4-27.4C82 70 87.2 63 96 63c.2 0 4.1.1 7.5-2.2 2.7-1.8 5.1-5.1 6.3-8.7L125 52z" />
      <path fill="#2496ED" d="M18.8 42.6h10.8v10H18.8zM32 42.6H43v10H32zM45.7 42.6h10.8v10H45.7zM59 42.6h10.8v10H59zM32 30H43v10H32zM45.7 30h10.8v10H45.7zM59 30h10.8v10H59zM72.6 30h10.8v10H72.6zM72.6 42.6h10.8v10H72.6z" />
    </svg>
  ),
  "AWS": (s = 38) => (
    <svg width={s} height={s} viewBox="0 0 128 128">
      <path fill="#FF9900" d="M41 54L28 60l36 16 36-16-13-6L64 65.5z" />
      <path fill="#F7A80D" d="M28 60v21l36 16V76z" />
      <path fill="#F7A80D" d="M100 60v21L64 97V76z" />
      <path fill="#FF9900" d="M56 31L28 44v16l36-16 36 16V44z" />
    </svg>
  ),
  "Redis": (s = 38) => (
    <svg width={s} height={s} viewBox="0 0 128 128">
      <path fill="#D82C20" d="M8 82.5c0 2 2.8 4 8 5.7L64 103l48-14.8c5.3-1.7 8-3.7 8-5.7V70.5L64 85.3 8 70.5v12z" />
      <path fill="#A41E11" d="M8 70.5L64 85.3l56-14.8V58.5L64 73.3 8 58.5v12z" />
      <path fill="#D82C20" d="M8 58.5L64 73.3l56-14.8V46.5L64 61.3 8 46.5v12z" />
      <path fill="#A41E11" d="M8 46.5L64 61.3l56-14.8V34.5L64 49.3 8 34.5v12z" />
      <ellipse cx="64" cy="26" rx="56" ry="8" fill="#FF4438" />
      <path fill="#D82C20" d="M8 34.5L64 49.3l56-14.8c-13.7-5-33.7-8-56-8S21.7 29.5 8 34.5z" />
    </svg>
  ),
  "Celery": (s = 38) => (
    <svg width={s} height={s} viewBox="0 0 128 128"><circle cx="64" cy="64" r="60" fill="#37814a" /><text x="64" y="84" textAnchor="middle" fill="white" fontSize="56" fontWeight="900" fontFamily="system-ui">C</text></svg>
  ),
  "C": (s = 38) => (
    <svg width={s} height={s} viewBox="0 0 128 128">
      <path fill="#659AD2" d="M115 30.7L67 2.9A6 6 0 0064 2.2a6 6 0 00-3 .7L13 30.7A6 6 0 0010 36v56c0 1.1.2 2.4 1 3.5L118 33.5a6 6 0 00-3-2.8z" />
      <path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9A6 6 0 0064 125.8a6 6 0 003-.7l48-27.9A6 6 0 00118 91.7V36c0-.9-.1-1.9-.6-2.8L10.7 95.3z" />
      <path fill="#fff" d="M85.3 76.3C81 83.6 73 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9 0 17 5 21.3 12.2l13-7.5c-6.8-11.6-19.3-19.5-34.3-19.5-21.5 0-39 17.5-39 39s17.5 39 39 39c15 0 27.5-7.9 34.3-19.5l-13-7.4z" />
    </svg>
  ),
  "Bootstrap": (s = 38) => (
    <svg width={s} height={s} viewBox="0 0 128 128">
      <rect width="128" height="128" rx="16" fill="#7952b3" />
      <path fill="#fff" d="M48.4 38.2h24.8c5.9 0 10.4 1.5 13.3 4.4 2.9 2.9 4.4 6.5 4.4 10.7 0 3.3-.9 6.1-2.7 8.5-1.8 2.4-4.3 4-7.3 4.9v.2c3.8.7 6.8 2.5 8.8 5.4 2.1 2.9 3.1 6.3 3.1 10.3 0 5-1.7 9-5.2 12C84 97.5 79.3 99 73.3 99H48.4V38.2zm13.2 24.6h9.3c3 0 5.3-.7 6.9-2.1 1.6-1.4 2.4-3.4 2.4-6.1 0-2.5-.9-4.4-2.6-5.6-1.7-1.3-4.1-1.9-7.3-1.9h-8.7v15.7zm0 27.1h10.9c3.3 0 5.8-.8 7.5-2.4 1.7-1.6 2.5-3.8 2.5-6.6 0-2.8-.9-5-2.8-6.5-1.9-1.5-4.5-2.3-7.9-2.3H61.6v17.8z" />
    </svg>
  ),
  "S3": (s = 38) => (
    <svg width={s} height={s} viewBox="0 0 128 128">
      <path fill="#E25444" d="M64 12L24 34v60l40 22 40-22V34z" />
      <path fill="#7B1D13" d="M104 34L64 12v82l40-22V34z" />
      <text x="64" y="78" textAnchor="middle" fill="white" fontSize="28" fontWeight="900" fontFamily="system-ui">S3</text>
    </svg>
  ),
  "EC2": (s = 38) => (
    <svg width={s} height={s} viewBox="0 0 128 128">
      <path fill="#F7A80D" d="M64 12L18 36v56l46 24 46-24V36z" />
      <path fill="#E8900C" d="M110 36L64 12v80l46-24V36z" />
      <text x="64" y="76" textAnchor="middle" fill="white" fontSize="24" fontWeight="900" fontFamily="system-ui">EC2</text>
    </svg>
  ),
};

/* ─── AI TOOLS DATA with inline SVG icons ─── */
type AiTool = { name: string; color: string; bg: string; icon: React.ReactNode };

function AiIcon({ children, bg, color }: { children: React.ReactNode; bg: string; color: string }) {
  return (
    <div style={{ width: 56, height: 56, borderRadius: 16, background: bg, border: `1.5px solid ${color}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "transform 0.2s" }}>
      {children}
    </div>
  );
}

const AI_TOOLS: AiTool[] = [
  {
    name: "ChatGPT",
    color: "#10A37F", bg: "#0a2e25",
    icon: <svg width={28} height={28} viewBox="0 0 24 24" fill="none"><path d="M22.28 9.79a5.8 5.8 0 00-.5-4.77 5.87 5.87 0 00-6.3-2.82A5.86 5.86 0 0011 .55a5.87 5.87 0 00-5.6 4.06 5.86 5.86 0 00-3.92 2.84 5.87 5.87 0 00.72 6.87 5.8 5.8 0 00.5 4.77 5.87 5.87 0 006.3 2.82A5.86 5.86 0 0013 21.45a5.87 5.87 0 005.6-4.07 5.86 5.86 0 003.92-2.84 5.87 5.87 0 00-.72-6.87l-.52.12zM13 20.07a4.35 4.35 0 01-2.79-1.01l.14-.08 4.63-2.67a.76.76 0 00.38-.66v-6.52l1.96 1.13a.07.07 0 01.04.05v5.4A4.38 4.38 0 0113 20.07zm-9.36-4.01a4.35 4.35 0 01-.52-2.93l.14.08 4.63 2.67a.77.77 0 00.77 0l5.65-3.26v2.26a.07.07 0 01-.03.06L9.7 17.6a4.38 4.38 0 01-6.06-1.54zm-1.22-9.56A4.35 4.35 0 014.8 4.87v5.47a.77.77 0 00.38.66l5.65 3.26-1.96 1.13a.07.07 0 01-.07 0l-4.63-2.68a4.38 4.38 0 01-1.75-5.21zm16.09 3.75l-5.65-3.26 1.96-1.13a.07.07 0 01.07 0l4.63 2.67a4.37 4.37 0 01-.68 7.88V10.9a.77.77 0 00-.38-.66l.05.01zm1.95-2.97l-.14-.08-4.63-2.67a.77.77 0 00-.77 0L9.27 8.79V6.53a.07.07 0 01.03-.06l4.63-2.67a4.37 4.37 0 016.53 4.52v-.04zm-12.26 4.03l-1.96-1.13a.07.07 0 01-.04-.05v-5.4a4.37 4.37 0 017.16-3.35l-.14.08-4.63 2.67a.76.76 0 00-.38.66l-.01 6.52zm1.07-2.29l2.52-1.45 2.52 1.45v2.9l-2.52 1.45-2.52-1.45v-2.9z" fill="#10A37F" /></svg>
  },
  {
    name: "Claude",
    color: "#D4A574", bg: "#2e1f0a",
    icon: <svg width={28} height={28} viewBox="0 0 24 24" fill="none"><path d="M4.51 15.64L8.25 6.39a.5.5 0 01.93 0l.94 2.41 1.85-4.73a.5.5 0 01.93 0l3.6 9.56H14.1l-2.2-6.02-1.78 4.73.88 2.3h-1.4l-1.18-3.13-2.02 3.13H4.51zm10.5 0l1.72-4.73-1.34-3.6a.5.5 0 01.93-.35l4.2 11.2h-1.4l-.82-2.52H15z" fill="#D4A574" /></svg>
  },
  {
    name: "Claude Code",
    color: "#c8825a", bg: "#2e1505",
    icon: <svg width={28} height={28} viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#c8825a" strokeWidth="1.8" /><path d="M7 9l3 3-3 3M13 15h4" stroke="#c8825a" strokeWidth="1.8" strokeLinecap="round" /></svg>
  },
  {
    name: "Gemini",
    color: "#4285F4", bg: "#0a1b3d",
    icon: <svg width={28} height={28} viewBox="0 0 24 24" fill="none"><path d="M12 2C6.5 8 4 10 4 12s2.5 4 8 10c5.5-6 8-8 8-10S17.5 8 12 2z" fill="url(#ggemini)" /><defs><linearGradient id="ggemini" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse"><stop stopColor="#4285F4" /><stop offset="0.5" stopColor="#7B68EE" /><stop offset="1" stopColor="#4285F4" /></linearGradient></defs></svg>
  },
  {
    name: "GitHub Copilot",
    color: "#6CC644", bg: "#0d2209",
    icon: <svg width={28} height={28} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="11" r="5" stroke="#6CC644" strokeWidth="1.8" /><path d="M9 11a3 3 0 016 0M7.5 16c0 2.5 9 2.5 9 0" stroke="#6CC644" strokeWidth="1.8" strokeLinecap="round" /></svg>
  },
  {
    name: "Vercel",
    color: "#e5e7eb", bg: "#1a1a1a",
    icon: <svg width={28} height={28} viewBox="0 0 24 24" fill="#e5e7eb"><path d="M12 2L2 19.8h20L12 2z" /></svg>
  },
  {
    name: "GitHub",
    color: "#e5e7eb", bg: "#161b22",
    icon: <svg width={28} height={28} viewBox="0 0 24 24" fill="#e5e7eb"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
  },
  {
    name: "Bolt",
    color: "#8B5CF6", bg: "#1a0a2e",
    icon: <svg width={28} height={28} viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill="#8B5CF6" /></svg>
  },
  {
    name: "Lovable",
    color: "#FF4081", bg: "#2e0a16",
    icon: <svg width={28} height={28} viewBox="0 0 24 24" fill="none"><path d="M12 21C12 21 4 15 4 9a4 4 0 018-1.2A4 4 0 0120 9c0 6-8 12-8 12z" fill="#FF4081" /></svg>
  },
  {
    name: "Zapier",
    color: "#FF4A00", bg: "#2e0f00",
    icon: <svg width={28} height={28} viewBox="0 0 24 24" fill="none"><path d="M13.37 10.63L21 3H3l7.63 7.63A5.38 5.38 0 0113.37 10.63z" fill="#FF4A00" /><path d="M10.63 13.37L3 21h18l-7.63-7.63A5.38 5.38 0 0110.63 13.37z" fill="#FF4A00" /><path d="M10.63 10.63L3 3v18l7.63-7.63A5.38 5.38 0 0110.63 10.63z" fill="#FF4A00" opacity=".5" /><path d="M13.37 13.37L21 21V3l-7.63 7.63A5.38 5.38 0 0113.37 13.37z" fill="#FF4A00" opacity=".5" /></svg>
  },
  {
    name: "Make",
    color: "#6D5CE7", bg: "#12082e",
    icon: <svg width={28} height={28} viewBox="0 0 24 24" fill="none"><circle cx="5" cy="12" r="2.5" fill="#6D5CE7" /><circle cx="12" cy="12" r="2.5" fill="#6D5CE7" /><circle cx="19" cy="12" r="2.5" fill="#6D5CE7" /><path d="M7.5 12h2M14.5 12h2" stroke="#6D5CE7" strokeWidth="1.5" /></svg>
  },
  {
    name: "n8n",
    color: "#EA4B71", bg: "#2e0514",
    icon: <svg width={28} height={28} viewBox="0 0 24 24" fill="none"><rect x="2" y="8" width="5" height="8" rx="2" fill="#EA4B71" /><rect x="17" y="8" width="5" height="8" rx="2" fill="#EA4B71" /><circle cx="12" cy="12" r="3" fill="#EA4B71" /><path d="M7 12h2M15 12h2" stroke="#EA4B71" strokeWidth="1.5" /></svg>
  },
  {
    name: "DALL·E",
    color: "#10A37F", bg: "#0a2e25",
    icon: <svg width={28} height={28} viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#10A37F" strokeWidth="1.5" /><circle cx="8.5" cy="8.5" r="2" fill="#10A37F" /><path d="M3 15l5-5 4 4 3-3 6 6" stroke="#10A37F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  },
  {
    name: "Cursor",
    color: "#7CFF00", bg: "#0e2200",
    icon: <svg width={28} height={28} viewBox="0 0 24 24" fill="none"><path d="M5 3l14 9-7 1-4 7L5 3z" fill="#7CFF00" /></svg>
  },
  {
    name: "Windsurf",
    color: "#38BDF8", bg: "#061827",
    icon: <svg width={28} height={28} viewBox="0 0 24 24" fill="none"><path d="M3 17C7 17 11 7 21 7" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" /><path d="M3 12C7 12 11 19 21 19" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" /></svg>
  },
  {
    name: "Midjourney",
    color: "#ffffff", bg: "#1a1a1a",
    icon: <svg width={28} height={28} viewBox="0 0 24 24" fill="none"><path d="M3 19c2-5 4-9 9-14 5 5 7 9 9 14H3z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" /></svg>
  },
];

/* ─── DATA ─── */
const frontendTechs = ["Next.js", "React", "Tailwind", "Redux", "Firebase", "Git", "Vercel", "Responsive"];
const backendTechs = ["Python", "Django", "FastAPI", "PostgreSQL", "Docker", "AWS", "Redis", "Celery", "C", "Bootstrap", "S3", "EC2"];
const frontendOutcomes = ["Build Production UI", "Authentication Flows", "Firestore & DB Design", "File Storage Handling", "Continuous Deployment", "Clean Folder Structure", "Reusable Components & HOC", "Advanced Git Workflow"];
const backendOutcomes = ["Scalable REST APIs", "JWT Authentication", "Complex CRUD & ORM", "S3 Image Uploads", "Docker Containerization", "Redis Caching Strategy", "Async Tasks with Celery", "AWS EC2 Deployment"];
const projects = [
  { icon: BookOpen, title: "LMS Platform" }, { icon: MessageSquare, title: "Real-Time Chat" },
  { icon: ShoppingCart, title: "Ecommerce API" }, { icon: LayoutDashboard, title: "Admin Dashboard" },
  { icon: PlayCircle, title: "Video Platform" }, { icon: Bot, title: "AI Chatbot" },
  { icon: Package, title: "Inventory System" }, { icon: Globe, title: "Company Website" },
];
const routine = [
  { n: 1, icon: BookOpen, title: "Learning", desc: "Concept breakdown & Architecture" },
  { n: 2, icon: Code, title: "Coding", desc: "Guided live implementation" },
  { n: 3, icon: ClipboardCheck, title: "Assignment", desc: "Independent practice task" },
  { n: 4, icon: Layers, title: "Project", desc: "Integrating into the main build" },
];
const workflowSteps = ["Learn", "Practice", "Projects", "Code Review", "Debug", "Deploy", "Interview"];
const expectations = ["Spend 3–4 hours daily", "Complete assignments", "Push code to GitHub", "Deploy every project", "Ask questions & debug", "Practice consistently"];
const notIncluded = ["Recorded Course Dump", "Spoon Feeding Concepts", "Watching Videos Only", "Copy-Paste Coding"];
const whatYouGet = ["Live Mentorship", "Premium Notes & Docs", "Full Source Code", "Portfolio Projects", "GitHub Code Reviews", "Interview Guidance", "Deployment Support"];

/* ─── SMALL COMPONENTS ─── */
function CheckItem({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "8px 0" }}>
      <span style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(124,255,0,0.12)", border: "1px solid rgba(124,255,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Check size={14} color={C.neon} strokeWidth={3} />
      </span>
      <span style={{ color: "#e5e7eb", fontSize: 17, lineHeight: 1.4, fontWeight: 500 }}>{text}</span>
    </div>
  );
}

function WhoCanJoinCheckItem({ text, checked }: { text: string; checked: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "8px 0" }}>
      {checked ? (
        <span style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(124,255,0,0.15)", border: "1px solid rgba(124,255,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Check size={12} color="#7CFF00" strokeWidth={4} />
        </span>
      ) : (
        <span style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(255,68,68,0.15)", border: "1px solid rgba(255,68,68,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <X size={12} color="#ff4444" strokeWidth={4} />
        </span>
      )}
      <span style={{ color: checked ? "#d1d5db" : "#ff4444", fontSize: 16, fontWeight: 600 }}>{text}</span>
    </div>
  );
}

function XItem({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "8px 0" }}>
      <span style={{ width: 24, height: 24, borderRadius: "50%", background: C.redDim, border: "1px solid rgba(255,68,68,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <X size={14} color={C.red} strokeWidth={3} />
      </span>
      <span style={{ color: "#d1d5db", fontSize: 17, lineHeight: 1.4, fontWeight: 500 }}>{text}</span>
    </div>
  );
}
function StarItem({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "8px 0" }}>
      <Star size={18} color={C.gold} fill={C.gold} style={{ flexShrink: 0 }} />
      <span style={{ color: "#d1d5db", fontSize: 17, lineHeight: 1.4, fontWeight: 500 }}>{text}</span>
    </div>
  );
}

function SectionTag({ icon: Icon, label }: { icon: React.ElementType, label: string }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "5px 14px", borderRadius: 100, background: "rgba(124,255,0,0.07)", border: "1px solid rgba(124,255,0,0.18)", color: C.neon, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
      <Icon size={12} />{label}
    </div>
  );
}

function TechGrid({ names }: { names: string[] }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {names.map(n => (
        <div key={n} className="flex flex-col items-center gap-2 group cursor-pointer">
          <div
            className="w-[76px] h-[76px] rounded-xl bg-[#141414] border border-[#1e1e1e] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-[#7CFF00] group-hover:shadow-[0_0_15px_rgba(124,255,0,0.25)] group-hover:scale-105"
          >
            {ICONS[n]?.(40) ?? <span className="text-[#7CFF00] text-xs font-bold">{n.slice(0, 2)}</span>}
          </div>
          <span className="text-xs text-[#6b7280] text-center line-clamp-1 group-hover:text-white transition-colors duration-200">{n}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── CARD STYLES ─── */
const cardStyle: React.CSSProperties = {
  background: C.card,
  border: `1px solid ${C.border}`,
  borderRadius: 16,
  padding: 28,
};
const cardNeonStyle: React.CSSProperties = {
  background: C.card,
  border: `1px solid ${C.neonBorder}`,
  borderRadius: 16,
  padding: 28,
  boxShadow: "0 0 30px rgba(124,255,0,0.05), inset 0 0 20px rgba(124,255,0,0.02)",
};
const cardRedStyle: React.CSSProperties = {
  background: C.card,
  border: `1px solid ${C.redBorder}`,
  borderRadius: 16,
  padding: 28,
  boxShadow: "0 0 20px rgba(255,68,68,0.04)",
};

/* ─── MAIN PAGE ─── */
export default function Home() {
  return (
    <main style={{ width: "100%", minHeight: "100vh", background: C.bg }}>

      {/* ══════════ HERO ══════════ */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 24px", position: "relative", overflow: "hidden", textAlign: "center" }}>
        {/* Grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(124,255,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(124,255,0,0.04) 1px,transparent 1px)", backgroundSize: "64px 64px", WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 50%,black 40%,transparent 100%)" }} />
        {/* Orb */}
        <div style={{ position: "absolute", width: 700, height: 700, top: -200, left: "50%", transform: "translateX(-50%)", borderRadius: "50%", background: "radial-gradient(circle,rgba(124,255,0,0.06),transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 960, width: "100%" }}>
          {/* Badge */}
          <div className="fade-up" style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 20px", borderRadius: 100, background: "rgba(124,255,0,0.08)", border: "1px solid rgba(124,255,0,0.25)", color: C.neon, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em" }}>
              🚀 30 DAYS INTENSIVE PROGRAM &nbsp;|&nbsp; 15D Frontend • 15D Backend
            </span>
          </div>

          {/* Heading — 3 stacked lines with larger sizes */}
          <h1 className="fade-up-1 text-[54px] sm:text-[70px] md:text-[86px] lg:text-[102px] xl:text-[114px] font-extrabold tracking-tighter" style={{ lineHeight: "1.05", letterSpacing: "-2.4px", color: "#fff", marginBottom: 28 }}>
            Full Stack + AI
            <br />
            <span className="neon-text font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-[#a1ff4d]">
              Engineering Bootcamp
            </span>
          </h1>

          <p className="fade-up-2 text-xl md:text-2xl lg:text-[24px]" style={{ color: C.textSub, maxWidth: 680, margin: "0 auto 20px", lineHeight: 1.5 }}>
            Become a production-ready software engineer by building real-world applications.
          </p>

          <p className="fade-up-2 text-lg md:text-xl lg:text-[22px]" style={{ fontWeight: 800, marginBottom: 44, letterSpacing: "0.04em" }}>
            <span style={{ color: "#fff" }}>NO SPOON-FEEDING. </span>
            <span style={{ color: C.neon }}>ONLY EXECUTION.</span>
          </p>

          <div className="fade-up-3 w-full px-4 sm:px-0">
            <a href="#curriculum" className="w-full sm:w-auto justify-center inline-flex items-center text-lg md:text-xl" style={{ gap: 10, padding: "16px 36px", background: "#7CFF00", color: "#000", fontWeight: 800, borderRadius: 12, textDecoration: "none", boxShadow: "0 0 30px rgba(124,255,0,0.3)", transition: "all 0.2s ease" }}>
              Apply Now <ArrowRight size={20} strokeWidth={3} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="bob" style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)" }}>
          <div style={{ width: 24, height: 38, border: "2px solid #2a2a2a", borderRadius: 12, display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 6 }}>
            <div style={{ width: 4, height: 8, background: C.neon, borderRadius: 4 }} />
          </div>
        </div>
      </section>

      {/* ══════════ WHO CAN JOIN ══════════ */}
      <section style={{ padding: "96px 24px", background: "#080808" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <SectionTag icon={Users} label="Who Can Join" />
            <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#fff", marginBottom: 10 }}>Who Can Join?</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Prerequisites card - matching pic1 exactly */}
            <div className="bg-[#0e0e0e] border border-[#1e1e1e] rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between" style={{ borderLeft: "6px solid #7CFF00", minHeight: "360px" }}>
              {/* Question mark watermark */}
              <div style={{ position: "absolute", right: -10, bottom: -20, fontSize: 140, fontWeight: 900, color: "rgba(255,255,255,0.02)", fontFamily: "sans-serif", pointerEvents: "none" }}>?</div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                  <Users size={22} color="#7CFF00" />
                  <h3 style={{ color: "#fff", fontWeight: 800, fontSize: 24 }}>Who Can Join?</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <WhoCanJoinCheckItem text="HTML" checked={true} />
                  <WhoCanJoinCheckItem text="CSS" checked={true} />
                  <WhoCanJoinCheckItem text="JavaScript Basics" checked={true} />
                  <WhoCanJoinCheckItem text="Passion to Build" checked={true} />
                </div>
              </div>

              <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid #1e1e1e" }}>
                <WhoCanJoinCheckItem text="Not for absolute beginners" checked={false} />
              </div>
            </div>

            {/* Feature cards - matching pic1 exactly */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Clock, title: "Daily 3-4 Hours Practice", desc: "Intensity is the shortcut. Commit the time, build muscle memory, and code every single day." },
                { icon: Hammer, title: "Build Real Products", desc: "No to-do apps. Build complete, production-ready systems that solve actual business problems." },
                { icon: Users, title: "1:1 Mentorship", desc: "Get unblocked instantly. Direct access to senior engineers to review your code and architecture." },
                { icon: Rocket, title: "Industry Workflow", desc: "Learn Git, PR reviews, CI/CD, and agile execution. Work exactly like a team in a top tech company." },
              ].map(f => (
                <div key={f.title} className="bg-[#0e0e0e] border border-[#1e1e1e] hover:border-[#7CFF00] hover:shadow-[0_0_30px_rgba(124,255,0,0.08)] transition-all duration-300 rounded-2xl p-7 flex flex-col gap-4">
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(124,255,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <f.icon size={20} color="#7CFF00" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 style={{ color: "#fff", fontWeight: 800, fontSize: 18, marginBottom: 8 }}>{f.title}</h4>
                    <p style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.6 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CURRICULUM ══════════ */}
      <section id="curriculum" style={{ padding: "96px 24px", background: C.bg }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <SectionTag icon={Zap} label="The Curriculum" />
            <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#fff", marginBottom: 10 }}>The Curriculum</h2>
            <p style={{ color: C.textSub, fontSize: 15 }}>30 days of relentless execution.</p>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative">
            {/* Continuous center line — desktop only */}
            <div className="hidden lg:block" style={{ position: "absolute", left: "50%", top: 20, bottom: 20, width: 2, background: "linear-gradient(to bottom, transparent, #7CFF00 10%, #7CFF00 90%, transparent)", transform: "translateX(-50%)", zIndex: 0 }} />

            {/* Phase 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative mb-20">
              {/* Node ring */}
              <div className="hidden lg:flex" style={{ position: "absolute", left: "50%", top: "50%", width: 22, height: 22, borderRadius: "50%", background: "#0B0B0B", border: "4px solid #7CFF00", boxShadow: "0 0 15px rgba(124,255,0,0.8)", transform: "translate(-50%, -50%)", zIndex: 2 }} />

              <div className="bg-[#0e0e0e] border border-[#1e1e1e] hover:border-[#7CFF00] hover:shadow-[0_0_35px_rgba(124,255,0,0.12)] transition-all duration-300 rounded-2xl p-8">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider mb-6 bg-[rgba(124,255,0,0.08)] border border-[rgba(124,255,0,0.2)] text-[#7CFF00]">PHASE 1 • 15 DAYS</span>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <Monitor size={32} color={C.neon} />
                  <h3 style={{ color: "#fff", fontWeight: 800, fontSize: 26 }}>Frontend Engineering</h3>
                </div>
                <p style={{ color: C.textMuted, fontSize: 15, marginBottom: 28 }}>Master the React ecosystem & ship to production.</p>
                <TechGrid names={frontendTechs} />
              </div>

              <div className="p-8 flex flex-col justify-center">
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <Zap size={22} color={C.neon} />
                  <h3 style={{ color: C.neon, fontWeight: 800, fontSize: 18, letterSpacing: "0.1em", textTransform: "uppercase" }}>Learning Outcomes</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {frontendOutcomes.map(o => <CheckItem key={o} text={o} />)}
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">
              {/* Node ring */}
              <div className="hidden lg:flex" style={{ position: "absolute", left: "50%", top: "50%", width: 22, height: 22, borderRadius: "50%", background: "#0B0B0B", border: "4px solid #7CFF00", boxShadow: "0 0 15px rgba(124,255,0,0.8)", transform: "translate(-50%, -50%)", zIndex: 2 }} />

              <div className="p-8 flex flex-col justify-center order-2 lg:order-1">
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <Zap size={22} color={C.neon} />
                  <h3 style={{ color: C.neon, fontWeight: 800, fontSize: 18, letterSpacing: "0.1em", textTransform: "uppercase" }}>Learning Outcomes</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {backendOutcomes.map(o => <CheckItem key={o} text={o} />)}
                </div>
              </div>

              <div className="bg-[#0e0e0e] border border-[#1e1e1e] hover:border-[#7CFF00] hover:shadow-[0_0_35px_rgba(124,255,0,0.12)] transition-all duration-300 rounded-2xl p-8 order-1 lg:order-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider mb-6 bg-[rgba(124,255,0,0.08)] border border-[rgba(124,255,0,0.2)] text-[#7CFF00]">PHASE 2 • 15 DAYS</span>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <Server size={32} color={C.neon} />
                  <h3 style={{ color: "#fff", fontWeight: 800, fontSize: 26 }}>Backend Engineering</h3>
                </div>
                <p style={{ color: C.textMuted, fontSize: 15, marginBottom: 28 }}>Scalable APIs, databases & cloud deployment.</p>
                <TechGrid names={backendTechs} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PROJECTS + ROUTINE ══════════ */}
      <section style={{ padding: "96px 24px", background: "#080808" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))", gap: 56 }}>
          {/* Projects */}
          <div>
            <SectionTag icon={Rocket} label="Projects" />
            <h2 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 900, color: "#fff", marginBottom: 6, marginTop: 4 }}>Projects You&apos;ll Build</h2>
            <p style={{ color: C.textMuted, fontSize: 14, marginBottom: 24 }}>Real-world apps for your portfolio.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {projects.map(p => (
                <div key={p.title} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: C.card, border: `1px solid ${C.border}`, borderRadius: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(124,255,0,0.08)", border: "1px solid rgba(124,255,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <p.icon size={16} color={C.neon} />
                  </div>
                  <span style={{ color: "#e5e7eb", fontWeight: 600, fontSize: 13 }}>{p.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Routine */}
          <div>
            <SectionTag icon={Clock} label="Daily Routine" />
            <h2 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 900, color: "#fff", marginBottom: 6, marginTop: 4 }}>Daily Routine</h2>
            <p style={{ color: C.textMuted, fontSize: 14, marginBottom: 24 }}>Your structured path every single day.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {routine.map(r => (
                <div key={r.n} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "18px 20px", background: C.card, border: `1px solid ${C.border}`, borderRadius: 14 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: C.neon, color: "#000", fontWeight: 900, fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {r.n}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 3 }}>
                      <r.icon size={14} color={C.neon} />
                      <span style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>{r.title}</span>
                    </div>
                    <p style={{ color: C.textMuted, fontSize: 13 }}>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ WORKFLOW ══════════ */}
      <section style={{ padding: "96px 24px", background: C.bg }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <SectionTag icon={Zap} label="Workflow" />
          <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 900, color: "#fff", marginBottom: 10, marginTop: 4 }}>Bootcamp Workflow</h2>
          <p style={{ color: C.textSub, fontSize: 15, marginBottom: 48 }}>The continuous loop to engineering excellence.</p>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 8 }}>
            {workflowSteps.map((s, i) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ padding: "10px 20px", background: C.card, border: `1px solid ${C.borderBright}`, borderRadius: 100, fontSize: 14, fontWeight: 600, color: "#d1d5db", whiteSpace: "nowrap" }}>
                  {s}
                </span>
                {i < workflowSteps.length - 1 && <ArrowRight size={15} color={C.neon} style={{ flexShrink: 0 }} />}
              </div>
            ))}
            <ArrowRight size={15} color={C.neon} style={{ flexShrink: 0 }} />
            <div className="glow-pulse" style={{ padding: "10px 24px", background: C.neon, color: "#000", fontWeight: 900, fontSize: 14, borderRadius: 100, whiteSpace: "nowrap" }}>
              🎯 Job Ready
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ EXPECTATIONS ══════════ */}
      <section style={{ padding: "96px 24px", background: "#080808" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <SectionTag icon={Star} label="Clarity" />
            <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 900, color: "#fff", marginBottom: 10, marginTop: 4 }}>What to Expect</h2>
            <p style={{ color: C.textSub, fontSize: 15 }}>Clarity on what this bootcamp is — and what it isn&apos;t.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18 }}>
            <div style={cardNeonStyle}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <Check size={20} color={C.neon} />
                <h3 style={{ color: C.neon, fontWeight: 800, fontSize: 16 }}>Expectations</h3>
              </div>
              {expectations.map(e => <CheckItem key={e} text={e} />)}
            </div>

            <div style={cardRedStyle}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <X size={20} color={C.red} />
                <h3 style={{ color: C.red, fontWeight: 800, fontSize: 16 }}>Not Included</h3>
              </div>
              {notIncluded.map(n => <XItem key={n} text={n} />)}
              <p style={{ color: C.textMuted, fontSize: 12, fontStyle: "italic", marginTop: 18, paddingTop: 14, borderTop: `1px solid ${C.border}` }}>
                &quot;This is an active building environment, not passive entertainment.&quot;
              </p>
            </div>

            <div style={cardStyle}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <Star size={18} color={C.gold} fill={C.gold} />
                <h3 style={{ color: C.neon, fontWeight: 800, fontSize: 16 }}>What You&apos;ll Get</h3>
              </div>
              {whatYouGet.map(w => <StarItem key={w} text={w} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ AI TOOLS ══════════ */}
      <section style={{ padding: "96px 24px", background: C.bg }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionTag icon={Zap} label="AI Stack" />
            <h2 style={{ fontSize: "clamp(28px,4vw,50px)", fontWeight: 900, color: "#fff", marginBottom: 12, marginTop: 4 }}>Meet Your Future AI Stack</h2>
            <p style={{ color: C.textSub, fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
              Don&apos;t just write code — generate, debug, and scale with the best AI tools in the industry.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {AI_TOOLS.map(t => (
              <div
                key={t.name}
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-[#1e1e1e] bg-[#0e0e0e] hover:border-[#7CFF00] hover:bg-[#101810] hover:shadow-[0_0_28px_rgba(124,255,0,0.1)] transition-all duration-300 cursor-default"
              >
                <div
                  style={{ width: 60, height: 60, borderRadius: 18, background: t.bg, border: `1.5px solid ${t.color}50`, display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.2s" }}
                  className="group-hover:scale-110"
                >
                  {t.icon}
                </div>
                <span style={{ color: "#e5e7eb", fontWeight: 700, fontSize: 14, textAlign: "center", lineHeight: 1.3 }}>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CLOSING CTA ══════════ */}
      <section style={{ padding: "120px 24px", background: "#080808", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* Subtle orb */}
        <div style={{ position: "absolute", width: 600, height: 600, top: "50%", left: "50%", transform: "translate(-50%,-50%)", borderRadius: "50%", background: "radial-gradient(circle,rgba(124,255,0,0.05),transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(32px,5vw,60px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 36 }}>
            <span style={{ color: "#fff", display: "block" }}>Build Like an Engineer.</span>
            <span style={{ color: "#fff", display: "block" }}>Think Like an Architect.</span>
            <span style={{ display: "block", color: C.neon, textShadow: "0 0 12px rgba(124,255,0,0.7),0 0 40px rgba(124,255,0,0.4),0 0 80px rgba(124,255,0,0.15)" }}>Ship Like a Startup.</span>
          </h2>
          <a href="#curriculum" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 36px", background: C.neon, color: "#000", fontWeight: 800, fontSize: 17, borderRadius: 12, textDecoration: "none", boxShadow: "0 0 30px rgba(124,255,0,0.3)", transition: "all 0.2s ease" }}>
            Apply for Bootcamp <ArrowRight size={18} strokeWidth={3} />
          </a>
          <p style={{ color: C.textMuted, fontSize: 13, marginTop: 20 }}>
            Limited seats. Strict selection process.
          </p>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer style={{ padding: "40px 24px", borderTop: `1px solid ${C.border}` }}>
        <p style={{ textAlign: "center", color: "#374151", fontSize: 13 }}>
          © 2026 Engineering Bootcamp. All rights reserved.
        </p>
      </footer>

      {/* Mobile responsive for curriculum grid */}
      <style>{`
        @media (max-width: 900px) {
          .timeline-vert { display: none !important; }
        }
        a[href]:hover { opacity: 0.9; transform: translateY(-1px); }
      `}</style>
    </main>
  );
}
