var subsets = function (nums) {
    let ans = [];
    function ss(nums, i, op, ans) {
        if (i >= nums.length - 1) {
            ans.push(op);
            return;
        }
        ss(nums, i + 1, op, ans);
        op.push(nums[i]);
        ss(nums, i + 1, op, ans);
    }
    ss(nums, 0, [], ans);
    return ans;
};

console.log(subsets([1, 2, 3]))