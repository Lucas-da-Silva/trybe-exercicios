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

const battleMembers = { mage, warrior, dragon };

// #1
const dragonDamage = () => Math.floor((Math.random() * (dragon.strength - 15)) + 15);
// #2
const warriorDamage = () => Math.floor((Math.random() * (15 * warrior.weaponDmg)) + warrior.strength);
//#3
const mageDamage = () => {
  const atackMage = { damage: Math.floor((Math.random() * (22.5 * 2)) + mage.intelligence), mana: 15 };
  if (atackMage.mana < 15) {
    atackMage.damage = 'Não possui mana suficiente';
  }
  return atackMage;
};


module.exports = { dragonDamage, warriorDamage, mageDamage };