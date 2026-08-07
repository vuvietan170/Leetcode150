var removeDuplicates = function (nums) {
    if (nums.length == 0) return 0;
    let k = 1;
    for (i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
// testcase
let num = [1, 2, 2, 3, 3, 3, 4, 5];
removeDuplicates(num);
console.log(num);
