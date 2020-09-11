from django.db import models


# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=255)
    profile_pic_url = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    liked_pets = models.ManyToManyField('Pet', related_name='users_who_liked')


class Pet(models.Model):
    pet_name = models.CharField(max_length=255)
    pet_pic_url = models.CharField(max_length=255)
    is_sold = models.BooleanField(default=False)
    posted_by = models.ForeignKey(
        User, related_name='pets', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # users_who_liked
