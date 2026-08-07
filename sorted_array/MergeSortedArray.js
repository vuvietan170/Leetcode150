//gộp 2 mảng nguyên đã sắp xếp, với m là số phần tử thực sự có giá trị của nums1 và n là của nums2
//kết quả được lưu trực tiếp vào nums1
var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};
//test case
let nums1 = [3, 4, 5, 0, 0, 0];
merge(nums1, 3, [1, 2, 3], 4);
console.log(nums1);
