import { describe, expect, test } from "bun:test";
import { levelOrder } from "../../../src/leet-code/binary-trees/levelOrder";
import { TreeNode } from "../../../src/leet-code/binary-trees/TreeNode";

describe("Binary Tree Level Order Traversal", () => {
  test("Handles a deeply left-skewed tree with boundary values", () => {
    // Edge case: degenerate (single-child-per-level) tree using the
    // extreme allowed node values (-1000 and 1000). Each level contains
    // exactly one node, so the BFS must still emit one bucket per level
    // and never merge siblings across depths.
    //
    //       -1000
    //       /
    //    1000
    //    /
    // -1000
    //    /
    // 1000
    const root = new TreeNode(
      -1000,
      new TreeNode(1000, new TreeNode(-1000, new TreeNode(1000), null), null),
      null,
    );

    expect(levelOrder(root)).toEqual([[-1000], [1000], [-1000], [1000]]);
  });

  test("Merges siblings from different parents at the same depth (canonical Example 1)", () => {
    // Edge of the *common* case: this is the bug that pure pre-order
    // concatenation silently passes but level-order does not. Nodes 15
    // and 7 sit on level 2 under different parents and must be merged.
    //
    //       3
    //      / \
    //     9  20
    //        / \
    //       15  7
    const root = new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7)),
    );

    expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
  });
});
