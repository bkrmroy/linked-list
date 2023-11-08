function createNode(value = null) {
	return { value, nextnode: null };
}
function createLinkedlist() {
	let listHead = null;
	const prepend = (value) => {
		if (listHead === null) {
			listHead = createNode(value);
		} else {
			listHead.value = value;
		}
	};
	const append = (value) => {
		let currentNode = listHead;
		while (currentNode.nextnode !== null) {
			currentNode = currentNode.nextnode;
		}
		currentNode.nextnode = createNode(value);
	};
	const size = () => {
		let count = 0;
		let currentNode = listHead;
		if (listHead !== null) {
			count += 1;
			while (currentNode.nextnode !== null) {
				count += 1;
				currentNode = currentNode.nextnode;
			}
		}
		return count;
	};
	const head = () => {
		return listHead;
	};
	const tail = () => {
		let currentNode = listHead;
		while (currentNode.nextnode !== null) {
			currentNode = currentNode.nextnode;
		}
		return currentNode;
	};
	const at = (index) => {
		let i = 0;
		let currentNode = listHead;
		if (index === 0) return listHead;
		while (currentNode.nextnode !== null) {
			i += 1;
			currentNode = currentNode.nextnode;
			if (i === index) {
				break;
			}
		}
		if (index > i) return "doesn't exist";
		return currentNode;
	};
	const contains = (val) => {
		let currentNode = listHead;
		if (listHead.value === val) return true;
		while (currentNode.nextnode !== null) {
			if (currentNode.nextnode.value === val) {
				return true;
			}
			currentNode = currentNode.nextnode;
		}
		return false;
	};
	const find = (val) => {
		let currentNode = listHead;
		let i = 0;
		if (listHead.value === val) return i;
		while (currentNode.nextnode !== null) {
			i += 1;
			if (currentNode.nextnode.value === val) {
				return i;
			}
			currentNode = currentNode.nextnode;
		}
		return null;
	};
	const toString = () => {
		let currentNode = listHead;
		let string = `(${listHead.value}) -> `;
		while (currentNode.nextnode !== null) {
			string += `(${currentNode.nextnode.value}) -> `;
			currentNode = currentNode.nextnode;
		}
		return (string += "null");
	};
	const insertAt = (val, index) => {
		let currentNode = listHead;
		let i = 0;
		if (index === 0) {
			return (listHead.value = val);
		} else {
			while (currentNode.nextnode != null) {
				i += 1;
				if (index === i) {
					return (currentNode.nextnode.value = val);
				}
				currentNode = currentNode.nextnode;
			}
		}
		return "enter a valid index";
	};
	const remove = (index) => {
		let currentNode = listHead;
		let i = 0;
		if (index === 0) {
			listHead = listHead.nextnode;
			return "done";
		} else {
			while (currentNode.nextnode != null) {
				i += 1;
				if (index === i) {
					currentNode.nextnode = currentNode.nextnode.nextnode;
					return "done";
				}
				currentNode = currentNode.nextnode;
			}
		}
		return "enter a valid index";
	};
	return {
		prepend,
		append,
		size,
		head,
		tail,
		at,
		contains,
		find,
		toString,
		insertAt,
		remove,
	};
}
const l = createLinkedlist();
l.prepend("a");
l.append("b");
l.append("c");
l.append("d");
l.append("e");
l.append("f");
l.append("g");
console.log(l.toString());
