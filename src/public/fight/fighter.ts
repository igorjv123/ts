// Created class Fighter
// Fighter includes parameters and methods of fighter
// Method 'knockout' includes promis, that resolves after half second timeout
export interface IFighter{
  name: string;
  health: number;
  power: number;
  setDamage: (damage:number) => void;
  doubleHit?: (fighter: object, point:number) => void;
  hit:(enemy:IFighter, point:number)=>void;
  knockout:()=>void;
}
export class Fighter implements IFighter{
  power: number;
  name: string;
  health: number;
constructor(name:string, health:number, power:number) {
  this.name = name;
  this.health = health;
  this.power = power;
}
setDamage(damage = 0) {
  this.health -= damage;
}

hit(enemy:IFighter, point:number) {
  enemy.setDamage(this.power * point);
  console.log(`${this.name} hited ${enemy.name} on ${this.power * point} hp`);
}

knockout() {
  let myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve(`${this.name} lose! with 0 hp`);
    }, 500);
  });
  return myPromise
    .then(successMessage=> {
      console.log(successMessage);
    })
    .catch(error => {
      console.log(error.message);
    });
}
}

//console.log(fighter.setDamage(50));
export default Fighter;
//let fighter = new Fighter("Vasia", "100", "1KW/h");
