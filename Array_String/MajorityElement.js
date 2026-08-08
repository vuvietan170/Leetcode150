var majorityElement = function (nums) {
    let count = new Map();
    for (let num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
        if (count.get(num) >= nums.length / 2) {
            return num;
        }
    }
};
//testcase
let num = [1, 2, 1, 2, 1, 2, 2];
console.log(majorityElement(num));
``