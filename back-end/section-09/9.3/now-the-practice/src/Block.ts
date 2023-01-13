import IAgenda from './interfaces/IAgenda';

abstract class Block {
  abstract reserve<T>(reservationTime: Date): IAgenda<T>;
}

export default Block;
