import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/meeting-calendar/", // 🔹 Se till att detta matchar ditt repo-namn
});
