/**
 * Calls Claude from the browser when the artifact host injects
 * `window.claude.complete`. Falls back to a provided string otherwise,
 * so the UI never stalls in a plain dev environment.
 *
 * In a real deployment, replace the body with a fetch('/api/complete')
 * to a route handler that holds your ANTHROPIC_API_KEY server-side.
 */
declare global {
  interface Window {
    claude?: { complete: (prompt: string) => Promise<string> };
  }
}

export async function complete(prompt: string, fallback: string): Promise<string> {
  try {
    if (typeof window !== "undefined" && window.claude?.complete) {
      const out = await window.claude.complete(prompt);
      if (out && out.trim()) return out.trim().replace(/^["'“]+|["'”]+$/g, "");
    }
  } catch {
    /* fall through */
  }
  return fallback;
}
