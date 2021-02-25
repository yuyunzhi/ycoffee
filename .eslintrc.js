module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "jest"],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // 表示启动JSX
    },
    ecmaVersion: 2018, // 指定支持版本
    sourceType: "module", //指定来源的类型，有两种script module
  },
  rules: {
    "linebreak-style": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "import/prefer-default-export": "off",
    "no-param-reassign": "off",
    "react/jsx-props-no-spreading": "off",
    "no-plusplus": "off",
    "prefer-destructuring": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "import/no-extraneous-dependencies": "off",
    "react/destructuring-assignment": "off",
    "react/button-has-type": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "react/require-default-props": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/jsx-no-target-blank": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "prefer-const": "off",
    "prefer-spread": "off",
    "@typescript-eslint/parser": "off",
    "@typescript-eslint/no-empty-function": "off",
    "prettier/prettier": [
      "off",
      {
        endOfLine: "auto",
      },
    ],
  },
};
