import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContext';

function MyProvider({ children }) {
  /* Passo 1 */
  const [orderList, setOrderList] = useState({
    comida: [],
    bebida: [],
    sobremesa: [],
  });

  const [updateCart, setUpdateCart] = useState(false);

  const showCart = () => {
    if (updateCart) {
      setUpdateCart(false);
    } else {
      setUpdateCart(true);
    }
  };

  /* Passo 8 */
  const removeItemFromList = (orderState, indexPresentInList, itemType) => {
    setOrderList({
      ...orderList,
      [itemType]: orderState.filter((_, index) => index !== indexPresentInList),
    });
  };

  /* Passo 9 */
  const updateValueItemInList = (orderState, indexPresentInList, newItem) => {
    setOrderList({
      ...orderList,
      [newItem.itemType]: orderState.map(
        (item, index) => (index === indexPresentInList ? newItem : item),
      ),
    });
  };

  /* Passo 7 */
  const manageItemsInList = (newItem) => {
    const noQuantity = 0;
    const orderState = orderList[newItem.itemType];
    const indexPresentInList = orderState.findIndex((e) => e.id === newItem.id);
    if (Number(newItem.quantity) === noQuantity) {
      return removeItemFromList(
        orderState,
        indexPresentInList,
        newItem.itemType,
      );
    }
    updateValueItemInList(orderState, indexPresentInList, newItem);
  };

  /* Passo 6 */
  const addItemToList = (newItem) => {
    setOrderList({
      ...orderList,
      [newItem.itemType]: [...orderList[newItem.itemType], newItem],
    });
  };

  /* Passo 2 */
  const handleChange = ({ target }, itemName, itemPrice, itemType) => {
    /* Passo 3 */
    const { value } = target;

    const newItem = {
      id: itemName,
      quantity: value,
      totalPrice: value * itemPrice,
      itemType,
    };

    /* Passo 4 */
    const isPresentInList = orderList[itemType].some(
      ({ id }) => id === itemName,
    );

    /* Passo 5 */
    if (!isPresentInList) {
      return addItemToList(newItem);
    }
    manageItemsInList(newItem);
  };

  return (
    <MyContext.Provider
      value={ { handleChange, orderList, updateCart, showCart } }
    >
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MyProvider;
