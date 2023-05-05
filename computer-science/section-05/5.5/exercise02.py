from linked_list import LinkedList


class Stack:
    def __init__(self):
        self.__data = LinkedList()

    def push(self, value):
        self.__data.insert_last(value)

    def pop(self):
        if self.is_empty():
            return None
        self.__data.remove_last()

    def peek(self):
        return self.__data.get_element_at(len(self.__data))

    def is_empty(self):
        return not self.size()
    
    def size(self):
        return len(self.__data)
