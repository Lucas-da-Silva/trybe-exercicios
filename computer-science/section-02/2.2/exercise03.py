from exercise02 import Baralho
from collections.abc import Iterator


class IteradorDoBaralhoInverso(Iterator):
    def __init__(self, baralho):
        self._baralho = baralho
        self._carta_atual = -1

    def __next__(self):
        try:
            carta = self._baralho[self._carta_atual]
        except IndexError:
            raise StopIteration()
        else:
            self._carta_atual -= 1
            return carta


class BaralhoInverso(Baralho):
    def __iter__(self):
        return IteradorDoBaralhoInverso(self._cartas)
