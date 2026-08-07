var removeElement = function (nums, val) {
    if (nums.length == 0) return 0;
    let k = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
};
//testcase
let num = [1, 2, 3, 2, 5, 6];
removeElement(num, 2);
console.log(num);
