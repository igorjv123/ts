
import "babel-polyfill";
import Fighter from "./fight/fighter";
import ImprovedFighter from "./fight/improvedFighter";
import fight from "./fight/fight";

// Created two fighters and array of points
let fighter = new Fighter("Batman", 100, 1);
let improvedFighter = new ImprovedFighter("Superman", 50, 1);
let point = [25, 3, 16, 18];

// Call function 'fight' that starts game
fight(fighter, improvedFighter, point);
