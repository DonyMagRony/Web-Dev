import math

def find_hypotenuse(a, b):
    return math.sqrt(a**2 + b**2)

# Чтение ввода
a = int(input())
b = int(input())

# Нахождение гипотенузы
hypotenuse = find_hypotenuse(a, b)

# Вывод результата
print(hypotenuse)
