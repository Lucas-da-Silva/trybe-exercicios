import math


LITER_CAN_OF_PAINT = 18
CAN_PRICE = 80
METER_PAINT_COVERAGE = 3


def paint_costs(area):
    required_liters = area / METER_PAINT_COVERAGE
    required_cans = math.ceil(required_liters / LITER_CAN_OF_PAINT)
    return required_cans, required_cans * CAN_PRICE
