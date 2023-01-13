import Club from "./Club";
import BlockSoccer from "./BlockSoccer";
import BlockTennis from "./BlockTennis";

const club = new Club();
const blockSoccer = new BlockSoccer();
const blockTennis = new BlockTennis();

club.addBlock(blockSoccer);
club.addBlock(blockTennis);

console.log(blockSoccer.reserve(new Date('01/20/2023')));
console.log(blockTennis.reserve(new Date('01/30/2023')));
