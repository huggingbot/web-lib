module.exports = {
	'env': {
		'node': true,
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:tailwindcss/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 12,
		'sourceType': 'module',
		'project': ['./tsconfig.json']
	},
	'plugins': [
		'@typescript-eslint',
		'react',
		'tailwindcss'
	],
	'settings': {
		'react': {
			'version': 'detect'
		},
		'import/resolver': {
			'typescript': {}
		}
	},
	'rules': {
		'indent': [2, 'tab'],
		'no-mixed-spaces-and-tabs': 2,
		'react/prop-types': 0,
		'no-async-promise-executor': 0,
		'import/no-unresolved': 0, //Issue with package exports
		'quotes': [2, 'single', {'avoidEscape': true}],
		'object-curly-spacing': [2, 'never'],
		'array-bracket-spacing': [2, 'never'],
		'react/jsx-curly-brace-presence': ['error', {'props': 'always', 'children': 'always'}],
		'semi': 'error',
		'tailwindcss/no-custom-classname': 0,
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/no-unused-vars': 2,
		'@typescript-eslint/array-type': ['error', {'default': 'array'}],
		'@typescript-eslint/consistent-type-assertions': ['error', {'assertionStyle': 'as', 'objectLiteralTypeAssertions': 'never'}],
		'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
		'@typescript-eslint/consistent-indexed-object-style': ['error', 'index-signature'],
		'@typescript-eslint/explicit-function-return-type': ['error', {
			'allowExpressions': false,
			'allowTypedFunctionExpressions': false,
			'allowHigherOrderFunctions': false,
			'allowDirectConstAssertionInArrowFunctions': false,
			'allowConciseArrowFunctionExpressionsStartingWithVoid': false,
			'allowedNames': []
		}],
		'@typescript-eslint/naming-convention': ['error',
			{'selector': 'default', 'format': ['camelCase']},
			{'selector': 'function', 'format': ['camelCase', 'PascalCase']},
			
			{'selector': 'variableLike', 'format': ['camelCase', 'PascalCase', 'UPPER_CASE'], 'leadingUnderscore': 'allow'},
			{'selector': 'variable', 'types': ['boolean'], 'format': ['PascalCase'], 'prefix': ['is', 'should', 'has', 'can', 'did', 'will']},
			{'selector': 'default', 'format': null, 'filter': {'regex': '^(0-9)$', 'match': false}},
			{
				'selector': 'variableLike',
				'format': null,
				'filter': {'regex': '^(set)', 'match': true},
				'custom': {'regex': '^set_[a-z]+((\\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?$', 'match': true}
			},
			{'selector': 'variableLike', 'format': ['PascalCase'], 'filter': {'regex': '(Context)$|(ContextApp)$|^Component$', 'match': true}},
			
			{'selector': ['typeParameter', 'typeAlias'], 'format': ['PascalCase'], 'prefix': ['T']},
			{'selector': 'interface', 'format': ['PascalCase'], 'prefix': ['I']},
			{'selector': ['default', 'variableLike', 'parameter'], 'format': null, 'filter': {'regex': '^(__html|_css)$', 'match': true}}
		],
		'@typescript-eslint/no-misused-promises': ['error', {'checksConditionals': true, 'checksVoidReturn': true}],
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
		'@typescript-eslint/no-unnecessary-qualifier': 'error',
		'@typescript-eslint/no-unnecessary-type-arguments': 'error',
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error', {
			'allowComparingNullableBooleansToTrue': false,
			'allowComparingNullableBooleansToFalse': false
		}],
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/promise-function-async': 'error',
		'@typescript-eslint/require-array-sort-compare': 'error',
		'@typescript-eslint/type-annotation-spacing': ['error', {'before': true, 'after': true, 'overrides': {'colon': {'before': false, 'after': true}}}],
		'brace-style': 'off',
		'@typescript-eslint/brace-style': ['error', '1tbs'],
		'comma-dangle': 'off',
		'@typescript-eslint/comma-dangle': ['error'],
		'comma-spacing': 'off',
		'@typescript-eslint/comma-spacing': ['error'],
		'dot-notation': 'off',
		'@typescript-eslint/dot-notation': ['error']
	}
};
