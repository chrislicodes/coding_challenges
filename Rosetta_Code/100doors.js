// There are 100 doors in a row that are all initially closed.

// You make 100 passes by the doors.

// The first time through, visit every door and  toggle  the door  (if the door is closed,  open it;   if it is open,  close it).

// The second time, only visit every 2nd door   (door #2, #4, #6, ...),   and toggle it.

// The third time, visit every 3rd door   (door #3, #6, #9, ...), etc,   until you only visit the 100th door.

// Task
// Answer the question:   what state are the doors in after the last pass?   Which are open, which are closed?

// We will look for numbers with perfect squares, Reasoning:

/* It is a mathematical game I heard time ago. If the door's number is a perfect square,
 then its state is open. Otherwise it is close. The reason is the commutative property of the product:
  if the j-th person toggles a door after i steps, then the i-th person toggles the same door after j steps.
   This way the door has even switches if its number is not a perfect square. 
   Otherwise the door has odd switches.

https://www.researchgate.net/post/What_formula_is_used_for_the_100_doors_problem2
*/

function getFinalOpenedDoors(numDoors) {
  const doors = [...Array(numDoors).keys()].map((x) => x + 1); //create Doors
  const openDoors = [];

  doors.forEach((door) => {
    const sqrt = Math.sqrt(door);

    if (sqrt === (sqrt | 0)) {
      // Check for perfect square
      openDoors.push(door);
    }
  });

  return openDoors;
}

console.log(getFinalOpenedDoors(100));
