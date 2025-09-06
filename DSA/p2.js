var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = i;
  }

  console.log("====================================");
  console.log(obj);
  console.log("====================================");

  Object.entries(obj).forEach(([key, value], i) => {
    leftNum = target - key;
    if (obj[target - key]) {
      return [i, obj[target - key]];
    }
  });
};
let t1 = Date.now();
console.log(twoSum([3, 0, 4, 5, 6, 1, 2, 4, 2, 7, 8, 9], 6));
console.log(Date.now() - t1);
