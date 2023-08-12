// ESLint Config

import babelParser from "@babel/eslint-parser";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import js from "@eslint/js";

const config = [
  {
    ignores: ["**/dist"],
  },

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
      },
    },
  },

  js.configs.recommended,

  eslintConfigPrettier,
];

export default config;
