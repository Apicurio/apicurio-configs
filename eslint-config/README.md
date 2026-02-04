# @apicurio/eslint-config

> ESLint shareable config for Apicurio projects using ESLint 9+ flat config format.

## Version Notes

- **v1.0.0+**: Supports ESLint 9 with the new flat config format
- **v0.3.0 and earlier**: Supports ESLint 8 with the legacy `.eslintrc.*` format

## Installation

```shell
npm install --save-dev eslint @apicurio/eslint-config
```

> Note: This config is designed for TypeScript projects. The required TypeScript ESLint dependencies are
> included as dependencies of this package, so you don't need to install them separately.

## Usage

### ESLint 9 (Flat Config)

Create an `eslint.config.js` file in your project root:

```javascript
import apicurioConfig from "@apicurio/eslint-config";

export default [
    ...apicurioConfig,
    {
        // Additional project-specific configuration
        rules: {
            // Override or add rules here
        }
    }
];
```

### Advanced Usage with File Patterns

```javascript
import apicurioConfig from "@apicurio/eslint-config";

export default [
    {
        ignores: ["dist/**", "build/**", "*.config.js"]
    },
    ...apicurioConfig,
    {
        files: ["**/*.ts", "**/*.tsx"],
        rules: {
            // TypeScript-specific overrides
        }
    }
];
```

### Integrating with React and Other Plugins

```javascript
import apicurioConfig from "@apicurio/eslint-config";
import reactPlugin from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
    ...apicurioConfig,
    {
        plugins: {
            "react-hooks": reactPlugin,
            "react-refresh": reactRefresh
        },
        rules: {
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true }
            ]
        }
    }
];
```

## Included Rules

This configuration includes:

- ESLint recommended rules
- TypeScript ESLint recommended rules
- Custom Apicurio style preferences:
  - Double quotes for strings
  - Semicolons required
  - 4-space indentation
  - Function parameters aligned to first parameter
  - Switch cases indented by 1 space
  - Object curly brace spacing
  - Relaxed TypeScript type inference rules

## Migration from v0.x (ESLint 8)

If you're upgrading from `@apicurio/eslint-config` v0.x:

1. Update to ESLint 9: `npm install --save-dev eslint@^9`
2. Update this package: `npm install --save-dev @apicurio/eslint-config@^1`
3. Convert your `.eslintrc.*` file to `eslint.config.js` using the flat config format (see examples above)
4. Remove old TypeScript ESLint dependencies if they were explicitly installed
5. Update your lint script in `package.json` if needed (remove `--ext` flags as they're no longer needed)

## License

Apache-2.0
