// Created class ImprovedFighter
// ImprovedFighter inherits propertіes from "Fighter"
// And has new method 'doubleHit', that makes 2 x hit

// Виконано побажання з конструктором
import Fighter from "./fighter";
class ImprovedFighter extends Fighter {
  // doubleHit виправлено
  doubleHit(enemy, point) {
    super.hit(enemy, point * 2);
  }
}
export default ImprovedFighter;
