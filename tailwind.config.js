/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "node_modules/flowbite-react/lib/esm/**/*.js",

];
export const theme = {
  extend: {},
};
export const plugins = [
  // ...
  { darkMode: "class" },

  require("flowbite/plugin"),
];
