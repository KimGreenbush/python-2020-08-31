from django.contrib import messages
from django.shortcuts import redirect, render

import bcrypt

from .models import *


# Render templates
def index(request):

    return render(request, 'index.html')


def show_dashboard(request):
    # check if a user is not in session
    if 'uuid' not in request.session:
        return redirect('/')
    context = {
        'user_name': User.objects.get(id=request.session['uuid']).first_name
    }

    return render(request, 'dashboard.html', context)

# Redirect to a url


def register(request):
    print(request.POST)
    # TODO
    # read post data
    errors = User.objects.register_validator(request.POST)
    # validate
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
        # hash the pw
        hash_browns = bcrypt.hashpw(
            request.POST['password'].encode(),
            bcrypt.gensalt()
        ).decode()
        print('hash_browns: ', hash_browns)
        # create a user
        created_user = User.objects.create(
            first_name=request.POST['first_name'],
            last_name=request.POST['last_name'],
            email=request.POST['email'],
            # password=request.POST['password']
            password=hash_browns
        )
        print('created_user.password: ', created_user.password)
        # set them up in session
        request.session['uuid'] = created_user.id
        return redirect('/dashboard')


def logout(request):
    request.session.flush()
    return redirect('/')


def login(request):
    print(request.POST)
    errors = User.objects.login_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
        # check the email in the db
        users_list = User.objects.filter(email=request.POST['email'])
        # set up user in session
        request.session['uuid'] = users_list[0].id
        return redirect('/dashboard')
