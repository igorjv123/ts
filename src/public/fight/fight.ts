// create async function fight
import Fighter from "./fighter";
import ImprovedFighter from "./improvedFighter";

// async function fight starts game
// get 2 fighters(objects) in parameters and pont(array)
// they are created in index.js
async function fight(fighter, improvedFighter, point) {
  // Додано spread
  let pointInfo = ["Points: ", ...point];
  console.log(pointInfo);
  let i = 0;
  document
    .querySelector("#firstfighter")
    .addEventListener("click", function onClick(e) {
      improvedFighter.doubleHit(fighter, point[i]);
      if (fighter.health <= 0) {
        fighter.knockout();
        return;
      }
      i++;
      chekPoints(i);

      e.preventDefault();
      e.stopPropagation();
    });

  document
    .querySelector("#secondfighter")
    .addEventListener("click", function onClick(e) {
      fighter.hit(improvedFighter, point[i]);
      if (improvedFighter.health <= 0) {
        improvedFighter.knockout();
        return;
      }
      i++;
      chekPoints(i);

      e.preventDefault();
      e.stopPropagation();
    });

  // checks point and displays message if their amount >= 0
  function chekPoints(i) {
    if (i >= point.length) {
      console.log("Points are over! Won the friendship:)");
    }
  }
}

export default fight;
