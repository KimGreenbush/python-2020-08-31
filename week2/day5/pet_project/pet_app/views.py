from django.shortcuts import redirect, render

from .models import *


# Create your views here.
def index(request):
    return render(request, 'index.html')


def show_the_pets(request):
    # check if the key is in the session dictionary
    if 'uuid' not in request.session:
        print('Not allowed!')
        return redirect('/')

    context = {
        'logged_in_user': User.objects.get(id=request.session['uuid']),
        # 'all_pets_list': Pet.objects.all(),
        'all_pets_for_sale': Pet.objects.filter(is_sold=False),
        'all_pets_sold': Pet.objects.filter(is_sold=True),
    }
    return render(request, 'pets.html', context)


def login(request):
    print(request.POST)
    # create a user
    created_user = User.objects.create(
        name=request.POST['user_name'],
        profile_pic_url=request.POST['user_pic']
    )
    print('User created!', created_user)
    # set them up in session
    request.session['uuid'] = created_user.id
    return redirect('/pets')


def list_pet(request):
    # get logged in user
    logged_in_user = User.objects.get(id=request.session['uuid'])
    # create a pet
    created_pet = Pet.objects.create(
        pet_name=request.POST['pet_name'],
        pet_pic_url=request.POST['pet_pic'],
        posted_by=logged_in_user,
    )
    return redirect('/pets')


def sell_pet(request, pet_id):
    # update the pet to sold
    # get the pet
    pet = Pet.objects.get(id=pet_id)
    pet.is_sold = True
    pet.save()
    return redirect('/pets')
