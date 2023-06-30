module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "import-helpers",
    "prettier",
  ],
  rules: {
    indent: [
      "error",
      2,
      {
        VariableDeclarator: "first",
        ObjectExpression: "first",
        ArrayExpression: "first",
        CallExpression: {
          arguments: "first",
        },
        ImportDeclaration: "first",
        offsetTernaryExpressions: true,
      },
    ],
    "key-spacing": [
      "error",
      {
        align: {
          beforeColon: true,
          afterColon: true,
          on: "colon",
        },
      },
    ],
    semi: ["error", "always"],
    quotes: [
      "error",
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off", // para trabalhar com NextJS apenas
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always", // Cria uma nova linha para separar as importacoes
        groups: [
          ["/^react/", "/^next/"],
          "module",
          "/^@shared/",
          "absolute",
          "/^components/",
          "/^pages/",
          "/utils/",
          "/constants/",
          "/^store/",
          "/^styles/",
          "/^templates/",
          ["parent", "sibling", "index"],
        ],
        alphabetize: {
          order: "asc",
          ignoreCase: true,
        },
      },
    ],
  },
};
