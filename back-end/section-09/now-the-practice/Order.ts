import Client from './Client';
import Item from './Item';

class Order {
  private _client: Client;
  private _items: Item[] = [];
  private _paymentMethod: string;
  private _discount = 0;

  constructor(
    client: Client,
    items: Item[],
    paymentMethod: string,
    discount: number
  ) {
    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  get client(): Client {
    return this._client;
  }

  get items(): Item[] {
    return this._items;
  }
  
  get paymentMethod(): string  {
    return this._paymentMethod;
  }
  
  get discount(): number {
    return this._discount;
  }

  calculateTotal(): number  {
    return this._items.reduce((total, Item) => total + Item.price, 0)
  }

  calculateTotalWithDiscount(): number {
    return this.calculateTotal() * (1 - this.discount);
  }
}

const client = new Client('João');

const sandwich = new Item('Sanduíche Natural', 5.00);
const juice = new Item('Suco de Abacaxi', 5.00);
const dessert = new Item('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order.calculateTotalWithDiscount());