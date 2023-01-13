import IAgenda from "./interfaces/IAgenda";
import ITennis from "./interfaces/ITennis";
import norms from "./norms/normsOfUse";
import Block from "./Block";

class BlockTenis extends Block {
  public tennisData: ITennis = norms.tennis;
  
  reserve<ITennis>(reservationTime: Date): IAgenda<ITennis> {
    const protocol = (Math.random() + 1).toString(30).substring(3);
    return {
      protocol,
      date: reservationTime,
      rules: this.tennisData as unknown as ITennis
    }
  }
}

export default BlockTenis;