export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// export const tree = new TreeNode(
//   3,
//   new TreeNode(9),
//   new TreeNode(20, new TreeNode(15), new TreeNode(7)),
// );
export const tree = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
  new TreeNode(
    8,
    new TreeNode(13),
    new TreeNode(4, new TreeNode(5), new TreeNode(1)),
  ),
);
