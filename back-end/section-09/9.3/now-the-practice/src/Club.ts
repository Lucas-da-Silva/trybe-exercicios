import Block from './Block';

class Club {
  private blocks: Block[] = [];

  public addBlock(block: Block) {
    this.blocks.push(block);
  }

  public fetchBlock<T extends Block>(index: number): T {
    return this.blocks[index] as T;
  }
}

export default Club;