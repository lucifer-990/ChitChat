import { create } from "zustand";

export const useThemeStore = create((set) => {
  const savedTheme = localStorage.getItem("data-theme") || "Business";

  document.documentElement.setAttribute("data-theme", savedTheme);

  return {
    theme: savedTheme,
    setTheme: (theme) => {
      localStorage.setItem("data-theme", theme);

      set({ theme });

      document.documentElement.setAttribute("data-theme", theme);
    },
  };
});
