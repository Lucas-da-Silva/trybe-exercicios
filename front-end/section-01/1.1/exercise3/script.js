const getPlanet = () => {
  const mars = {
    name: 'Mars',
    distanceFromSun: {
      value: 227900000,
      measurementUnit: 'kilometers',
    },
  };
  console.log('Returned planet: ');
  setTimeout(() => console.log(mars), 4000);
};

getPlanet(); // imprime Marte depois de 4 segundos
