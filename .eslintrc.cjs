module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh", "unused-imports", "simple-import-sort", "prettier"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "simple-import-sort/imports": "error",
    "sort-vars": "error",
    "sort-keys": "error",
    "prettier/prettier": ["error"],
    "react/jsx-sort-props": ["error", {
      "ignoreCase": true,
      "callbacksLast": true,
      "shorthandFirst": true,
      "multiline": 'last',
      "reservedFirst": true
    }],
    // "operator-linebreak": ["error", "before"],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "react/prop-types": "off"
  },
};
