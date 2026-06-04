/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
import { type TreeNode, tree } from "./TreeNode";

/**
 * Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum
 * of the node values in the path equals targetSum. Each path should be returned as a list of the node values,
 * not node references.
 *
 * A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.
 *
 *
 * Example 1:
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * Output: [[5,4,11,2],[5,8,4,5]]
 * Explanation: There are two paths whose sum equals targetSum:
 * 5 + 4 + 11 + 2 = 22
 * 5 + 8 + 4 + 5 = 22
 *
 * Example 2:
 * Input: root = [1,2,3], targetSum = 5
 * Output: []
 *
 * Example 3:
 * Input: root = [1,2], targetSum = 0
 * Output: []
 *
 *
 * Constraints:
 * The number of nodes in the tree is in the range [0, 5000].
 * -1000 <= Node.val <= 1000
 * -1000 <= targetSum <= 1000
 */
export const pathSum = (
  root: TreeNode | null,
  targetSum: number,
): number[][] => {
  if (root === null) return [];

  const output: number[][] = [];
  const difference: number = targetSum - root.val;

  if (root.left === null && root.right === null && difference === 0)
    return [[root.val]];

  output.push(
    ...pathSum(root.left, difference).map((r) => [root.val, ...r]),
    ...pathSum(root.right, difference).map((r) => [root.val, ...r]),
  );

  return output;

  // Time:    Θ(n²)
  // Space:   Θ(n²)
};
