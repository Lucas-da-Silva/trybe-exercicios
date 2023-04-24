def find_first_bad_version(versions: list[bool]) -> int:
    low_index, high_index = 0, len(versions) - 1

    while high_index >= low_index:
        middle_index = (high_index + low_index) // 2

        if versions[middle_index] is False:
            high_index = middle_index - 1
        else:
            low_index = middle_index + 1

    return low_index
