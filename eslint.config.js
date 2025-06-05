import js from "@eslint/js"
import eslintBoundaries from "eslint-plugin-boundaries"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import globals from "globals"
import tseslint from "typescript-eslint"

import { eslintBoundariesConfig } from "./eslint.boundaries.js"

export default tseslint.config(
	{ ignores: ["dist"] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				project: ["./tsconfig.app.json", "./tsconfig.node.json"],
				tsconfigRootDir: import.meta.dirname
			}
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			boundaries: eslintBoundaries
		},
		settings: {
			...eslintBoundariesConfig.settings
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true }
			],
			...eslintBoundariesConfig.rules,
			"@typescript-eslint/no-explicit-any": "off"
		}
	}
)
