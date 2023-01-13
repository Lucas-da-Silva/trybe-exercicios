import Character from './Character';
import MeleeCharacter from './MeleeCharacter';
import LongRangeCharacter from './LongRangeCharacter';

function characterPresentation(character: Character) {
  character.talk();
  character.specialMove();
}

const yoshi = new MeleeCharacter('yoshi', 'Super dragon');
const samus = new LongRangeCharacter('samus', 'Zero Laser');

characterPresentation(yoshi);
characterPresentation(samus);
