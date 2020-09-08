from django.shortcuts import redirect, render

from .models import Food


# Create your views here.
def index(request):
    # do some magic
    context = {
      'foodzzz': Food.objects.all()
    }
    return render(request, 'index.html', context)


def create_food(request):
    print(request.POST)
    print('Creating food!')
    food = Food.objects.create(
        name=request.POST['food_name'],
        price=request.POST['food_price'],
        desc=request.POST['food_description']
    )
    print(food)
    return redirect('/')

# from oven.models import Food

# cookie = Food.objects.create(
#     name='Chocolate Chip Cookie',
#     price=999.99,
#     desc='Yummmmy!',
# )

# Food.objects.create(
#     name='Delux Pizza',
#     price=300.00,
#     desc='Healthy',
# )
