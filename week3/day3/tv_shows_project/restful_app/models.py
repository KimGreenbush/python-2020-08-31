from datetime import datetime

from django.db import models


class ShowManager(models.Manager):
    def show_validator(self, post_data):
        errors = {}
        # title
        if len(post_data['title']) < 2:
            errors['title'] = 'Title must be at least 2 characters.'
        # network
        if len(post_data['network']) < 3:
            errors['network'] = 'Network must be at least 3 characters.'
        # release_date

        # should be in the past

        # todays date
        today = datetime.today()
        # print('today: ', today)
        # print(type(today))
        # the date from the form
        # print("post_data['release_date']: ", post_data['release_date'])
        # print(type(post_data['release_date']))
        date_from_form = datetime.strptime(
            post_data['release_date'], '%Y-%m-%d')
        # print('date_from_form: ', date_from_form)
        # print('print(type(date_from_form)): ', print(type(date_from_form)))
        # print('*'*10)
        # print(date_from_form < today)
        if date_from_form > today:
            # date is in the future
            errors['release_date'] = 'Date should be in the past.'

        # description
        if len(post_data['description']) != 0:
            if len(post_data['description']) < 10:
                errors['description'] = 'Description must be at least 10 characters.'

        potential_matches = Show.objects.filter(title=post_data['title'])
        if len(potential_matches) > 0:
            errors['title_matches'] = 'Title must be unique.'
        return errors

    def edit_show_validator(self, post_data, show_id):
        errors = {}
        if len(post_data['title']) < 2:
            errors['title'] = 'Title must be at least 2 characters.'
        if len(post_data['network']) < 3:
            errors['network'] = 'Network must be at least 3 characters.'
        today = datetime.today()
        date_from_form = datetime.strptime(
            post_data['release_date'], '%Y-%m-%d')
        if date_from_form > today:
            errors['release_date'] = 'Date should be in the past.'

        if len(post_data['description']) != 0:
            if len(post_data['description']) < 10:
                errors['description'] = 'Description must be at least 10 characters.'

        # check for title uniqueness
        show_to_edit = Show.objects.get(id=show_id)
        # check the db for matching titles
        potential_matches = Show.objects.filter(title=post_data['title'])
        if len(potential_matches) > 0:
            if potential_matches[0].id != show_to_edit.id:
                errors['title_matches'] = 'Title must be unique.'

        # grab the original show from the db
        # if the original name is the same as the user is sending, thats okay
        return errors


# Create your models here.
class Show(models.Model):
    title = models.CharField(max_length=255)
    network = models.CharField(max_length=255)
    release_date = models.DateField()
    description = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ShowManager()
