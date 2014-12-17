module.exports = {
  Line: lineCommentSpace
}

function lineCommentSpace(node) {
  if (node.value[0] === ' ') {
    return node
  }

	return {
		type: 'Line',
		value: ' ' + node.value
	};
}
