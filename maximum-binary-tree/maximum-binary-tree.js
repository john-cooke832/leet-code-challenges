/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  if (nums.length === 0) return null;
  const max = Math.max.apply(null, nums);
  const first = nums.slice(0, nums.indexOf(max));
  const last = nums.slice(nums.indexOf(max) + 1);
  return new TreeNode(max, constructMaximumBinaryTree(first), constructMaximumBinaryTree(last));
};