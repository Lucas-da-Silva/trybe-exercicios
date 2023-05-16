class Employee:
    def __init__(self, id_num: int, name: str):
        self.id_num = id_num
        self.name = name


class HashMap:
    def __init__(self):
        self._buckets = [[None for _ in range(10)]]

    def get_address(self, id_num: int) -> int:
        return id_num % 10

    def insert(self, employee: Employee):
        address = self.get_address(employee.id_num)
        self._buckets[address].append(employee)

    def get_value(self, id_num: int):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return item.name
        return None

    def has(self, id_num: int) -> bool:
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return True
        return False

    def update_value(self, id_num: int, key: str, name: str):
        address = self.get_address(id_num)
        items = self._buckets[address]
        for i, item in enumerate(items):
            if item.name == key:
                items[i] = name
                self._buckets[address] = items
                return
