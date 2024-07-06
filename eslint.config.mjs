import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-var": "off",
      "prefer-const": "off",
      "no-constant-condition": "off",
      "no-unused-expressions": "warn",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-explicit-any": "off",
//        "@angular-eslint/directive-selector": "off",
      "@angular-eslint/no-empty-lifecycle-method": "off",
      "suppressImplicitAnyIndexErrors": "off"
    }
  }
];
