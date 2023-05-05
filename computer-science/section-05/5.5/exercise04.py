from exercise02 import Stack

class StackOverflow(Exception):
    pass

class LimitStack(Stack):
    def __init__(self,limit):
        super().__init__()
        self.limit = limit
        
    def push(self, value):
        if super().size() + 1 > self.limit:
            raise StackOverflow()
        super().push(value)

