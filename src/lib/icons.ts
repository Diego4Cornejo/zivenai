const iconClass = 'h-5 w-5';

export const iconMap: Record<string, string> = {
  utensils: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="M4 3v7a3 3 0 0 0 3 3V21"/><path d="M7 3v10"/><path d="M10 3v7a3 3 0 0 1-3 3"/><path d="M15 3v8"/><path d="M15 11c0 3 1.5 4 4 4V3c-2.5 0-4 2-4 8Z"/></svg>`,
  building: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 10h.01"/><path d="M9 14h.01"/><path d="M15 10h.01"/><path d="M15 14h.01"/><path d="M11 21v-4h2v4"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="M19.5 13.6 12 21l-7.5-7.4a4.8 4.8 0 0 1 6.8-6.8L12 7.5l.7-.7a4.8 4.8 0 0 1 6.8 6.8Z"/></svg>`,
  sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="m12 3 1.9 4.6L18.5 9l-4.6 1.4L12 15l-1.9-4.6L5.5 9l4.6-1.4L12 3Z"/><path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z"/><path d="M5 14l.9 2.1L8 17l-2.1.9L5 20l-.9-2.1L2 17l2.1-.9L5 14Z"/></svg>`,
  briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/></svg>`,
  shopping: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/><path d="M3 4h2l2.4 11.2a1 1 0 0 0 1 .8h9.9a1 1 0 0 0 1-.8L21 8H7"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
  chat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="M7 10h10"/><path d="M7 14h7"/><path d="M21 12a8 8 0 0 1-8 8H5l-2 2V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8Z"/></svg>`,
  leads: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M4 19a5 5 0 0 1 10 0"/><path d="M16 8h5"/><path d="M18.5 5.5v5"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M3 10h18"/><path d="M8 14h3"/><path d="M13 14h3"/><path d="M8 18h3"/></svg>`,
  handoff: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="M7 9h6a3 3 0 0 1 3 3v2"/><path d="m13 7 2 2-2 2"/><path d="M17 15H11a3 3 0 0 1-3-3v-2"/><path d="m11 17-2-2 2-2"/></svg>`,
  sliders: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="M4 6h16"/><path d="M4 18h16"/><path d="M7 6v12"/><path d="M17 6v12"/></svg>`,
  rocket: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="M5 19c1.5-4 4-6.5 8-8 2-4 5-6 8-7 1 3 0 6-3 9-1.5 4-4 6.5-8 8l-2 1 1-3Z"/><path d="M9 15 5 19"/><path d="M15 9h.01"/></svg>`,
  layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.9 19.9 0 0 1-8.7-3.1 19.5 19.5 0 0 1-6-6A19.9 19.9 0 0 1 2 4.1 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7l.4 3a2 2 0 0 1-.6 1.8L7 10.3a16 16 0 0 0 6.7 6.7l1.8-1.8a2 2 0 0 1 1.8-.6l3 .4A2 2 0 0 1 22 16.9Z"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="${iconClass}" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="M6 6l12 12"/><path d="M18 6 6 18"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`
};

export function getIcon(name: string) {
  return iconMap[name] ?? iconMap.arrow;
}
