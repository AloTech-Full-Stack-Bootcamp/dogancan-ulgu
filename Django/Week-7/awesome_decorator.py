def my_awesome_decorator(fun):
  def wrapped(*args):
    # increase value
    _list = [number + 1 for number in args]
    return fun(*_list)
  return wrapped

@my_awesome_decorator
def mod_batch(*numbers):
    # check divide
    return all([True if number % 3 == 0 else False for number in numbers ])

print(mod_batch(9,18,21))
print(mod_batch(9,18,22))
