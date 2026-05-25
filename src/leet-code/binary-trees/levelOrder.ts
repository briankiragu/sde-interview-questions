/** Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 *
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[9,20],[15,7]]
 *
 * Example 2:
 * Input: root = [1]
 * Output: [[1]]
 *
 * Example 3:
 * Input: root = []
 * Output: []
 *
 * Constraints:
 * The number of nodes in the tree is in the range [0, 2000].
 * -1000 <= Node.val <= 1000
 */

import { type TreeNode, tree } from "./TreeNode";

export const levelOrder = (root: TreeNode | null): number[][] => {
	if (root === null) return [];

	const result: number[][] = [];
	let current: TreeNode[] = [root];

	while (current.length > 0) {
		const next: TreeNode[] = [];
		const levelVals: number[] = [];

		for (const node of current) {
			levelVals.push(node.val);
			if (node.left !== null) next.push(node.left);
			if (node.right !== null) next.push(node.right);
		}

		result.push(levelVals);
		current = next;
	}

	return result;
};

console.dir(levelOrder(tree));
