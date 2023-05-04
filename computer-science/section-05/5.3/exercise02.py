def shuffle(items: list[int]) -> list[int]:
    answer = []
    div_cards_by_two = len(items) // 2
    for offset in range(div_cards_by_two):
        answer.extend(items[offset::div_cards_by_two])
    return answer

print(shuffle([2, 6, 4, 5])) # [2, 4, 6, 5]
print(shuffle([1, 4, 4, 7, 6, 6])) # [1, 4, 4, 7, 6, 6]