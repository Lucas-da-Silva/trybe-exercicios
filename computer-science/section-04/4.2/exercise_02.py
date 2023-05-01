def counts_pairs(n: int) -> int:
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + counts_pairs(n - 1)
    else:
        return counts_pairs(n - 1)
