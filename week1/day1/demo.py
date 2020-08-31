# PYTHON SYNTAX
# 1. READABILITY 
# 2. SYNTAX ISN'T AS HARD / VERSATILE
# 3. WIDELY USED / A LOT OF COMMUINTY SUPPORT

# INDENTATION (NESTING)

# DATA TYPES
# PRIMITIVE DATA
check = False
other_check = True

integers = 3 # WHOLE NUMBERS
floats = 3.3 # DECIMAL NUMBERS

name = "Edward"

# COMPOSITE DATA
# INDEX / VALUES
nameList = [ "Edward", "Tim", "John", "Red"] # STORE COMMON DATA TYPES


# RANGE ITERATES THROUGH NUMBERS / INTEGERS
# for i in range(0 , len(nameList)):
#     print(nameList[i])

# for i in nameList:
#     print(i)

capitals = {
    "Washington":"Olympia",
    "California":"Sacramento",
    "Idaho":"Boise",
    "Illinois":"Springfield",
    "Texas":"Austin",
    "Oklahoma":"Oklahoma City",
    "Virginia":"Richmond"
}

def countingDojoWay():
    red = 0
    for i in range (0 , 101):
        if i % 10  == 0:
            red = "color"
        elif i % 5 == 0:
            print("CODING")
        else:
            print(i)
    print(red)

countingDojoWay()



# KEYS / VALUES
something1 = {
    "key" : "value",
    "email" : "ed@gmail.com",
    "password" : "foelwaif;ojewa33213",
    "name" : "Edward Im",
    "address" : {
        "street" : "123 Way St.",
        "city" : "Boise" ,
        "state" : "ID", 
        "zip_code" : 83777
    } ,
    "fav_colors" : [ "red", "green", "blue"],
    "children" : [
        {
            "name" : "child1",
            "age" : 5
        },
        {
            "name" : "child2",
            "age" : 3
        }
    ],
    "age" : 29,
    "phone_num" : 5551234,
    "user_temp" : 98.7
}

# something[3]

# print(something1['age'] )

# TYPE CASTING
# LOOPS
#             start, end, increment
# for i in range( 0 ,11 , 1):
#     print(i)
#     print("inside the for loop finished")
        #    start, end, increment = 1
# for x in range(0 , 10):
#     print(x)

# for j in range( 10, -1, -1 ):
#     print(j)

# for i in range( 0, len(nameList) ):
#     # CONDITIONALS
#     if i == 0:
#         print("Something is zero")
#     elif i !=0:
#         print("Something is not zero")
# print("END OF LOOP")

# FUNCTIONS (DEFINING VS EXECUTING)

def add( a, b = 0 , c = 0 ):
    num = a + b + c
    return num

print(add(3 , 6, 10))

def sleep( time = 5 ):
    print("Sleep for " + time + "minutes")

# sleep(20)

