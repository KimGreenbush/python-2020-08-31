from django.db import models


class UserManager(models.Manager):
    def basic_validator(self, post_data):
        print('running basic_validator!')
        errors = {}
        # add keys and values to errors dictionary for each invalid field

        if len(post_data['user_name']) < 2:
            print('found an invalid field!')
            errors["user_name"] = "User name should be at least 2 characters"
        # check if user_name is unique

        user_list = User.objects.filter(name=post_data['user_name'])
        print('user_list: ', user_list)
        if (len(user_list) > 0):
            print('found a user with that name!')
            # generate error message
            errors['user_name_unique'] = 'Name taken, try another user name'

        if len(post_data['user_pic']) < 10:
            print('found an invalid field!')
            errors["user_pic"] = "User profile url should be at least 10 characters"
        return errors


class User(models.Model):
    name = models.CharField(max_length=255)
    profile_pic_url = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    liked_pets = models.ManyToManyField('Pet', related_name='users_who_liked')
    objects = UserManager()


class PetManager(models.Manager):
    def pet_validator(self, post_data):
        print('running basic_validator!')
        errors = {}
        # add keys and values to errors dictionary for each invalid field
        if len(post_data['pet_name']) < 2:
            print('found an invalid field!')
            errors["pet_name"] = "Pet name should be at least 2 characters"
        if len(post_data['pet_pic']) < 10:
            print('found an invalid field!')
            errors["pet_pic"] = "Pet url should be at least 10 characters"
        return errors


class Pet(models.Model):
    pet_name = models.CharField(max_length=255)
    pet_pic_url = models.CharField(max_length=255)
    is_sold = models.BooleanField(default=False)
    posted_by = models.ForeignKey(
        User, related_name='pets', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # users_who_liked
    objects = PetManager()
