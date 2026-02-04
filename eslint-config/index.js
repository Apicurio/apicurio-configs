/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

/**
 * Apicurio ESLint configuration for ESLint 9+ (flat config format)
 *
 * This configuration extends ESLint's recommended rules and TypeScript ESLint's
 * recommended rules, with specific style preferences for Apicurio projects.
 */
export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            "quotes": ["error", "double"],
            "semi": ["error", "always"],
            "indent": ["error", 4, {
                "FunctionDeclaration": {
                    "parameters": "first"
                },
                "SwitchCase": 1
            }],
            "key-spacing": ["error", {
                "afterColon": true
            }],
            "object-curly-spacing": ["error", "always"],
            "linebreak-style": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-inferrable-types": "off"
        }
    }
);
