const { getPokemonDetails } = require("../exercise8/get-pokemon-details");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    getPokemonDetails('Pikachu', (error, message) => {
      expect(error).toEqual(new Error('Não temos esse pokémon para você :('));
      expect(message).toBe(null);
      done();
    });
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    getPokemonDetails('Charmander', (error, message) => {
      const pokemon = "Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember"
      expect(message).toEqual(pokemon);
      expect(error).toBe(null);
      done();
    });
  });
});