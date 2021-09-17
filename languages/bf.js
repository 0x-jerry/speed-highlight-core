export default [
	{
		match: /[^\[\->+.<\]\s].*/g,
		type: 'cmnt'
	},
	{
		match: /\.+/g,
		type: 'func'
	},
	{
		match: /[<>]+/g,
		type: 'kwd'
	},
	{
		match: /[+-]+/g,
		type: 'oper'
	}
]