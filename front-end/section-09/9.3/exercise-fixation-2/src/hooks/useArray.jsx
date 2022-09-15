import { useState } from 'react';

const useArray = (initialValue) => {
  const add = (todo) => {
    setArrayList({
      ...arrayList,
      value: [...arrayList.value, todo],
    });
  }

  const remove = (index) => {
    const newArray = arrayList.value.filter((_, i) => i !== index);
    setArrayList({
      ...arrayList,
      value: newArray,
    });
  }

  const [arrayList, setArrayList] = useState({
    value: initialValue,
    add: add,
    remove: remove,
  });
  
  return arrayList;
};

export default useArray;
