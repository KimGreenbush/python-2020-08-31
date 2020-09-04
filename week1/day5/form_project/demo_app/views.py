from django.shortcuts import redirect, render


# Create your views here.
def index(request):
    return render(request, 'index.html')


def login(request):
    print(request.POST)
    # POST Request
    print('Logging in the user')
    # do some db stuff
    name = request.POST['user_namez']
    print(f'The username is {name}')
    context = {
      'name_to_use_on_template': name
    }
    return render(request, 'dashboard.html', context)
    # return redirect('/dashboard')


# def dashboard(request):
#     return render(request, 'dashboard.html')
