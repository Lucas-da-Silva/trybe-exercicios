OK = 1


def verify_max_time_ok(requests: list[int]) -> int:
    time_ok = 0
    for i in range(len(requests) - 1):
        if requests[i] == OK and requests[i + 1] == OK:
            time_ok += 1

    return time_ok

 
print(verify_max_time_ok([0, 1, 1, 1, 0, 0, 1, 1])) # 3
print(verify_max_time_ok([1, 1, 1, 1, 0, 0, 1, 1])) # 4