def higher_number_aux(numbers: list[int], size):
    if size == 1:
        return numbers[0]
    else:
        highest_of_rest_of_list = higher_number_aux(numbers, size - 1)
        if highest_of_rest_of_list > numbers[size - 1]:
            return highest_of_rest_of_list
        else:
            return numbers[size - 1]


def higher_number(numbers: list[int]):
    size = len(numbers)
    return higher_number_aux(numbers, size)
