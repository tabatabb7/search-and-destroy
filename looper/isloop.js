"use strict";

//Complete this algo

const isLoop = (linkedlist) => {
  //traverse through nodes
  console.log(linkedlist.addToHead);
  console.log(linkedlist.head);
  let variable1 = linkedlist.head;
  let variable2 = linkedlist.head.next;
  while (variable1 !== variable2) {
    if (variable1 === null || variable2 === null) {
      return false;
    }
    variable1 = variable1.next;
    variable2 = variable2.next.next;
  }
  return true;
  // //   while (linkedlist !== null) {
  // //     newArray.push(linkedlist.value);
  // //     linkedlist = linkedlist.next;
  // //     console.log("linkedlist --->", linkedlist);
  // //   }
  //   console.log("new array --->", newArray);
  //   return true;
  //check for 2 next pointers
  //stop and return true
  //else return false
  //if null return false
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
