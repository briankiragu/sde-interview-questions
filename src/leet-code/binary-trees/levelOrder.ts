import { type TreeNode, tree } from "./TreeNode";

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
 *
 * Complexity:
 *   Time:  O(n) — each of the n nodes is enqueued and dequeued exactly
 *                 once, and its value/children are touched in O(1).
 *                 Note: this assumes O(1) queue ops. Because we use
 *                 Array.shift(), which reindexes in O(k), the actual
 *                 worst-case runtime is O(n^2) on wide trees. Swap in a
 *                 head-pointer or linked-list deque to reach true O(n).
 *
 *   Space: O(n) — `output` holds all n values across all levels, and the
 *                 BFS queue can hold up to the widest level, which for a
 *                 complete binary tree is ~n/2 nodes. Both are O(n).
 */
export const levelOrder = (root: TreeNode | null): number[][] => {
	if (root === null) return [];

	const head: number = 0;
	const output: number[][] = [];
	const queue: (TreeNode | null)[] = [root];

	while (head < queue.length) {
		const size: number = queue.length;
		const level: number[] = [];

		for (let i = 0; i < size; i++) {
			const node = queue.shift();

			if (node !== (null || undefined)) {
				level.push(node.val);

				if (node?.left !== null) queue.push(node?.left);
				if (node?.right !== null) queue.push(node?.right);
			}
		}

		output.push(level);
	}

	return output;

	// Time:    O(n)
	// Space:   O(n)
};

console.dir(levelOrder(tree));
