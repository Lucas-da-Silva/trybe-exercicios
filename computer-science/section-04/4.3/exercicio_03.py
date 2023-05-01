from random import shuffle
from cronometro import Cronometro


def sort_by_selection(numbers: list[int]) -> list[int]:
    for index in range(len(numbers) - 1):
        min_index = index
        for i in range(index + 1, len(numbers)):
            if numbers[i] < numbers[min_index]:
                min_index = i
            numbers[index], numbers[min_index] = (
                numbers[min_index],
                numbers[index],
            )

    return numbers


def sort_by_insertion(numbers: list[int]) -> list[int]:
    for index in range(1, len(numbers)):
        key = numbers[index]
        new_position = index - 1
        while new_position >= 0 and key < numbers[new_position]:
            numbers[new_position + 1] = numbers[new_position]
            new_position -= 1

        numbers[new_position + 1] = key

    return numbers


for algorithm in (sort_by_selection, sort_by_insertion):
    algorithm_name = algorithm.__name__

    for input in (10_000, 100_000, 1_000_000):

        sorted_numbers = list(range(input))
        reversed_sorted_numbers = list(reversed(sorted_numbers))
        random_numbers = sorted_numbers[:]  # copia dos ordenados
        shuffle(random_numbers)  # embaralha eles

        with Cronometro(
            f"{algorithm_name} com entrada " + f"ordenada de {input} números"
        ):
            algorithm(sorted_numbers)

        with Cronometro(
            f"{algorithm_name} com entrada "
            + f"inversamente ordenada de {input} números"
        ):
            algorithm(reversed_sorted_numbers)

        with Cronometro(
            f"{algorithm_name} com entrada " + f"aleatória de {input} números"
        ):
            algorithm(random_numbers)

        print("*" * 50)
