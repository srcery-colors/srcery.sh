// ESLint Config

import babelParser from "@babel/eslint-parser";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
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
]);
