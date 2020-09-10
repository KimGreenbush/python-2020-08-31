from django.shortcuts import redirect, render

from .models import *


# Create your views here.
def index(request):
    # do some magic
    context = {
        'foodzzz': Food.objects.all(),
        'chefzz': Chef.objects.all(),
        'categoriez': Category.objects.all()
    }
    return render(request, 'index.html', context)


def create_food(request):
    print(request.POST)
    # Get "Chef" instance
    chef_instance = Chef.objects.get(id=request.POST['chef_id'])
    print('Creating food!')
    food = Food.objects.create(
        name=request.POST['food_name'],
        price=request.POST['food_price'],
        desc=request.POST['food_description'],
        prepared_by=chef_instance
    )
    print(food)
    return redirect('/')


def create_chef(request):
    print(request.POST)
    print('Creating a chef!')
    chef = Chef.objects.create(
        name=request.POST['chef_name'],
        specialty=request.POST['chef_specialty']
    )
    print(chef)
    return redirect('/')


def create_category(request):
    print(request.POST)
    print('Creating a category!')
    category = Category.objects.create(
        name=request.POST['category_name']
    )
    return redirect('/')


def add_category_to_food(request):
    print(request.POST)
    print('Adding a category to a food!')
    # get instance of food
    this_food = Food.objects.get(id=request.POST['food_id'])
    # get instance of category
    this_category = Category.objects.get(id=request.POST['category_id'])
    # add the relationship
    this_food.categories.add(this_category)
    # this_category.foods.add(this_food)

    return redirect('/')
