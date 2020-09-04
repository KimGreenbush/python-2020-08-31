from django.shortcuts import HttpResponse, redirect, render


# Create your views here.
def index(request):
    print('hi')
    # magic
    # db calls
    # CRUD
    # CREATE READ UPDATE DELETE
    # return HttpResponse('<h1>Thursyay</h1>')
    contextzzz = {
        "name": "Nick",
        "favorite_color": "turquoise",
        "pets": ["Bruce", "Fitz", "Georgie"]
    }
    return render(request, 'index.html', contextzzz)


def hello(request):
    # return HttpResponse('Hello!')
    print('Redirecting to the root route!')
    # do some stuff
    # create a user
    # create a product
    # create a login
    return redirect('/')


def show_color(request, color_var):
    print('color', color_var)
    context = {
        'color': color_var
    }
    return render(request, 'color.html', context)
