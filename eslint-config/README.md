# @apicurio/eslint-config

> ESLint [shareable config](https://eslint.org/docs/latest/developer-guide/shareable-configs.html) for Apicurio projects.

## Installation

```shell
npm install --save-dev eslint @apicurio/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

> Note: This config assumes you are using TypeScript in your project which is why you must install some `@typescript-eslint` scoped dependencies.

## Usage

Once the `@apicurio/eslint-config` package is installed, you can specify it in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESlint configuration](http://eslint.org/docs/user-guide/configuring).

```json
{
	"extends": "@apicurio",
	"parser": "@typescript-eslint/parser",
	"rules": {
		// Additional project rules
	}
}
```