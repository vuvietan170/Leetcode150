var rotate = function (nums, k) {
    k = k % nums.length; // nếu k lớn hơn độ dài của mảng thì sẽ lấy phẩn dư ra để làm vị trí xoay
    const last = nums.splice(nums.length - k, k);
    nums.unshift(...last);
};
//testcase
let num = [1, 2, 3, 4, 5, 6];
rotate(num, 3);
console.log(num);
