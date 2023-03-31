from collections.abc import Iterable, Iterator


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return f"<{self.valor} de {self.naipe}>"


class IteradorDoBaralho(Iterator):
    def __init__(self, baralho):
        self._baralho = baralho
        self._carta_atual = 0

    def __next__(self):
        try:
            carta = self._baralho[self._carta_atual]
        except IndexError:
            raise StopIteration()
        else:
            self._carta_atual += 1
            return carta


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return IteradorDoBaralho(self._cartas)

    def __str__(self) -> str:
        return f"{[carta for carta in self]}"
