from abc import ABC, abstractmethod
from collections.abc import Iterator, Iterable


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return f"<{self.valor} de {self.naipe}>"


class EstrategiaIteracao(ABC):
    posicao_inicial = 0

    @abstractmethod
    def proxima_carta(cls, index):
        raise NotImplementedError


class EstrategiaRegular(EstrategiaIteracao):
    posicao_inicial = 0

    @classmethod
    def proxima_carta(cls, index):
        return index + 1


class EstrategiaReversa(EstrategiaIteracao):
    posicao_inicial = -1

    @classmethod
    def proxima_carta(cls, index):
        return index - 1


class IteradorDoBaralho(Iterator):
    def __init__(self, baralho, estrategia):
        self._baralho = baralho
        self._estrategia = estrategia
        self._carta_atual = self._estrategia.posicao_inicial

    def __next__(self):
        try:
            carta = self._baralho[self._carta_atual]
        except IndexError:
            raise StopIteration()
        else:
            self._carta_atual = self._estrategia.proxima_carta(
                self._carta_atual
            )
            return carta


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self, estrategia):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self._estrategia = estrategia

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return IteradorDoBaralho(self._cartas, self._estrategia)

    def __str__(self) -> str:
        return f"{[carta for carta in self]}"
