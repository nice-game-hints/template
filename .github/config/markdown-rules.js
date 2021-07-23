"use strict";

module.exports = [{
	names: ["NGH-001"],
	description: "No empty hints",
	tags: ['heading'],
	function: (params, onError) => {
		let i = 0;
		let headingLineNumber = -1
		for (let i = 0; i < params.tokens.length; i++) {
			const token = params.tokens[i]
			if (token.type == 'heading_open') {
				headingLineNumber = token.lineNumber
			}
			if (token.type == 'heading_close') {
				if (i == params.tokens.length - 1 || params.tokens[i + 1].type == 'heading_open') {
					onError({
						lineNumber: headingLineNumber,
						detail: "Cannot have empty hint body",
						context: token.line
					});
				}
			}
		}
	}
}]
