from random import shuffle
from cronometro import Cronometro


def sort_by_merge(numbers: list[int]) -> list[int]:
    """
    Sorts a list of numbers using the merge sort algorithm.

    Args:
        numbers (list[int]): The list of numbers to be sorted.

    Returns:
        list[int]: The sorted list of numbers.
    """
    if len(numbers) <= 1:
        return numbers

    middle = len(numbers) // 2
    left = numbers[:middle]
    right = numbers[middle:]

    left = sort_by_merge(left)
    right = sort_by_merge(right)

    return merge(left, right)


def merge(left: list[int], right: list[int]) -> list[int]:
    """
    Merges two lists of numbers into a single sorted list.

    Args:
        left (list[int]): The left list of numbers.
        right (list[int]): The right list of numbers.

    Returns:
        list[int]: The sorted list of numbers.
    """
    result = []
    left_index = 0
    right_index = 0

    while left_index < len(left) and right_index < len(right):
        left_number = left[left_index]
        right_number = right[right_index]

        if left_number < right_number:
            result.append(left_number)
            left_index += 1
        else:
            result.append(right_number)
            right_index += 1

    result += left[left_index:]
    result += right[right_index:]

    return result


def sort_by_buble(numbers: list[int]) -> list[int]:
    """
    Sorts a list of numbers using the buble sort algorithm.

    Args:
        numbers (list[int]): The list of numbers to be sorted.

    Returns:
        list[int]: The sorted list of numbers.
    """
    for i in range(len(numbers)):
        for j in range(len(numbers) - 1):
            if numbers[j] > numbers[j + 1]:
                numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]

    return numbers


for algorithm in (sort_by_buble, sort_by_merge):
    algorithm_name = algorithm.__name__

    numbers = list(range(10_000))
    shuffle(numbers)

    with Cronometro(algorithm_name):
        algorithm(numbers)
