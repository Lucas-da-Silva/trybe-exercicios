import Block from './Block';
import ISoccer from './interfaces/ISoccer';
import norms from './norms/normsOfUse';
import IAgenda from './interfaces/IAgenda';

class BlockSoccer extends Block {
  public soccerData: ISoccer = norms.soccer;
  
  reserve<ISoccer>(reservationTime: Date): IAgenda<ISoccer> {
    const protocol = (Math.random() + 1).toString(30).substring(3);
    return {
      protocol,
      date: reservationTime,
      rules: this.soccerData as unknown as ISoccer,
    };
  }
}

export default BlockSoccer;
