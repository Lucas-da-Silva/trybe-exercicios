const newEmployees = () => {
    const employees = {
      id1: 'Pedro Guerra',
      id2: 'Luiza Drumond',
      id3: 'Carla Paiva',
    }
    return employees;
};

const newEmail = (func) => {
    const names = Object.values(func);
    const email = {};
    for (let index = 0; index < names.length; index += 1) {
        email[names[index]] = `${names[index].replace(' ', '_')}@trybe.com`; 
    };
    return email;
};

console.log(newEmail(newEmployees()));
