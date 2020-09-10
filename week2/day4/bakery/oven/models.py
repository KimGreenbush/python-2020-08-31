from django.db import models


# 1 to many
# Who cooked it?
class Chef(models.Model):
    name = models.CharField(max_length=255)
    specialty = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # foods

    # cateories = models.ManyToManyField('Category', related_name="chefs")


class Food(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    desc = models.TextField()
    prepared_by = models.ForeignKey(
        'Chef', related_name="foods", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # categories

# Many to Many
# Category
class Category(models.Model):
    name = models.CharField(max_length=255)
    foods = models.ManyToManyField(Food, related_name="categories")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # chefs
