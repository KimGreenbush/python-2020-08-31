from django.db import models


# Create your models here.
class Food(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    desc = models.TextField()
    # is_season =
    prepared_by = models.ForeignKey(
        'Chef', related_name="foods", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # objects =

# 1 to many
# Who cooked it?


class Chef(models.Model):
    name = models.CharField(max_length=255)
    specialty = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # foods


# Many to Many
# Category
# Course
