// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.



// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.


// 0113 0125
var numIdenticalPairs = function (nums) {
    let count = 0;
    nums.forEach((n1, i1) => {
        for (let i2 = i1 + 1; i2 < nums.length; i2++) {
            if (n1 == nums[i2]) {
                count++;
                console.log(i1, i2);
            }
        }
    });
    return count;
};


console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))