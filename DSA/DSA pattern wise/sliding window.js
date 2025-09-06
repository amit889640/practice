// find max sum of subarray
// brute force solution

/*
There are 4 type of problem :- 
1. Constant window 
    Find max sum in arr with k element
2. Longest subarr or substr in arr with given condition
3. No of subarr with condition
4. Shortest/Minimum window.

*/

// function maxSum(arr, k ){
//     let max = -Infinity;
//     let n = arr.length;
//     for(i=0;i<n;i++){
//         let sum = 0;
//         for(j=0;j<k;j++){
//             sum+=arr[j+i];
//         }
//         if(max<sum){
//             max =sum;
//         }
//         sum = 0;
//     }
//     return max;
// }

function maxSumWindow(arr, k) {
    let i = 0;
    let sum = 0;
    let n = arr.length;
    let l = 0;
    let r = k;
    while (i < k){
      sum += arr[i];
      i++;
    }
    let max = sum;
    while(i<n &&r<n) {
      sum = sum-arr[l]+arr[r];
        if(sum>max) {
          max=sum;
        }
        l=l+1;
        r=r+1;
        i++;
    }
    return max;
  }
  // console.log(maxSum([100, 200, 300, 400, 500], 2));
  console.log(maxSumWindow([100, -200, 300, 400, -500], 3));