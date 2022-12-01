module.exports = {
  env: {
    jest: true,
    browser: true,
  },
  globals: {
    JSX: true,
  },
  root: true,
  extends: ["airbnb", "prettier", "plugin:react/recommended"],
  rules: {
    "no-alert": "off",
    "no-bitwise": "warn",
    "no-sequences": "warn",
    "react/prop-types": "off",
    "import/extensions": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".tsx", ".jsx"],
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/state-in-constructor": "off",
    "import/prefer-default-export": 0,
    "react/jsx-props-no-spreading": "off",
    "import/no-extraneous-dependencies": "off",
    "no-shadow": "off",
    "no-unused-vars": "off",
    "react/require-default-props": 0,
    "no-param-reassign": "off",
  },
};
