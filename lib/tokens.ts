/**
 * Life OS signal semantics — colour carries meaning only.
 *   umber  = decision / primary / the user's own choice
 *   dust   = evidence / reflection / a second data-series
 *   oxblood = contradiction / failure / redaction
 */
export const SIGNAL = {
  umber: "#A06B43",
  umberText: "#BE8557",
  dust: "#8FA0B6",
  oxblood: "#9A4F42",
  oxbloodText: "#C06A5C",
  neutral: "#9A8E78",
  faint: "#756B59",
} as const;

export const INK = {
  900: "#14110D",
  800: "#1B1713",
  700: "#221C16",
  recess: "#100D0A",
} as const;

export type SignalKey = keyof typeof SIGNAL;
