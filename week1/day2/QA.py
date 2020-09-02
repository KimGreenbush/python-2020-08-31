# def iterateDictionary(students_param):
#     for student in students_param:
#         for key, value in student.items():
#             # print(key, value)
#             print(f'{key} - {value},', end='')
#         print('')


def iterateDictionary(students_param):
    for studentzzz in students_param:
        print(
            f'first_name - {studentzzz["first_name"]}, last_name - {studentzzz["last_name"]}')


students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'},
    {'first_name': 'Mark', 'last_name': 'Guillen'},
    {'first_name': 'KB', 'last_name': 'Tonel'}
]

# iterateDictionary(students)
# should output: (it's okay if each key-value pair ends up on 2 separate lines;

# bonus to get them to appear exactly as below!)
# first_name - Michael, last_name - Jordan
# first_name - John, last_name - Rosales
# first_name - Mark, last_name - Guillen
# first_name - KB, last_name - Tonel
