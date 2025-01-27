import pluginJs from "@eslint/js"
import pluginReact from "eslint-plugin-react"
import globals from "globals"
import tseslint from "typescript-eslint"

/** @type {import('eslint').Linter.Config[]} */

export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        plugins: { react: pluginReact, typescript:tseslint},
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                "__IS_DEV__":true
            },
        },
        rules: {
            // ...pluginReact.configs.recommended.rules,
            "react/react-in-jsx-scope": "off",
            "react/jsx-indent": [2, 4],
            "react/jsx-indent-props": [2, 4],
            "@typescript-eslint/no-unused-vars":"off",
            "import/no-unresolved":'off',
            "import/prefer-default-export":'off',
            indent:[2,4],
            "react/jsx-filename-extension":[2, {extensions:[".js",'.jsx','.tsx']}],
            "react/require-default-props":"off",
            "react/jsx-props-no-spreading":"off",
            // "react/jsx-props-no-spreading":"warn",
            "react/function-component-definition":'off',
            "import/extensions":"off",
            "no-underscore-dangle":"off"
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    // pluginReact.configs.flat.recommended
];
