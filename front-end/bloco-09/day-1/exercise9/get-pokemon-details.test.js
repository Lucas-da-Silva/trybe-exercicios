// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("../exercise8/get-pokemon-details");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    getPokemonDetails(({ name }) => name === 'Pikachu', (potentialError, pokemon) => {
      try{
        expect(potentialError).toThrow();
        done();
      } catch (error) {
        done(error);
      }
    })
  });

  // it("retorna um pokemon que existe no banco de dados", () => {
  //   // Escreva aqui seu código
  // });
});
