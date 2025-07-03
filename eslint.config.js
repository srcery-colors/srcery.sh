// ESLint Config

import babelParser from "@babel/eslint-parser";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import globals from "globals";
import js from "@eslint/js";
import html from "@html-eslint/eslint-plugin";
import {
  TEMPLATE_ENGINE_SYNTAX,
  default as htmlParser,
} from "@html-eslint/parser";

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
  {
    ...html.configs["flat/recommended"],
    files: ["**/*.html"],
    plugins: {
      "@html-eslint": html,
    },
    languageOptions: {
      parser: htmlParser,
      parserOptions: {
        templateEngineSyntax: TEMPLATE_ENGINE_SYNTAX.HANDLEBAR,
      },
    },
    rules: {
      ...html.configs["flat/recommended"].rules,
      "@html-eslint/indent": "off",
      "@html-eslint/no-extra-spacing-attrs": "off",
      "@html-eslint/require-closing-tags": "off",
      "@html-eslint/attrs-newline": "off",
    },
  },
]);
