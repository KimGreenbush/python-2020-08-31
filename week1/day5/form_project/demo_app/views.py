from django.shortcuts import redirect, render


# Create your views here.
def index(request):
    print('Found the index route!')
    if 'user_name' not in request.session:
        request.session['user_name'] = 'Anonymous'
    if 'fav_drink' not in request.session:
        request.session['fav_drink'] = []
    return render(request, 'index.html')


def login(request):
    print('request.POST: ', request.POST)
    # POST Request
    # do some db stuff

    # name = request.POST['user_namez']
    # request.session['user_name'] = name
    # print(f'The username is {name}')

    print('Logging in the user by adding their name to the session dictionary')
    request.session['user_name'] = request.POST['user_namez']
    # request.session['fav_drink'] = request.POST['fav_drink']
    request.session['fav_drink'].append(request.POST['fav_drink'])
    request.session.save()

    print('Redirecting to the dashboard!')
    return redirect('/dashboard')


def dashboard(request):
    # if 'user_name' not in request.session:
    #     return redirect('/')

    print('Rendering the dashboard!')
    return render(request, 'dashboard.html')


def logout(request):
    print('Logging a user out')
    # del request.session['user_name']
    # del request.session['fav_drink']
    request.session.flush()
    return redirect('/')


def add_drink(request):
    print(request.POST)
    request.session['fav_drink'].append(request.POST['new_drink'])
    request.session.save()
    return redirect('/dashboard')
