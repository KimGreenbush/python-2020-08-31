# What is OOP? Object Oriented Programming

# What is an object?
# keep data in one place, container, key/values

# Why use an object?
# - organize our code

kim_first_name = 'Kim'
kim_last_name = 'G'

gary_first_name = 'Gary'
gary_last_name = 'Johnson'

paul = {
    # 'key': value
    'first_name': 'Paul',
    'last_name': 'F'
}

raoul = {
    # 'key': value
    'first_name': 'Raoul',
    'last_name': 'S'
}

# DRY - Don't Repeat Yourself


class Person:
    def __init__(self, first_name_parameter, last_name_parameter):
        self.first_name = first_name_parameter
        self.last_name = last_name_parameter

    def __str__(self):
        return f'First Name: {self.first_name} Last Name: {self.last_name}'

    def __repr__(self):
        return str(self)


steven = Person('Steven', 'W')
print(steven.first_name)
print(steven.last_name)

print(steven)
print([steven])

# f string

joshua = Person('Joshua', 'M')
print(joshua.first_name)
print(joshua.last_name)
