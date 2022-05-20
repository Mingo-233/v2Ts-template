const isProduction = process.env.NODE_ENV === "production";
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": isProduction ? 2 : 1,
    "no-debugger": isProduction ? 2 : 1,
    // "ban-ts-ignore": true,
    // "@typescript-eslint/ban-ts-comment": "off",
  },
};
