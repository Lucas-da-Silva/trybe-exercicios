const { dragonDamage, warriorDamage, mageDamage } = require('../exercise5/script');

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};
  
const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};  
  
const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const gameActions = { 
  turnWarrior: (func) => {
  // #1
  const damageWarrior = func;
  dragon.healthPoints -= damageWarrior;
  if(warrior.damage !== undefined) {
    warrior.damage += damageWarrior;
  } else {
    warrior.damage = damageWarrior;
  }
  return warrior;
  }, turnMage: (func) => { // #2
    const damageMage = func.damage;
    dragon.healthPoints -= damageMage;
    if(mage.damage !== undefined) {
      mage.damage += damageMage;
    } else {
      mage.damage = damageMage;
    }
    mage.mana -= func.mana;
    return mage;
  }, turnDragon: (func) => { // #3
    const damageDragon = func;
    warrior.healthPoints -= damageDragon;
    mage.healthPoints -= damageDragon;
    if(dragon.damage !== undefined) {
      dragon.damage += damageDragon;
    } else {
      dragon.damage = damageDragon;
    }
    return dragon;
  }, battleMembers: () => { // #4
    const allTurn = {warrior: gameActions.turnWarrior(warriorDamage()), mage: gameActions.turnMage(mageDamage()), dragon: gameActions.turnDragon(dragonDamage())};
    return allTurn;
  }
};

console.log(gameActions.battleMembers());