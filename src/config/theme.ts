export const themePresets = {
  adpfIndustrial: {
    name: "ADPF industrial",
    tokens: {
      primary: "210 86% 18%",
      secondary: "198 48% 35%",
      accent: "39 72% 58%",
      surface: "42 26% 96%",
      foreground: "214 34% 12%",
      muted: "213 18% 45%",
      radius: "8px",
      container: "1180px",
      shadow: "0 24px 80px rgba(7, 20, 35, 0.18)",
      fast: "180ms",
      slow: "700ms"
    }
  },
  cleanEnergy: {
    name: "Example alternate clean energy theme",
    tokens: {
      primary: "166 64% 18%",
      secondary: "190 45% 38%",
      accent: "24 82% 60%",
      surface: "180 20% 97%",
      foreground: "190 26% 11%",
      muted: "190 14% 43%",
      radius: "6px",
      container: "1200px",
      shadow: "0 22px 70px rgba(0, 52, 55, 0.15)",
      fast: "180ms",
      slow: "650ms"
    }
  }
} as const;

export const activeTheme = themePresets.adpfIndustrial;
