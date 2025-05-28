import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/meeting-calendar/", // 🔹 Lägg till ditt repo-namn här
});
