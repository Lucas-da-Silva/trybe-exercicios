function invertido(n) {
    for (let index = 1; index <= n; index += 1) {
      let result = "";

      for (let espacosContador = 1; espacosContador <= n - index; espacosContador += 1) {
        result += " "
      }

      for (let asteristicosContador = 1; asteristicosContador <= index; asteristicosContador += 1) {
        result += "*"
      }

      console.log(result)
    }
  }

invertido(5);