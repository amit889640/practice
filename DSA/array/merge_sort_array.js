var merge = function (nums1, m, nums2, n) {
  const arr = [];
  let n1 = 0;
  let n2 = 0;

  for (let i = 0; i <= m + n; i++) {
    if (nums1[n1] < nums2[n2] || !nums2[n2]) {
      if (nums1[n1] > 0) {
        arr.push(nums1[n1]);
        n1++;
        continue;
      }
    }
    if (nums1[n1] >= nums2[n2] || !nums1[n1]) {
      if (nums2[n2] > 0) {
        arr.push(nums2[n2]);
        n2++;
        continue;
      }
    }
  }
  return arr;
}

var merge2 = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (k >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i--]
    } else {
      if (j >= 0) {
        nums1[k] = nums2[j--]
      }
    }
    k--
  }
  return nums1;
}

console.log(merge2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge2([1, 2, 3,], 6, [2, 5, 6, 6, 8], 5)); 