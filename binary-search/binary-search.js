"use strict";

// Complete this algo
/*
TODOS: * binarySearch is a function that takes an array and a target value. If the target is in the array, return true. Otherwise, return false.

! * EDGE CASES:
! * What if empty array?
! * What if we pass in not an array into the first param?
! * What if multi-dimensional array?
! * What if we pass in a value that isn't a number(like if you pass in a target that is "6" but looking for 6) or target value is an array?
*/

// const binarySearch = (array, target) => {
// 	//if empty array, return false
// 	if(!array.length) return false;

// 	//what if multidim array

// 	//else loop through the array
// 	for(let i = 0; i < array.length; i++){
// 		if(array[i] === target){
// 			return true;
// 		}
// 	}

// 	return false;

// };

// const binarySearch = (array, target) => {
// 	if()

// }

const binarySearch = (array, target) => {
  return array.some((row) => {
    if (Array.isArray(row)) {
      return binarySearch(row, target);
    }
    return row === target;
  });

  //   if (array.filter(Array.isArray).length) {
  //     return array.some((row) => row.includes(target));
  //   } else {
  //     return array.includes(target);
  //   }

  // 	let targetArray = array.includes(target);
  //   return targetArray;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
