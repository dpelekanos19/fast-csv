module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.build.json"
    },
    plugins: ["@typescript-eslint", "prettier"],
    extends: [
        "airbnb-base",
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/@typescript-eslint"
    ],
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ["**/build", "**/node_modules"],
    settings:{
        "import/extensions": [
            ".ts"
        ],
        "import/parsers": {
            "@typescript-eslint/parser": [
                ".ts"
            ]
        },
        "import/resolver": {
            node: {
                extensions: [".ts"]
            },
            "typescript": {
                "alwaysTryTypes": true
            }
        }
    },
    globals: {
        NodeJS: 'readonly',
    },
    rules: {
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "ts": "never"
            }
        ],
        "prettier/prettier": "error",
        "indent": [
            "error",
            4,
            { "SwitchCase": 1 }
        ],
        "import/prefer-default-export": 0,
        "import/no-default-export": ["error"],
        "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],
        "object-curly-spacing": ["error", "always"],
        "no-underscore-dangle": 0,
        "max-len": ["error", 150, 2, {
            ignoreComments: false,
            ignoreUrls: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }]
    },
    overrides: [
        {
            "files": [
                "*.spec.ts"
            ],
            "rules": {
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/ban-ts-ignore": "off"
            }
        },
        {
            "files": [
                "*.js",
                "examples/example-runner/bin/run-examples"
            ],
            "rules": {
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/no-var-requires": "off"
            }
        }
    ]
};
