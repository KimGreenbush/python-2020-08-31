from django.shortcuts import redirect, render

from .models import *


# Create your views here.
def index(request):
    # do some magic
    context = {
        'foodzzz': Food.objects.all(),
        'chefzz': Chef.objects.all()
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
