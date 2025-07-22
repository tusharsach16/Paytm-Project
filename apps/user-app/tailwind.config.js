/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Look in all JavaScript/TypeScript/JSX/TSX/MDX files within the current app
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // IMPORTANT: Also look in your shared UI package
    // The path here assumes your `packages/ui` is one level up from `apps/web`
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}