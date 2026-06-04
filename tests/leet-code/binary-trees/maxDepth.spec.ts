import { describe, expect, test } from "bun:test";
import { maxDepth } from "../../../src/leet-code/binary-trees/maxDepth";
import { TreeNode } from "../../../src/leet-code/binary-trees/TreeNode";

describe("Binary Tree Maximum Depth", () => {
  test("Picks the deeper subtree when the shallow side is traversed first", () => {
    // Edge case: an asymmetric tree where the LEFT subtree is a single
    // leaf (depth 1) and the RIGHT subtree is a right-skewed chain of
    // four nodes (depth 4), using the extreme allowed values (-100/100).
    //
    // This catches implementations that:
    //   * sum both sides instead of taking Math.max (would return 6),
    //   * accidentally use Math.min (would return 2),
    //   * recurse only into root.left and ignore root.right (would return 2),
    //   * forget the +1 for the current node (would return 4).
    //
    // Because the shallow branch is visited first, a correct solution
    // must still propagate the right subtree's greater depth upward.
    //
    //         100
    //        /   \
    //     -100   100
    //              \
    //              -100
    //                 \
    //                 100
    //                    \
    //                   -100
    const root = new TreeNode(
      100,
      new TreeNode(-100),
      new TreeNode(
        100,
        null,
        new TreeNode(
          -100,
          null,
          new TreeNode(100, null, new TreeNode(-100)),
        ),
      ),
    );

    expect(maxDepth(root)).toBe(5);
  });

  test("Returns the tied depth once (not doubled) for a perfectly balanced binary tree", () => {
    // Edge case: a full binary tree of depth 3 where every internal node
    // has exactly two children and BOTH subtrees of the root reach the
    // same maximum depth. This is a true binary tree (no null children
    // until the leaves) and stresses the Math.max tie-breaking path.
    //
    // It catches implementations that:
    //   * add left + right depths instead of taking the max (would return 5),
    //   * count nodes instead of levels (would return 7),
    //   * stop at the first leaf and return early (would return 1 or 2).
    //
    // Values alternate the boundary extremes -100/100 to also guard
    // against any sign- or value-based short-circuit.
    //
    //              100
    //           /        \
    //         -100        -100
    //         /  \        /   \
    //       100  100   100   100
    const leaf = () => new TreeNode(100);
    const root = new TreeNode(
      100,
      new TreeNode(-100, leaf(), leaf()),
      new TreeNode(-100, leaf(), leaf()),
    );

    expect(maxDepth(root)).toBe(3);
  });

  test("Returns 0 for an empty tree (null root)", () => {
    // Edge case: the constraints allow 0 nodes. The function must
    // short-circuit on null without attempting to dereference .left/.right.
    expect(maxDepth(null)).toBe(0);
  });
});
