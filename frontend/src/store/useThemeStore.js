import { create } from "zustand";

export const useThemeStore = create((set) => {
  // Get the theme from localStorage or default to "coffee"
  const savedTheme = localStorage.getItem("data-theme") || "Business";

  // Apply the saved theme to the document on initialization
  document.documentElement.setAttribute("data-theme", savedTheme);

  return {
    theme: savedTheme,
    setTheme: (theme) => {
      // Save the theme to localStorage
      localStorage.setItem("data-theme", theme);

      // Update the Zustand store
      set({ theme });

      // Apply the theme to the document
      document.documentElement.setAttribute("data-theme", theme);
    },
  };
});
