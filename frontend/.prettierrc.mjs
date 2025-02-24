// {
//   "semi": true,
//   "trailingComma": "es5",
//   "singleQuote": true,
//   "printWidth": 200,
//   "tabWidth": 2,
//   "useTabs": false,
//   "jsxSingleQuote": false,
//   "bracketSpacing": true,
//   "arrowParens": "always",
//   "htmlWhitespaceSensitivity": "css"
// }

/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        semi: true,
        trailingComma: "es5",
        singleQuote: true,
        printWidth: 150,
        tabWidth: 2,
        useTabs: false,
        jsxSingleQuote: false,
        bracketSpacing: true,
        arrowParens: "always",
        htmlWhitespaceSensitivity: "css",
      },
    },
  ],
};
