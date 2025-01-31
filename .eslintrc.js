const path = require("path");

module.exports = {
  extends: ["expo", "prettier"],
  plugins: [
    "prettier",
    "unicorn",
    "@typescript-eslint",
    "unused-imports",
    "simple-import-sort",
    "eslint-plugin-react-compiler",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "prettier/prettier": "warn",
    "unicorn/filename-case": [
      "error",
      {
        case: "kebabCase",
        ignore: ["/android", "/ios"],
      },
    ],
    "max-params": ["error", 3],
    "max-lines-per-function": ["error", 70],
    "react/display-name": "off",
    "react/no-inline-styles": "off",
    "react/destructuring-assignment": "off",
    "react/require-default-props": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
        disallowTypeAnnotations: true,
      },
    ],
    "import/prefer-default-export": "off",
    "import/no-cycle": ["error", { maxDepth: "∞" }],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
  },
  overrides: [
    {
      files: ["src/translations/*.json"],
      extends: ["plugin:i18n-json/recommended"],
      rules: {
        "i18n-json/valid-message-syntax": [
          2,
          {
            syntax: path.resolve("./scripts/i18next-syntax-validation.js"),
          },
        ],
        "i18n-json/valid-json": 2,
        "i18n-json/sorted-keys": [
          2,
          {
            order: "asc",
            indentSpaces: 2,
          },
        ],
        "i18n-json/identical-keys": [
          2,
          {
            filePath: path.resolve("./src/translations/en.json"),
          },
        ],
        "prettier/prettier": [
          0,
          {
            singleQuote: true,
            endOfLine: "auto",
          },
        ],
      },
    },
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
};
