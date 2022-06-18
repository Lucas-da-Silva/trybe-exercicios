const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  // #1
  const delivery = Object.values(order.order.delivery)[0];
  const address = Object.values(order.address)[0];
  const number = Object.values(order.address)[1];
  const ap = Object.values(order.address)[2];
  return `Olá ${delivery}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${address}, N°: ${number}, AP: ${ap}`;
};

console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  // #2
  order.name = "Lucas da Silva";
  order.payment.total = 50;
  const pizza1 = Object.keys(order.order.pizza)[0];
  const pizza2 = Object.keys(order.order.pizza)[1];
  const drink = Object.values(order.order.drinks.coke)[0];
  return `Olá ${order.name}, o total do seu pedido de ${pizza1}, ${pizza2} e ${drink} é R$ ${order.payment.total},00.`;
};

console.log(orderModifier(order));
