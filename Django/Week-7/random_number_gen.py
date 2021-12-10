import random
def random_number_gen(n=5, l=6):
    numbers = set()
    # check range 
    if (n>10**(l-1)*9):
        print(f'no {n} numbers with {l} digits') 
    else:
        # add numbers
        while len(numbers)< n:
            numbers.add(random.randrange(10**(l-1), 10**l))

        # 
        for i in random.sample(numbers, n):
            yield i

# list generator
print(list(random_number_gen()))