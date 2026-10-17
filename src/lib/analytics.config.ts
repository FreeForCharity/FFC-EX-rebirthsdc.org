// Analytics ID configuration guard.
//
// This fork keeps its tracking IDs where they already live — the GTM
// container ID in src/components/google-tag-manager, and the GA / Meta
// Pixel / Clarity IDs as NEXT_PUBLIC_* env vars read by the cookie-consent
// component (with inert placeholder fallbacks). This module only provides
// the guard that keeps a placeholder-valued integration from loading.

// The placeholder values the loaders fall back to. Loaders check against
// this list so that "leave a value as its placeholder to keep that
// integration effectively inert" is actually honored.
const PLACEHOLDER_IDS: readonly string[] = ['G-XXXXXXXXXX', 'XXXXXXXXXXXXXXX', 'XXXXXXXXXX']

/**
 * True when an analytics ID has been replaced with a real value. A falsy
 * or whitespace-only value, one of the shipped placeholders, or any
 * obviously-templated value (six or more consecutive X's) counts as NOT
 * configured, so the integration it belongs to stays inert.
 */
export function isConfigured(id: string | undefined | null): boolean {
  if (!id) return false
  const trimmed = id.trim()
  if (!trimmed) return false
  if (PLACEHOLDER_IDS.includes(trimmed)) return false
  if (/X{6,}/.test(trimmed)) return false
  return true
}
