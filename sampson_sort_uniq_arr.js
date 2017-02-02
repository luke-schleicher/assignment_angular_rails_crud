// retrun a sorted array of only unique values
//
// [1,3,5,9,7,4,6,3,2,45,7,9,6,3,1,3,4,6,7,4,2,12]
// [1,2,3,4,5,6,7,9


// Approach - merge sort but when merging discard duplicate when two items are ==
// Better - quick sort (don't remember how to do this)

var mergeSort = function mergeSort(arr) {
  if(arr.length <= 1) return arr; // Base case

  var left = arr.slice(0, Math.floor(arr.length/2));
  var right = arr.slice(Math.floor(arr.length/2) + 1, arr.length);

  return merge(left, right)
}

var merge = function merge(left, right) {
  var l_end = left.length;
  var r_end = right.length;

  var l_index = 0;
  var r_index = 0;

  var merged = new Array(l_end + r_end);
  var merged_i = 0;
  while(l_index < l_end || r_index < r_end) {
    if(l_index == l_end + 1) {
      for (var i = r_index; i < r_end; i++) {
        merged[merged_i]
      }
    }
  }
}
