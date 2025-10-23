import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias '@' to your 'src' directory
      "@components": path.resolve(__dirname, "./src/components"), // Example alias for 'components'
      "@assets": path.resolve(__dirname, "./src/assets"), // Example alias for 'assets'
    },
  },
});
