// 0056 //0058
var buildArray = function (nums) {
    let newArr = [];
    nums.forEach(element => {
        newArr.push(nums[element]);
    });
    return newArr;
};

console.log(buildArray([0, 2, 1, 5, 3, 4]));