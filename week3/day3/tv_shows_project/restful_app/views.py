import datetime

from django.contrib import messages
from django.shortcuts import redirect, render

from .models import Show


# Pages
def index(request):
    return redirect('/shows')


def display_shows(request):
    context = {
        'all_shows': Show.objects.all()
    }
    return render(request, 'shows.html', context)


def new_show(request):
    return render(request, 'shows_new.html')


def show_a_show(request, show_id):
    context = {
        'show': Show.objects.get(id=show_id)
    }
    return render(request, 'show_info.html', context)


def show_edit(request, show_id):
    show = Show.objects.get(id=show_id)
    context = {
        'show': show,
        # 'formatted_release_date': datetime.date(show.release_date)
        'formatted_release_date': show.release_date.strftime('%Y-%m-%d')
    }
    return render(request, 'show_edit.html', context)

# Process


def create_a_show(request):
    print(request.POST)
    # run validations first
    errors_dictionary = Show.objects.show_validator(request.POST)
    if len(errors_dictionary) > 0:
        for key, value in errors_dictionary.items():
            messages.error(request, value)
        return redirect('/shows/new')

    # create a show
    created_show = Show.objects.create(
        title=request.POST['title'],
        network=request.POST['network'],
        release_date=request.POST['release_date'],
        description=request.POST['description']
    )
    print(created_show)
    return redirect(f'/shows/{created_show.id}')


def show_destroy(request, show_id):
    delete_me = Show.objects.get(id=show_id)
    delete_me.delete()

    return redirect('/shows')


def show_update(request, show_id):
    # call the validator
    errors_dictionary = Show.objects.edit_show_validator(request.POST, show_id)
    if len(errors_dictionary) > 0:
        for key, value in errors_dictionary.items():
            messages.error(request, value)
        return redirect(f'/shows/{show_id}/edit')

    update_this_show = Show.objects.get(id=show_id)

    update_this_show.title = request.POST['title']
    update_this_show.network = request.POST['network']
    update_this_show.release_date = request.POST['release_date']
    update_this_show.description = request.POST['description']

    update_this_show.save()
    return redirect(f'/shows/{show_id}')
